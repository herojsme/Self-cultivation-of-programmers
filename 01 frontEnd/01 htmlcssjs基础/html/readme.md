<!-- 重点 -->

### 常用语义化标签

- 布局 header footer nav article section aside
- 列表 dl dd dt ul li
- h1-h6 hgroup
- code 文字
- div span
- address 地址 caption 说明文字
- 强调 em strong
- 引用 blockquote
- 删除线 del
- 下划线 ins
- 变量 var <p> 一个简单的方程：<var>x</var> = <var>y</var> + 2 </p>

### 多媒体

- video

  - 属性:
    - src:视频地址
    - autoplay:是否自动播放
    - controls:是否显示控制条
    - loop:是否循环播放
    - poster:海报帧占位符
  - 事件:
    - 检查 canplay
    - 播放 play
    - 暂停 pause

- audio

### 画布 canvas

```js
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

- ctx.save() // 把状态保存起来
  ctx.translate(x,y) //设置中心点
  ctx.beginPath()
  ctx.arc(a,b,100,0,2\*Math.PI)//画圆 中心点 a,b,半径,开始角度,结束角度
  ctx.moveTo()// 设置画线起点
  ctx.lineTo()// 画线经过点
  ctx.stroke() //执行画线操作
  ctx.closePath()
  //其他 保存为图片 填充文字
```

### iframe

- 属性

  - frameborder 是否显示边框 yes/no
  - height
  - width
  - name 设置名称,可以用 window.frames[name]获取到相应的 dom
  - scrolling yes/no/auto
  - src
  - sandbox 对 iframe 一系列限制

- dom

  - contentWindow iframe 的 window 对象
  - contentDocument iframe 的 document 对象

- 同域与不同域

  - 父页面对子页面的操作
  - iframe 的 src 与父页面同域父页面可以改写子页面内容;如 a
  - 不同域,不可以改动子页面,但可以跳转;如 b

    ```html
    A:<iframe
      id="mainIframe"
      name="mainIframe"
      src="/main.html"
      frameborder="0"
      scrolling="auto"
    ></iframe>

    B:<iframe
      id="mainIframe"
      name="mainIframe"
      src="http://www.baidu.com"
      frameborder="0"
      scrolling="auto"
    ></iframe>
    ```

  - 子页面对父页面的操作
    - 子页面里面 window.top 获取最顶层 window 对象
    - 子页面里面 window.parent 获取父级 window 对象
    - 子页面里面 window.self 获取自身 window 对象

### 与 xml 区别

### script

### header

### link

### 声明
