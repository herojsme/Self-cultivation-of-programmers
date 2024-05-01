### 创建方式

```js
    const regexp = /\d+/g 字面量创建
    const regexp = new RegExp('\\d+', 'g') 构造函数创建
```

### 正则方法

```js
reg.test(str)：检索字符串中指定的值。返回true或false。
reg.exec(str)：用于检索字符串中的正则表达式的匹配。返回一个数组，其中存放匹配的结果。如果未找到匹配，则返回值为null。
注：如果没有指定g修饰符，那么每次匹配都是从头开始匹配，如果指定g修饰符以后，下次匹配则从上次匹配的结束位置开始匹配。

var str = 'Good good study day day up!';
// 正则表达式对象的方法
var regone = /good/ig;
var regtwo = new RegExp('good', 'ig');
console.log(regone.test(str));
console.log("——————————我是分割线——————————");
regone.lastIndex = 4;//指定索引开始匹配的位置
console.log(regone.exec(str));
console.log(regtwo.exec(str));
console.dir(regone)
```

### 字符串配合正则

```js
str.search(reg);
str.match(reg);
str.replace(reg);
str.split(reg);
```

### 正则表达式构成：元字符---限定符

```js
- *：匹配前面的子表达式零次或多次。
- +：匹配前面的子表达式一次或多次。
- ？：匹配前面的子表达式零次或一次。
- {n}：匹配确定n次。
- {n,}：至少匹配n次。
- {n, m}：最少匹配n次且最多匹配m次。

- 注：在限定符后紧跟 ? 则由贪婪匹配变成非贪婪匹配(懒惰模式)。
    var str = '<div id="box"></div><p></p>';
    var regone = /<.+>/;//贪婪模式
    var regtwo = /<.+?>/;//懒惰模式

    console.log(regone.exec(str));
    console.log(regtwo.exec(str));
```

### 正则表达式构成：元字符---字符匹配符

```js
- [xyz]：字符集合。匹配所包含的任意一个字符。
- [^xyz]：负值字符集合。匹配未包含的任意字符。
- [a-z]：字符范围。匹配指定范围内的任意字符。
- [^a-z]：负值字符范围。匹配任何不在指定范围内的任意字符。例如：[0-9]、- [0-9a-z]、[0-9a-zA-Z]
- \d：匹配一个数字字符。
- \D：匹配一个非数字字符。
- \w：匹配包含下划线的任何单词字符。等价于[a-z0-9A-Z_]
- \W：匹配任何非单词字符。等价于[^a-z0-9A-Z_]
- \s：匹配任何空白字符。
- \S：匹配任何非空白字符。
- .：匹配除”\n”之外的任何单个字符。
```

### 正则表达式构成：元字符---定位符

```js
- ^：匹配输入字符串的开始位置。
- $：匹配输入字符串的结束位置。
- \b：匹配一个单词边界，也就是单词和空格间的位置。
- \B：匹配非单词边界。
```

### 正则表达式构成：元字符---选择匹配符

```js
- |：可以匹配多个规则
- ()：捕获性分组
    var reg = /<(.+?)>(.*?)<\/\1>/g;
    console.log(str.match(reg));
```
