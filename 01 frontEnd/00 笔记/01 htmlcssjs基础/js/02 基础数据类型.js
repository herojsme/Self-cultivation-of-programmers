null和undefined的区别？
    null是一个表示"无"的对象，转为数值时为0；undefined是一个表示"无"的原始值，转为数值时为NaN。
    undefined：
    （1）变量被声明了，但没有赋值时，就等于undefined。
    （2) 调用函数时，应该提供的参数没有提供，该参数等于undefined。
    （3）对象没有赋值的属性，该属性的值为undefined。
    （4）函数没有返回值时，默认返回undefined。
    null：
    （1） 作为函数的参数，表示该函数的参数不是对象。
    （2） 作为对象原型链的终点。


Number
String
Boolean
Symbol
    typeof Symbol() === "symbol";
    Symbol("bar") === Symbol("bar"); // false，Symbol() 函数每次都会返回新的一个 symbol
    Symbol.for("bar") === Symbol.for("bar"); // true，并不是每次都会创建一个新的 symbol，它会首先检查给定的 key 是否已经在注册表中了
    var globalSym = Symbol.for("foo");
    Symbol.keyFor(globalSym); // "foo"
    var localSym = Symbol();
    Symbol.keyFor(localSym); // undefined，
    Symbol.iterator 为每一个对象定义了默认的迭代器。
    Symbol.replace 这个属性指定了当一个字符串替换所匹配字符串时所调用的方法。String.prototype.replace() 方法会调用此方法。
        class Replace1 {
            constructor(value) {
            this.value = value;
            }
            [Symbol.replace](string) {
            return `s/${string}/${this.value}/g`;
            }
        }
        
        console.log('foo'.replace(new Replace1('bar')));
        // Expected output: "s/foo/bar/g"
Undefined
Nul
