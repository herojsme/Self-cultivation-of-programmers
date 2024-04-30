function Project() {}
Project.prototype.to = function () {};

const pro = new Project();

class Project {
  constructor(){
    super();
  }
  to() {}
  #ssw; //私有属性
  static ss=11; //关键字定义静态方法
}

// decorator
Object.create()
  assign()
  defineProperties()
  entries()
  freeze()
  fromEntries()
  getOwnPropertyDescriptor()
  getOwnPropertyDescriptors()
  getPrototypeOf() 返回指定对象的原型
  hasOwn() 是否是指定对象的自有属性
  is()  比较两个值是否相同
  isFrozen() 是否已经冻结
  keys() 所有给定对象自有可枚举字符串属性名称的数组

  prototype
    __proto__ 指向实例对象在实例化时使用的原型对象
    constructor 该实例对象的构造函数
    toString() 返回一个代表该对象的字符串


继承
  extends