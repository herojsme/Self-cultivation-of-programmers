//单一原则:一个程序做一件事
//开放/封闭原则:扩展封闭,修改封闭  你可以扩展,不可以改我内部代码
//里氏替换原则  父类能出现子类必定能出现
//接口隔离  接口专一功能
//依赖倒转原则  面向接口编程，依赖于抽象而不依赖于具体,使用的人知道有这接口即可,不关心实现

// 常用工厂模式  观察者模式  代理模式  外观模式  责任链 单例模式 策略模式 迭代模式 中介者模式 访问者模式 享元模式

// 工厂模式  定义一个创建对象的接口，让其子类自己决定实例化哪一个工厂类，工厂模式使其创建过程延迟到子类进行。
class Product {
  constructor(name) {
    this.name = name;
  }
  say() {
    console.log(this.name);
  }
}
class Factory {
  create(name) {
    return new Product(name);
  }
}
let factory = new Factory();
let p = factory.create("p1");
p.say();

class jQuery {
  constructor(selector) {
    super(selector);
  }
  add() {}
  // 此处省略若干API
}

window.$ = function (selector) {
  return new jQuery(selector);
};

// 创建对象的过程可能很复杂，但我们只需要关心创建结果。
// 适用场景:需要依赖具体环境创建不同实例，这些实例都有相同的行为,这时候我们可以使用工厂模式，简化实现的过程，同时也可以减少每种对象所需的代码量，有利于消除对象间的耦合，提供更大的灵活性

// 单例模式:  只要有实例存在就返回已有的实例
class A {
  constructor(name) {
    this.name = name;
  }
  say() {
    console.log(this.name);
  }
}
// 单例模式
// 优点 全局只有一个类
// 缺点 没有接口，不能继承，与单一职责原则冲突，一个类应该只关心内部逻辑，而不关心外面怎么样来实例化。
// 场景例子
// 定义命名空间和实现分支型方法
// 登录框
// vuex 和 redux中的store

// class ProxyA {
//   instance;
//   constructor(props) {
//     if (this.instance) {
//       return this.instance;
//     } else {
//       this.instance = new A(props);
//       return this.instance;
//     }
//   }
// }
// 错误写法  箭头函数不能实例化
// const ProxyA = ( ()=> {})()
const ProxyA = (function () {
  let instance;
  return function (name) {
    if (!instance) {
      instance = new A(name);
    }
    return instance;
  };
})();

// const a = new A();
const b = new ProxyA("小明");
const c = new ProxyA("小红");
console.log(b, c);
console.log(b === c);

const target = () => {
  return "aaa";
};
const p1 = new Proxy(target, {
  // get(target, propKey,proxyObj){},
  // set(obj, propKey, value){},
  apply(target, ctx, args) {
    return "bbb";
  },
  //   has(target,key){}
  //   constructor(target,args){}
});
p1(); //bbb
// 处理速度可能有差别,非直接访问存在开销
//跟装饰器的区别,装饰器是扩展原有,代理则显示原有但经过代理

// 外观模式 Facade
// 为子系统一组接口提供一个统一一致的界面,定义一个高层接口,使子系统更加容易
// 如 可以封装一个统一的event接口处理兼容
function addEvent(el, ev, fn) {
  if (el.addEventListener) {
    el.addEventListener(ev, fn);
  } else if (el.attachEvent) {
    el.attachEvent(ev, fn);
  } else {
    el["on" + ev] = fn;
  }
}
//设计初期，应该要有意识地将不同的两个层分离，比如经典的三层结构，在数据访问层和业务逻辑层、业务逻辑层和表示层之间建立外观Facade
//在维护一个遗留的大型系统时，可能这个系统已经很难维护了，这时候使用外观Facade也是非常合适的，为系系统开发一个外观Facade类，为设计粗糙和高度复杂的遗留代码提供比较清晰的接口，让新系统和Facade对象交互，Facade与遗留代码交互所有的复杂工作
// 缺点不符合开闭原则，如果要改东西很麻烦，继承重写都不合适。

// 观察者模式  订阅者都可以收到通知,一对多
// subscription  publish/observer
//PubSub
// var mySubscriber = function (msg, data) {
//     console.log( msg, data );
// };
// var token = PubSub.subscribe('MY TOPIC', mySubscriber);
// PubSub.publish('MY TOPIC', 'hello world!');
class Publish {
  constructor() {
    this.allObserver = [];
  }

  addPublish(pb) {
    this.allObserver.push(pb);
  }

  publish(msg) {
    this.allObserver.forEach((el) => {
      el.say(msg);
    });
  }
}
class SubScribe {
  constructor(name, sb) {
    this.msg = "";
    this.name = name;
    this.sb = sb;
    sb.addPublish(this);
  }

