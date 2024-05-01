<!-- 重点 -->

### 与 xml 区别

### 声明

- <!DOCTYPE html>

### <header>

- <title> 文档添加标题
- <meta > 元数据就是描述数据的数据，如字符编码、作者

### <body>

### <link> @import

- <link>是在html文档引入外部样式文件
- @import 是在 css 文件中引入样式文件
- <link rel="stylesheet" href="my-css-file.css" />

### <script>

- <script src="my-js-file.js" defer></script>defer 以告诉浏览器在解析完成 HTML 后再加载 JavaScript

### 常用语义化标签

- 布局 <header>页眉 <nav>导航栏 <main>主内容 <article>文章 <section>段落 <aside>侧边栏 <footer>页脚
- <code> 文字
- <image> 图片
- <a> 超链接
- <address> 地址 <caption> 说明文字
- 强调 <em> <strong>
- <abbr> 标记这个单词是缩写，如<abbr>NBA</abbr>
- 引用 <blockquote>
- 删除线 <del>
- 变量 <var> <p> 一个简单的方程：<var>x</var> = <var>y</var> + 2 </p>
- 上标 下标<sup> 和 <sub>
- 保留空白字符 <pre>
- 时间日期 <time>
- 表格<table>

### 无语义化

- 列表 <dl> <dd> <dt> <ul> <li>
- h1-h6 <hgroup>
- 斜体 <i>
- 下划线 <u>
- 加粗 <b>
- 换行 <br>
- 水平分割线 <hr>
- <div> <span><p>

### 多媒体

- <video>

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

- <audio>
- <iframe> 嵌入其他网页
- <object> 表示引入一个外部资源:图片、pdf 等
- <svg>

### 画布 <canvas>

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

### <iframe>

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
