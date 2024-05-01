// let const globalThis
// 运算符
// 作用域

### 强制类型转换和 2 种隐式类型转换?

强制：String()，Boolean() Number(）parseInt() parseFloat()
隐式 + - ==

### this 指针上下文对象

### 事件循环：同步 微任务 宏任务

### 数据类型:

```
    基本类型：String、Number、Boolean、Symbol、Undefined、Nul
    引用类型：Object
    内置对象:Math、Date、Array、Strting
```

### commonJs amd ES 模块化（ECMAScript Modules）

```
CommonJS 是服务器端的模块化规范，主要应用在 Node.js 中。它的主要特点是同步加载模块
    amd （Asynchronous Module Definition）AMD 是针对浏览器端的模块化规范，它的主要特点是异步加载模块。这种方式可以避免因为加载模块而导致的页面阻塞。AMD 使用 define 函数来定义模块，使用 require 函数来加载模块。
    ES 模块化是 ECMAScript 6（ES6）引入的模块化标准。它既可以应用在服务器端，也可以应用在浏览器端。ES 模块化使用 import 关键字来导入模块，使用 export 关键字来导出模块。
```

### for of 与 for in 区别

```
    for of 值
    可迭代对象的值序列
    可迭代对象的 [@@iterator]()] 方法
    for in 属性
    迭代对象的可枚举字符串属性
```

### 事件冒泡 默认行为

```
    阻止默认事件？
    event.preventDefault();
    阻止冒泡事件？
    event.stopPropagation(); window.event.cancelBubble=true
```

### 类型判断

```
    通过 instanceof 运算符来判断
    isPrototypeOf()
    constructor
    typeof(对象)
```

### 图片/文件夹上传到后台是什么类型？

```
    file 格式 (创建 formData 来完成 file 上传)
    base64 格式
    Blob 流格式
```

### 浅拷贝/深度拷贝的区别？

```
    浅拷贝拷贝属性时如果是对象，只会拷贝引用
```

### 闭包

一个函数内部定义的函数，并且该函数可以访问外部函数的变量

### 跨域的解决方案有哪些？

```
    jsonp
    后台头部设置: Access-Control-Allow-Origin ，cors
    proxy 代理:
    nginx 反向代理
    node 使用中间件设置跨域
    iframe
    webSocket
```

### Http 协议详解

```
    请求方式有: GET POST 附加新的数据 PUT DELETE CONNECT OPTIONS
    响应:
        状态码:
            3xx 重定向：301 永久移动; 302 临时移动;304 未修改
            4xx 客户端错误:400 请求有语法错误; 401 未经授权; 403 拒绝提供服务
            5xx 服务器端错误:
    http 请求到渲染页面的全过程：
        1.域名解析 --> 2.发起 TCP 的 3 次握手 --> 3.建立 TCP 连接后发起 http 请求 --> 4.服务器响应 http 请求，浏览器得到 html 代码 -->
        5.浏览器解析 html 代码，并请求 html 代码中的资源（如 js、css、图片等） --> 6.浏览器对页面进行渲染呈现给用户
```

### call 和 apply 的区别:

```
    func.call(func1,var1,var2,var3)
    func.apply(func1,[var1,var2,var3])
```

### ==等同和===恒等有什么不同？

```
    ==， 两边值类型不同的时候，要先进行类型转换，再比较。
    ===，不做类型转换，类型不同的一定不等。基础类型值相等，引用类型引用也要相等
    NaN 不等于 NaN
```

### eval 作用？

```
    把对应的字符串解析成 JS 代码并运行；
```

### 内置对象

```javascript
    日期对象：Date
        now() 当前时间的毫秒数
        prototype.
        get[set]Date() 一个月中的哪一日
        get[set]Day() 一周中的第几天
        get[set]FullYear() 完整年份
        get[set]Hours() 小时
        get[set]Minutes()分钟数
        get[set]Seconds()秒数
        get[set]Milliseconds()毫秒数
        get[set]Time()毫秒数
        valueOf() 返回一个 Date 对象的原始值
    数学常数属性和数学函数方法：Math
                Math
                PI 圆周率
                abs(x) 返回一个数的绝对值
                floor(x) 向下取整后的值
                ceil(x) 向上取整后的值
                max([x[, y[, …]]]) 最大值
                min([x[, y[, …]]]) 最小值
                pow(x, y) y 次幂
                random() 返回一个 0 到 1 之间的伪随机数
                round(x) 四舍五入后的整数。
    RegExp：
        prototype
            exec() 执行一个搜索匹配
            test() 是否匹配
            lastIndex
    数值：Number
    字符串：String

    基本对象：
        Array
        Object
        Function
        Boolean
        Symbol
    使用键的集合对象：
        Map
        Set
        WeakMap
        WeakSet
    控制抽象对象：
        Iterator
            class MyIterator extends Iterator {
                next() {
                // …
                }
            }
    结构化数据：
        JSON
    错误对象：
        Error
    反射：
        Proxy
        Reflect
```

### import export

```js
    import _ as someIdentifier from "someModule";
    export _ as ns from "mod";
```
