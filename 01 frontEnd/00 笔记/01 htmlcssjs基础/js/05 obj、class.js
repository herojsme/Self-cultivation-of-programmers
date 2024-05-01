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
Object.defineProperty(); //定义属性，读写，枚举
Object.defineProperties(); //定义多个属性，读写，枚举
Object.getOwnPropertyDescriptor(); //返回属性配置
Object.getOwnPropertyDescriptors(); //

// 原型操作
Object.getPrototypeOf(); //获取对象的原型
Object.setPrototypeOf(); //获取对象的原型

// prototype
//  __proto__ 指向实例对象在实例化时使用的原型对象,请用getPrototypeOf、setPrototypeOf取代
//  constructor 该实例对象的构造函数
//  toString() 返回一个代表该对象的字符串

// class
class Project {
  constructor() {
    super();
  }
  to() {}
  #ssw; //私有属性
  static ss = 11; //关键字定义静态方法
}

// 继承
//   extends
