### 相关文件夹

rpm -ql nginx 查看 nginx 安装到哪了
.conf 配置文件
/etc/nginx/conf.d/ 文件夹，是我们进行子配置的配置项存放处，/etc/nginx/nginx.conf 主配置文件会默认把这个文件夹中所有子配置项都引入；
/usr/share/nginx/html/ 文件夹，通常静态文件都放在这个文件夹，也可以根据你自己的习惯放其他地方；

---

### 常用命令

```
nginx -s reload  向主进程发送信号,重新加载配置
nginx -s reopen 重启
nginx -s stop   关闭
nginx -s quit   处理完后退出
nginx -t -c   <配置路径>  # 检查配置是否有问题，如果已经在配置目录，则不需要-c
```

### 经典配置

```
user  nginx;                                # 运行用户，默认即是nginx，可以不进行设置
worker_processes  1;                        # Nginx 进程数，一般设置为和 CPU 核数一样
error_log  /var/log/nginx/error.log warn;   # Nginx 的错误日志存放目录
pid        /var/run/nginx.pid;              # Nginx 服务启动时的 pid 存放位置

events {
    use epoll;     # 使用epoll的I/O模型(如果你不知道Nginx该使用哪种轮询方法，会自动选择一个最适合你操作系的)
    worker_connections 1024;   # 每个进程允许最大并发数
}

http {   # 配置使用最频繁的部分，代理、缓存、日志定义等绝大多数功能和第三方模块的配置都在这里设置
    # 设置日志模式
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;   # Nginx访问日志存放位置

    sendfile            on;   # 开启高效传输模式
    tcp_nopush          on;   # 减少网络报文段的数量
    tcp_nodelay         on;
    keepalive_timeout   65;   # 保持连接的时间，也叫超时时间，单位秒
    types_hash_max_size 2048;

    include             /etc/nginx/mime.types;      # 文件扩展名与类型映射表
    default_type        application/octet-stream;   # 默认文件类型

    include /etc/nginx/conf.d/*.conf;   # 加载子配置项

    server {
    	listen       80;       # 配置监听的端口
    	server_name  localhost;    # 配置的域名

    	location / {
    		root   /usr/share/nginx/html;  # 网站根目录
    		index  index.html index.htm;   # 默认首页文件
    		deny 172.168.22.11;   # 禁止访问的ip地址，可以为all
    		allow 172.168.33.44； # 允许访问的ip地址，可以为all
    	}

    	error_page 500 502 503 504 /50x.html;  # 默认50x对应的访问页面
    	error_page 400 404 error.html;   # 同上
    }
}

server 块可以包含多个 location 块，location 指令用于匹配 uri，语法
location [ = | ~ | ~* | ^~] uri {
	...
}
= 精确匹配
^~ 用于不包含正则的匹配
~ 符号后面的正则,区分大小写
~*  符号后的正则匹配,不区分大小写.跟~的优先级都很低,如有多个,则使用最长的那个
```

### 主上下文 变量

- 主上下文
- 变量 $host $request_method $args 等,可查看 nginx 内置变量

### 可配置二级域名虚拟主机

- 购买二级域名后,在 conf.d 文件夹内创建你要的 xxx.conf,因为在配置 etc/nginx/nginx.conf 里有 include etc/nginx/conf.d/\*.conf 是会把所有子配置加载进来

### 反向代理

server> location 里设置 proxy_pass
或者配置跨域处理

### 动静分离

serve{}

### 内容缓存

### 日志

### 压缩解压 gzip

- 也需要浏览器支持,需要在请求头中包含 Accept-Encoding:gzip,响应头返回 content-encoding:gzip
- 用法,只要底下这两个基本可以了,其他查询文档:

```
gzip on;
gzip types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;

```

### 负载均衡

```
http {
  upstream myserver {
  	# ip_hash;  # ip_hash 方式
    # fair;   # fair 方式
    server 127.0.0.1:8081;  # 负载均衡目的服务地址
    server 127.0.0.1:8080;
    server 127.0.0.1:8082 weight=10;  # weight 方式，不写默认为 1
  }

  server {
    location / {
    	proxy_pass http://myserver;
      proxy_connect_timeout 10;
    }
  }
}

```

nginx 提供了几种分配方式:

- 轮询，默认方式，每个请求按时间顺序逐一分配到不同的后端服务器，如果后端服务挂了，能自动剔除；
- weight，权重分配，指定轮询几率，权重越高，在被访问的概率越大，用于后端服务器性能不均的情况；
- ip_hash，每个请求按访问 IP 的 hash 结果分配，这样每个访客固定访问一个后端服务器，可以解决动态网页 session 共享问题。负载均衡每次请求都会重新定位到服务器集群中的某一个，那么已经登录某一个服务器的用户再重新定位到另一个服务器，其登录信息将会丢失，这样显然是不妥的；
- fair（第三方），按后端服务器的响应时间分配，响应时间短的优先分配，依赖第三方插件 nginx-upstream-fair，需要先安装；

---

### 次要

- 安装:
- 场景:
