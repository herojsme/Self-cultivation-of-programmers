### 常见目录说明：

- /bin： 存放二进制可执行文件(ls,cat,mkdir 等)，常用命令一般都在这里；
- /etc： 存放系统管理和配置文件；
- /home： 存放所有用户文件的根目录，是用户主目录的基点，比如用户 user 的主目录就是/home/user，可以用~user 表示；
- /usr ： 用于存放系统应用程序；
- /opt： 额外安装的可选应用程序包所放置的位置。一般情况下，我们可以把 tomcat 等都安装到这里；
- /proc： 虚拟文件系统目录，是系统内存的映射。可直接访问这个目录来获取系统信息；
- /root： 超级用户（系统管理员）的主目录（特权阶级^o^）；
- /sbin: 存放二进制可执行文件，只有 root 才能访问。这里存放的是系统管理员使用的系统级别的管理命令和程序。如 ifconfig 等；
- /dev： 用于存放设备文件；
- /mnt： 系统管理员安装临时文件系统的安装点，系统提供这个目录是让用户临时挂载其他的文件系统；
- /boot： 存放用于系统引导时使用的各种文件；
- /lib ： 存放着和系统运行相关的库文件 ；
- /tmp： 用于存放各种临时文件，是公用的临时文件存储点；
- /var： 用于存放运行时需要改变数据的文件，也是某些大文件的溢出区，比方说各种服务的日志文件（系统启动日志等。）等；
- /lost+found： 这个目录平时是空的，系统非正常关机而留下“无家可归”的文件（windows 下叫什么.chk）就在这里。

### 命令记不住怎么办

- man 用来显示某个命令的文档信息。比如：man ls
- info 你可以认为和 man 是一样的
- --help

### yum 管理工具

- 列出所有可更新的软件清单命令：yum check-update
- 更新所有软件命令：yum update
- 仅安装指定的软件命令：yum install <package_name>
- 仅更新指定的软件命令：yum update <package_name>
- 删除软件包命令：yum remove <package_name>
- 查找软件包命令：yum search <keyword>



### vim操作

-  esc 命令模式
- pageUp上页
- gg  移动端文档第一行
- n<Enter> n 为数字。光标向下移动 n 行
- i/insert 输入模式
-  :q!强制退出
- 搜索
  -  /word 在光标之下想要查找word单词
  -  ?word 在光标上找word单词
  -  n 英文按键,重复前一个搜索动作
  - N  与n相反,进行前一个搜索动作

### 目录切换

- cd .. 上一层
- cd / 主目录
- cd - 上一个所在目录

### 目录操作命令

- mkdir 增加目录
- ls 或者 ll 查看目录信息
- find 目录 参数： 寻找目录（查）
  示例：
  - 列出当前目录及子目录下所有文件和文件夹: find .
  - 在/home 目录下查找以.txt 结尾的文件名:find /home -name "\*.txt"
  - 同上，但忽略大小写: find /home -iname "\*.txt"
  - 当前目录及子目录下查找所有以.txt 和.pdf 结尾的文件:find . \( -name "_.txt" -o -name "_.pdf" \)或 find . -name "_.txt" -o -name "_.pdf"
- mv 目录名称 新目录名称： 修改目录的名称（改）移动修改
- cp -r 目录名称 目录拷贝的目标位置： 拷贝目录（改），-r 代表递归拷贝
- rm [-rf] 目录: 删除目录（删）

### 文件的操作命令

- touch 文件名称: 文件的创建（增）
- cat/more/less/tail/head 文件名称 文件的查看（查）
  - cat： 只能显示最后一屏内容
  - more： 可以显示百分比，回车可以向下一行， 空格可以向下一页，q 可以退出查看
  - less： 可以使用键盘上的 PgUp 和 PgDn 向上 和向下翻页，q 结束查看
  - tail-n10 ： 查看文件的后 10 行，Ctrl+C 结束
  - head-n10 ： 查看文件的头 10 行，Ctrl+C 结束
- vim 文件： 修改文件的内容（改）
- rm -rf 文件： 删除文件（删）
  - -r 递归
  - -f 强制
- cp -f file1 file2 复制

### 文件的操作命令

- 压缩文件 tar [-zcvf]

  - z 调用 gzip c 打包文件 v 显示过程 f 指定文件名
  - tar -zcvf test.tar.gz aaa.txt bbb.txt ccc.txt 或：tar -zcvf test.tar.gz /test/

- 解压文件 tar [-xvf] 压缩文件
  - x：代表解压
  - tar -xvf xxx.tar.gz -C /usr（- C 代表指定解压的位置）
- 压缩文件 tar

### 权限操作

- 文件类型
  - d： 代表目录
  - -： 代表文件
  - l： 代表链接
- 文件类型
  - r：代表权限是可读，r 也可以用数字 4 表示
  - w：代表权限是可写，w 也可以用数字 2 表示
  - x：代表权限是可执行，x 也可以用数字 1 表示
- 用户
  - 所有者，文件创建者， ls -ahl 查看，chown 文件名可以修改所有者
  - 文件所在组 用 ls ‐ahl 命令可以看到文件的所有组 也可以使用 chgrp 组名 文件名来修改文件所在的组。
  - 其它组
- 修改文件/目录的权限的命令：chmod
  - chmod u=rwx,g=rw,o=r aaa.txt

* 假如我们装了一个 zookeeper，我们每次开机到要求其自动启动该怎么办？

  - 添加可执行权限，命令是:chmod +x zookeeper
  - 添加到开机启动项里面，命令是：chkconfig --add zookeeper
  - 想看看是否添加成功，命令是：chkconfig --list

### 用户管理

- 用户管理
  - useradd zhang3 增加用户 -g 指定用户组
  - userdel -f zhang3 删除用户
  - usermod 修改用户
  - passwd 设置一个密码 passwd zhang3
- 用户组管理
  - groupadd 选项 用户组 :增加一个新的用户组
  - groupdel 用户组:要删除一个已有的用户组
  - groupmod 选项 用户组 : 修改用户组的属性
    - groupmod -g 102 group2 将组 group2 的组标识号修改为 102

### 其他常用命令

- pwd： 显示当前所在位置
- grep 要搜索的字符串 要搜索的文件 --color： 搜索命令，--color 代表高亮显示
- ps -ef/ps aux： 这两个命令都是查看当前系统正在运行进程，两者的区别是展示格式不同。如果想要查看特定的进程可以使用这样的格式：ps aux|grep redis （查看包括 redis 字符串的进程）
  注意：如果直接用 ps（（Process Status））命令，会显示所有进程的状态，通常结合 grep 命令查看某进程的状态。
- kill -9 进程的 pid： 杀死进程（-9 表示强制终止。）
- 网络通信命令
  - 查看当前系统的网卡信息：ifconfig
  - 查看与某台机器的连接情况：ping
  - 查看当前系统的端口使用：netstat -an
- shutdown： shutdown -h now： 指定现在立即关机；shutdown +5 "System will shutdown after 5 minutes":指定 5 分钟后关机，同时送出警告信息给登入用户。
- reboot： reboot： 重开机。reboot -w： 做个重开机的模拟（只有纪录并不会真的重开机）。
- export： export 用来设定一些环境变量 export PATH=$PATH:/home/xjj/jdk/bin
- ssh：
- sftp
- sort 排序

### 管道

- ; 顺序执行，如 mkdir a;rmdir a
- && 条件执行，如 mkdir a && rmdir a
- || 条件执行，如 mkdir a || rmdir a，后面的命令将不执行
- | 管道，前面命令的输出，将作为后面命令的输入