  say(msg) {
    console.log(`${this.name}接收到:`, msg);
  }
}
const sb = new Publish();
const pb1 = new SubScribe("小明", sb);
const pb2 = new SubScribe("小红", sb);
sb.publish("hello everyone"); // 后期可以加频道之类的区分隔离
// 总结:每个观察者或订阅者关联发布者,发布者维护所有订阅者的订阅池
// 支持简单的广播通信，自动通知所有已经订阅过的对象
// 观察者模式所做的工作就是在解耦，让耦合的双方都依赖于抽象，而不是依赖于具体。从而使得各自的变化都不会影响到另一边的变化。
// 过度使用会导致对象与对象之间的联系弱化，会导致程序难以跟踪维护和理解

// 状态模式 允许一个对象在其内部状态改变的时候改变它的行为，对象看起来似乎修改了它的类。
// 如一个英雄 奔跑时 眩晕时 站在不动时各种动作不一样,普通写法为if else 区分
class HeroState {
  constructor(name) {
    this.state = name;
  }
  toAction(actionContext, ...arg) {
    Reflect.apply(actionContext[this.state], this, arg);
  }
}
class HeroContext {
  run() {
    console.log("run");
  }
  faint() {
    console.log("faint");
  }
}

// 有限状态机

// const HeroContext3={
//   run() {
//     console.log("run");
//   },
//   faint() {
//     console.log("faint");
//   },
// };
const _heroContext = new HeroContext();
const _heroRun = new HeroState("run");
const _heroFaint = new HeroState("faint");
_heroRun.toAction(_heroContext);
_heroFaint.toAction(_heroContext);

// 也可以这么写

var trafficLight = (function () {
  var currentLight = null;
  return {
    change: function (light) {
      currentLight = light;
      currentLight.go();
    },
  };
})();

function RedLight() {}
RedLight.prototype.go = function () {
  console.log("this is red light");
};
function GreenLight() {}
GreenLight.prototype.go = function () {
  console.log("this is green light");
};
function YellowLight() {}
YellowLight.prototype.go = function () {
  console.log("this is yellow light");
};

trafficLight.change(new RedLight());
trafficLight.change(new YellowLight());

// 迭代器模式
class Iterator {
  constructor(list) {
    this.index = 0;
    this.iteratorList = list ? [...list] : [];
  }
  next() {
    if (this.index < this.iteratorList.length) {
      const value = this.iteratorList[this.index++];
      return {
        value,
        done: false,
      };
    }
    return {
      value: null,
      done: true,
    };
  }
}
const _iterator1 = new Iterator([1, 2, 3, 4, 5]);

// 桥接模式  把部分功能以单独的类实现
class Color {
  constructor(name) {
    this.name = name;
  }
}
class Shape {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  draw() {
    console.log(`${this.color.name} ${this.name}`);
  }
}

let red = new Color("red");
let yellow = new Color("yellow");
let circle = new Shape("circle", red);
circle.draw();
let triangle = new Shape("triangle", yellow);
triangle.draw();

// 组合模式 将对象组合成树形结构，以表示“整体-部分”的层次结构
class TrainOrder {
  create() {
    console.log("创建火车票订单");
  }
}
class HotelOrder {
  create() {
    console.log("创建酒店订单");
  }
}

class TotalOrder {
  constructor() {
    this.orderList = [];
  }
  addOrder(order) {
    this.orderList.push(order);
    return this;
  }
  create() {
    this.orderList.forEach((item) => {
      item.create();
    });
    return this;
  }
}
// 可以在购票网站买车票同时也订房间
let train = new TrainOrder();
let hotel = new HotelOrder();
let total = new TotalOrder();
total.addOrder(train).addOrder(hotel).create();

