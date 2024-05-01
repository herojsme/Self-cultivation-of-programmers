## dom

```js
    整个文档是一个文档（ Document）节点。
    每个HTML标签是一个元素（ Element）节点。
    每一个HTML属性是一个属性（ Attribute）节点。
    包含在HTML元素中的文本是文本（Text）节点

    document;
        // 查找:
            getElementsByTagName() //通过标签名称
            getElementsByName() //通过元素的Name属性的值(IE容错能力较强，会得到一个数组，其中包括id等于name值的)
            getElementById() //通过元素Id，唯一性
            querySelector()
            querySelectorAll()
        创建：
            createDocumentFragment() //创建一个DOM片段
            createElement() //创建一个具体的元素
            createTextNode() //创建一个文本节点
        属性：
            body 回当前文档的 <body>节点
            cookie 获取并设置与当前文档相关联的cookie
                ;path=path(例如 '/', '/mydir')
                ;domain=domain (例如 'example.com'，域名)
                ;max-age=max-age-in-seconds (例如一年为 60*60*24*365)
                ;expires=date-in-GMTString-format 过期
                ;secure (cookie 只通过 https 协议传输)
        element元素节点:
            节点操作：
                childNodes
                nodeName
                nodeType
                nodeValue
                parentNode
                parentElement
                previousSibling
                // 添加、移除、替换、插入
                appendChild()
                removeChild()
                replaceChild()
                insertBefore() //在已有的子节点前插入一个新的子节点
                cloneNode() 克隆一个 Node
                normalize() 对该元素下的所有文本子节点进行整理，合并相邻的文本节点并清除空文本节点。
        事件：
            drag
            fullscreenchange
            copy
            cut
            paste
            scroll
            wheel
```

## bom

```js
window;
    history
        replaceState() go() back()
    location
        reload() replace()
        .href 整个 URL
        .protocol 协议
        .host 域名
        .port 端口
        .pathname 路径
        .search 查询参数
        .hash 哈希
    navigator 用户代理的状态和身份
        .userAgent 当前浏览器的用户代理
    open()
    postMessage()
    alert()
    prompt()
    sessionStorage
        setItem()
        getItem()
    locaStorage
        setItem()
        getItem()
```

#### Window. write 和 document.innerhtml 区别？

    主要区别：document.write是直接将内容写入页面的内容流，会导致页面全部重绘，innerHTML将内容写入某个DOM节点，不会导致页面全部重绘

#### document.onload 和 document.ready 两个事件的区别？

    ready，表示文档结构已经加载完成（不包含图片等非文字媒体文件）
    onload，指示页面包含图片等文件在内的所有元素都加载完成
