// let const globalThis
// 运算符
// 作用域
// 隐式转换


this指针上下文对象

数据类型:
    基本类型：String、Number、Boolean、Symbol、Undefined、Nul
    引用类型：Object
内置对象:Math、Date、Array、Strting
事件循环：同步 微任务 宏任务

commonJs  amd ES模块化（ECMAScript Modules）
    CommonJS是服务器端的模块化规范，主要应用在Node.js中。它的主要特点是同步加载模块
    amd （Asynchronous Module Definition）AMD是针对浏览器端的模块化规范，它的主要特点是异步加载模块。这种方式可以避免因为加载模块而导致的页面阻塞。AMD使用define函数来定义模块，使用require函数来加载模块。
    ES模块化是ECMAScript 6（ES6）引入的模块化标准。它既可以应用在服务器端，也可以应用在浏览器端。ES模块化使用import关键字来导入模块，使用export关键字来导出模块。



for of 值
    可迭代对象的值序列
    可迭代对象的 [@@iterator]()] 方法
for in 属性
    迭代对象的可枚举字符串属性




阻止默认事件？
    event.preventDefault(); 
阻止冒泡事件？
    event.stopPropagation();  window.event.cancelBubble=true

类型判断
    通过instanceof运算符来判断
    isPrototypeOf()
    constructor
    typeof(对象)


图片/文件夹上传到后台是什么类型？
    file格式 (创建formData来完成file上传)
    base64格式
    Blob流格式


浅拷贝/深度拷贝的区别？
    浅拷贝拷贝属性时如果是对象，只会拷贝引用


// 闭包
一个函数内部定义的函数，并且该函数可以访问外部函数的变量


跨域的解决方案有哪些？
    jsonp
    后台头部设置: Access-Control-Allow-Origin ，cors
    proxy代理:
        nginx反向代理
        node使用中间件设置跨域
    iframe
    webSocket

Http协议详解 
    请求方式有: GET POST 附加新的数据 PUT DELETE  CONNECT  OPTIONS 
    响应:
        状态码:
            3xx重定向：301 永久移动; 302 临时移动;304 未修改
            4xx客户端错误:400 请求有语法错误; 401 未经授权; 403 拒绝提供服务
            5xx服务器端错误:
    http请求到渲染页面的全过程：
        1.域名解析 -->
        2.发起TCP的3次握手 --> 
        3.建立TCP连接后发起http请求 --> 
        4.服务器响应http请求，浏览器得到html代码 --> 
        5.浏览器解析html代码，并请求html代码中的资源（如js、css、图片等） --> 
        6.浏览器对页面进行渲染呈现给用户

强制类型转换和2种隐式类型转换?
    强制：String()，Boolean() Number(）parseInt() parseFloat()
    隐式 + - ==

call和apply的区别:
    func.call(func1,var1,var2,var3)
    func.apply(func1,[var1,var2,var3])


==等同和===恒等有什么不同？
    ==， 两边值类型不同的时候，要先进行类型转换，再比较。
    ===，不做类型转换，类型不同的一定不等。基础类型值相等，引用类型引用也要相等
    NaN不等于NaN


eval 作用？
    把对应的字符串解析成JS代码并运行；


内置对象
    数字和日期对象：
        Date
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
        Number
            isNaN()
            isFinite() 
            prototype
                toFixed()
        Math
            PI 圆周率
            abs(x)   返回一个数的绝对值
            floor(x) 向下取整后的值
            ceil(x)  向上取整后的值
            max([x[, y[, …]]]) 最大值
            min([x[, y[, …]]]) 最小值
            pow(x, y) y 次幂
            random() 返回一个 0 到 1 之间的伪随机数
            round(x) 四舍五入后的整数。
    字符串：
        String
            prototype
                length 长度
                charAt() 返回给定索引处值
                replace() 替换
                slice() 提取字符串的一部分
                split()分割
                toLowerCase()小写
                toUpperCase()大写
                trim()两端移除空白字符 trimStart() 或 trimEnd()
                normalize() 返回该字符串的 Unicode 标准化形式
                match() 方法检索字符串与正则表达式进行匹配的结果
                search() 方法用于在 String 对象中执行正则表达式的搜索，寻找匹配项
        RegExp
            prototype
                exec() 执行一个搜索匹配
                test() 是否匹配
                lastIndex
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

import export 
    import * as someIdentifier from "someModule";
    export * as ns from "mod";