// 原型模式 prototype  原型实例指向创建对象(共享的对象),带来性能提升
class Person {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
class Student extends Person {
  constructor(props) {
    super(props);
  }
  say() {
    console.log("hello world");
  }
}
const st1 = new Student("张三");
st1.getName();
st1.say();

// 策略模式  根据不同需求返回不同的策略
//策略类
const levelObj = {
  a: () => console.log("a 策略"),
  b: () => console.log("b 策略"),
};
//环境类
function calculate(env) {
  return levelObj[env];
}
calculate("a");
calculate("b");
//优点 利用组合、委托、多态等技术和思想，可以有效的避免多重条件选择语句,提供了对开放-封闭原则的完美支持，将算法封装在独立的strategy中，使得它们易于切换，理解，易于扩展
//缺点 会在程序中增加许多策略类或者策略对象;要使用策略模式，必须了解所有的strategy，必须了解各个strategy之间的不同点，这样才能选择一个合适的strategy

// 享元模式 如果一个应用程序使用了大量的对象，而这些大量的对象造成了很大的存储开销时就应该考虑使用享元模式
// 场景如 多人轮流用车
class Car {
  constructor(name) {
    this.usingState = false;
    this.carName = name;
  }
  drive(candidateName) {
    return new Promise((resolve) => {
      this.usingState = true;
      console.log(`${candidateName}正在${this.carName}上学习`);
      setTimeout(() => {
        console.log(`${candidateName}学习完成`);
        this.usingState = false;
        resolve();
      }, Math.random * 2000);
    });
  }
}
const LearnDriving = {
  _pool: [],
  //车辆池
  _queue: [],
  //等待队列
  addCars(nameList) {
    nameList.forEach((name) => this._pool.push(new Car(name)));
  },
  registerCandidates(nameList) {
    nameList.forEach((name) => this.queueLearn(name));
  },
  queueLearn(name) {
    const leisureCar = this._pool.find((car) => !car.usingState);
    //         console.log('空闲的车', leisureCar);
    if (leisureCar) {
      leisureCar.drive(name).then(() => {
        const _qCandidate = this._queue.shift();
        _qCandidate && this.queueLearn(_qCandidate);
      });
    } else {
      this._queue.push(name);
      console.log(`${name}加入等待队列`, this._queue);
    }
  },
};
LearnDriving.addCars(["奔驰", "奥迪", "别克"]);
//两辆车
LearnDriving.registerCandidates([
  "潇潇",
  "赵瑞",
  "曾克峰",
  "任我行",
  "桃子",
  "李强",
  "郑师傅",
  "苏珊",
  "陈倩倩",
]);

//模板模式  父类中封装了子类的算法框架，包括实现一些公共方法和封装子类中所有方法的执行顺序
class Beverage {
  constructor({ brewDrink, addCondiment }) {
    this.brewDrink = brewDrink;
    this.addCondiment = addCondiment;
  }
  /* 烧开水，共用方法 */
  boilWater() {
    console.log("水已经煮沸=== 共用");
  }
  /* 倒杯子里，共用方法 */
  pourCup() {
    console.log("倒进杯子里===共用");
  }
  /* 模板方法 */
  init() {
    this.boilWater();
    this.brewDrink();
    this.pourCup();
    this.addCondiment();
  }
}
/* 咖啡 */
const coffee = new Beverage({
  /* 冲泡咖啡，覆盖抽象方法 */
  brewDrink: function () {
    console.log("冲泡咖啡");
  },
  /* 加调味品，覆盖抽象方法 */
  addCondiment: function () {
    console.log("加点奶和糖");
  },
});
coffee.init();

//职责链模式  层层传递
// 请假审批，需要组长审批、经理审批、总监审批
class Action {
  constructor(name) {
    this.name = name;
    this.nextAction = null;
  }
  setNextAction(action) {
    this.nextAction = action;
  }
  handle() {
    console.log(`${this.name} 审批`);
    if (this.nextAction != null) {
      this.nextAction.handle();
    }
  }
}

let a1 = new Action("组长");
let a2 = new Action("经理");
let a3 = new Action("总监");
a1.setNextAction(a2);
a2.setNextAction(a3);
a1.handle();

// 命令模式  将一个请求封装成一个对象，从而让你使用不同的请求把客户端参数化，对请求排队或者记录请求日志，可以提供命令的撤销和恢复功能。 接受者接受命令,触发者选择何时触发
// 接收者类
class Receiver {
  execute() {
    console.log("接收者执行请求");
  }
}

// 命令者
class Command {
  constructor(receiver) {
    this.receiver = receiver;
  }
  execute() {
    console.log("命令");
    this.receiver.execute();
  }
}
// 触发者
class Invoker {
  constructor(command) {
    this.command = command;
  }
  invoke() {
    console.log("开始");
    this.command.execute();
  }
}

// 仓库
const warehouse = new Receiver();
// 订单
const order = new Command(warehouse);
// 客户
const client = new Invoker(order);
client.invoke();

// 适配器模式 将其中一个类的接口化为另一个接口,使其不兼容的问题得以解决
class Plug {
  getName() {
    return "apple";
  }
}
class Target {
  constructor() {
    this.plug = new Plug();
  }
  getName() {
    return this.plug.getName() + "适配器";
  }
}
// 额外对象的创建，非直接调用，存在一定的开销（且不像代理模式在某些功能点上可实现性能优化)
// 场景第三方sdk
// 自己封装的ajax， 使用方式如下
ajax({
  url: "/getData",
  type: "Post",
  dataType: "json",
  data: {
    test: 111,
  },
}).done(function () {});
// 因为历史原因，代码中全都是：
// $.ajax({....})

// 做一层适配器
var $ = {
  ajax: function (options) {
    return ajax(options);
  },
};

// 装饰者模式  不改变对象自身的情况下,在程序运行时动态添加方法
// 如: 3个型号的自行车为单独类,为每个车增加前灯,尾灯,铃铛用继承的方法为3*3=9,如果把前灯,尾灯,铃铛作为装饰函数则3+3=6
// es7 decorator
// 缺点:多层装饰比较复杂。
// 常常会引入许多小对象，看起来比较相似，实际功能大相径庭，从而使得我们的应用程序架构变得复杂起来

// 代理模式 为对象提供一个替代品或者占位符,需要才调用访问 如图片延迟加载
const imgObj = (() => {
  const img = document.createElement("img");
  document.body.append(img);
  const setSrc = (src) => {
    img.src = src;
  };
  return {
    setSrc,
  };
})();

const proxyImage = (src) => {
  const pImg = new Image();
  //代理类执行完才把值传过去
  pImg.loading = () => {
    imgObj.setSrc(this.src);
  };
  //占位符
  imgObj.setSrc("./src/load.gif");
  pImg.src = src;
};
proxyImage("./src/xx.png");
// 场景: 小明追A,A在心情不好的时候是不收花的,小明刚认识A,所以不知道什么给花,但A的闺蜜B很了解,所以小明只需要让B给花即可
// es6 proxy

// 中介者模式  通过一个中介者对象,其他一切操作都需通过中介者来通信
//这个和策略模式很像啊?
const mediator = (type) => {
  switch (type) {
    case "a":
      break;
    case "b":
      break;
  }
};

mediator("a");
mediator("b");
// 案例2
class A {
  constructor() {
    this.number = 0;
  }
  setNumber(num, m) {
    this.number = num;
    if (m) {
      m.setB();
    }
  }
}
class B {
  constructor() {
    this.number = 0;
  }
  setNumber(num, m) {
    this.number = num;
    if (m) {
      m.setA();
    }
  }
}
class Mediator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  setA() {
    let number = this.b.number;
    this.a.setNumber(number * 10);
  }
  setB() {
    let number = this.a.number;
    this.b.setNumber(number / 10);
  }
}

