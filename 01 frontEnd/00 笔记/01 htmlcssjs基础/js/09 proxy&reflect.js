//proxy reflect 相辅相成
//和proxy一一对应,proxy有的方法都在Reflect上找到

// 操作语言内部的方法; 现阶段，某些方法同时在Object和Reflect对象上部署，未来的新方法将只部署在Reflect对象上。

// 通过receiver可以改变this指针
// Reflect.get(target, name, receiver)
var myObject = {
  foo: 1,
  bar: 2,
  get baz() {
    return this.foo + this.bar;
  },
};

var myReceiverObject = {
  foo: 4,
  bar: 4,
};

Reflect.get(myObject, "foo"); // 1
Reflect.get(myObject, "baz", myReceiverObject); // 8
//   如果第一个参数不是对象，Reflect.get方法会报错。
Reflect.get(1, "foo"); // 报错
Reflect.get(false, "foo"); // 报错

Reflect.getOwnPropertyDescriptor(myReceiverObject, "bar");

// Reflect.set(target, name, value, receiver)
// 跟get一样,但是如果和Proxy一起使用时,如果传入参数有receiver时,会触发Proxy的defineProperty拦截

// Reflect.apply(target, thisArg, args)
// Reflect.construct(target, args)
// Reflect.defineProperty(target, name, desc)
// Reflect.deleteProperty(target, name)
// Reflect.has(target, name)
// Reflect.ownKeys(target)
// Reflect.isExtensible(target)
// Reflect.preventExtensions(target)
// Reflect.getOwnPropertyDescriptor(target, name)  //返回属性的描述对象
// Reflect.getPrototypeOf(target)
// Reflect.setPrototypeOf(target, prototype)

const p = new Proxy(target, handler);
// Proxy.revocable() 创建一个可撤销的Proxy对象
// handler 对象的方法
//    get(); //获取捕捉器
//    set(); //设置捕捉器
//    has(); //in 操作符的捕捉器
//    deleteProperty(); //delete 操作符的捕捉器。
//    defineProperty(); //Object.defineProperty 方法的捕捉器
//    ownKeys(); //Object.getOwnPropertyNames 方法和 Object.getOwnPropertySymbols 方法的捕捉器
//    apply(); //函数调用操作的捕捉器。
//    construct(); //new 操作符的捕捉器。

const handler = {
  get: function (obj, prop) {
    return prop in obj ? obj[prop] : 37;
  },
};

const p2 = new Proxy({}, handler);
p2.a = 1;
p2.b = undefined;

console.log(p.a, p.b); // 1, undefined
console.log("c" in p, p.c); // false, 37
