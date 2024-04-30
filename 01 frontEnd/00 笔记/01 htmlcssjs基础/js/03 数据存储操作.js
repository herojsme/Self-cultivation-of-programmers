// array
//  切割截取 slice splice  split
//  遍历  reduce  reduceRight  every some filter
//  数据进出  push pop unshift shift
//  复制 arr.slice()
//   从某数组拷贝 Array.form(arr) [...arr]
//   判断Array.isArray  Object.prototype.toString.call(arr)==="[Object Array]"
//  reverse()

去重;
Array.isArray();

// Set
// WeakSet
// Map
// WeakMap

// object
// 属性 __proto__
const obj = {};

Object.create(); // 创建一个对象,实现类继承
const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

const me = Object.create(person);
me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten
me.printIntroduction();

Object.assign(); // 浅拷贝属性
// 读写设置,get/set监听
Object.defineProperty(obj, "per1", {
  value: 1,
  writable: false,
});

// 遍历
Object.keys(obj);
Object.values(obj);
Object.entries(obj);

// 冻结
Object.freeze(obj);
Object.isFroze(obj); //是否冻结
//比较
Object.is();
// 自身属性
Object.hasOwenProperty();
Object.getOwenPropertyNames();
Object.getOwenPropertySymbols();

// string

// Symbol
//属性 description
//方法 for keyFor
// 内置symbol
// 内置symbol