let a = new A();
let b = new B();
let m = new Mediator(a, b);
a.setNumber(10, m);
console.log(a.number, b.number);
b.setNumber(10, m);
console.log(a.number, b.number);
//系统中对象之间存在比较复杂的引用关系，导致它们之间的依赖关系结构混乱而且难以复用该对象

// 解释器模式 给定一个语言, 定义它的文法的一种表示，并定义一个解释器, 该解释器使用该表示来解释语言中的句子
//易于改变和扩展文法。在解释器模式中使用类来表示语言的文法规则，因此可以通过继承等机制来改变或扩展文法
class Context {
  constructor() {
    this._list = []; // 存放 终结符表达式
    this._sum = 0; // 存放 非终结符表达式(运算结果)
  }

  get sum() {
    return this._sum;
  }
  set sum(newValue) {
    this._sum = newValue;
  }
  add(expression) {
    this._list.push(expression);
  }
  get list() {
    return [...this._list];
  }
}

class PlusExpression {
  interpret(context) {
    if (!(context instanceof Context)) {
      throw new Error("TypeError");
    }
    context.sum = ++context.sum;
  }
}
class MinusExpression {
  interpret(context) {
    if (!(context instanceof Context)) {
      throw new Error("TypeError");
    }
    context.sum = --context.sum;
  }
}

/** 以下是测试代码 **/
const context = new Context();

// 依次添加: 加法 | 加法 | 减法 表达式
context.add(new PlusExpression());
context.add(new PlusExpression());
context.add(new MinusExpression());

// 依次执行: 加法 | 加法 | 减法 表达式
context.list.forEach((expression) => expression.interpret(context));
console.log(context.sum);

// 访问者模式 访问者模式让我们能够在不改变一个对象结构的前提下能够给该对象增加新的逻辑，新增的逻辑保存在一个独立的访问者对象中。访问者模式常用于拓展一些第三方的库和工具。
// 访问者
class Visitor {
  constructor() {}
  visitConcreteElement(ConcreteElement) {
    ConcreteElement.operation();
  }
}
// 元素类
class ConcreteElement {
  constructor() {}
  operation() {
    console.log("ConcreteElement.operation invoked");
  }
  accept(visitor) {
    visitor.visitConcreteElement(this);
  }
}
// client
let visitor = new Visitor();
let element = new ConcreteElement();
elementA.accept(visitor);
// 对象结构中对象对应的类很少改变，但经常需要在此对象结构上定义新的操作
// 需要对一个对象结构中的对象进行很多不同的并且不相关的操作，而需要避免让这些操作"污染"这些对象的类，也不希望在增加新操作时修改这些类。
