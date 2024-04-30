// 异步的
let compose = function (...args) {
  const init = args.pop();

  return function (...arg) {
    return args.reverse().reduce(function (sequence, func) {
      return sequence.then(function (result) {
        return func.call(null, result);
      });
    }, Promise.resolve(init.apply(null, arg)));
  };
};

let a = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("xhr1");
      resolve("xhr1");
    }, 5000);
  });
};

let b = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("xhr2");
      throw "错误";
      reject("错误");
      //   resolve("xhr2");
    }, 3000);
  });
};
let steps = [a, b]; // 从右向左执行
let composeFn = compose(...steps);

composeFn().then((res) => {
  console.log(666);
});

// xhr2
// xhr1
// 666

// compose
// 可复用

//缺点  只能一个参数
// const compose = (f, g) => (val = f(g(val)));
// const compose2 =
//   (...fns) =>
//   (result) => {
//     const fnsList = fns.slice();

//     while (fnsList.length > 0) {
//       result = fnsList.pop()(result);
//     }
//     return result;
//   };
// const log = (num) => console.log(num);
// const subtract = (num1) => num1 - 3;
// const increase = (num1) => num1 + 2;
// const multiplication = (num1) => num1 * 2;
// const division = (num1) => num1 / 4;

// const algorithm = compose2(
//   log,
//   subtract,
//   increase,
//   subtract,
//   increase,
//   multiplication
// );

const compose3 = (...fns) => {
  const [fn1, fn2, ...rest] = fns.reverse();
  const composeApplied = (...originVal) => fn2(fn1(...originVal));
  if (rest.length === 0) return composeApplied;
  return compose3(...rest.reverse(), composeApplied);
};

function compose4(...fns) {
  return function composeApplied(...arg) {
    const lastFn = fns.pop();
    return lastFn ? composeApplied(lastFn.apply(null, arg)) : null;
  };
}
const log = (num) => console.log(num);
const subtract = (num1) => num1 - 3;
const increase = (num1) => num1 + 2;
const multiplication = (num1) => num1 * 2;
const division = (num1) => num1 / 4;
const algorithm = compose3(
  log,
  subtract,
  increase,
  subtract,
  increase,
  multiplication
);
algorithm(1);

// 副作用的解释 函数内部有隐式（Implicit）的数据流，这种情况叫做副作用（Side Effect） 开发人员喜欢显式输入输出而不是隐式输入输出

// 1 我们反复强调：开发人员喜欢显式输入输出而不是隐式输入输出。
// 2如果有隐式的输入输出，那么就有可能产生副作用。
// 3有副作用的代码让我们的代码理解起来更加费劲！
// 4解决副作用的方法有：定义常量、明确 I/O、明确依赖、运用幂等......
// 5在 js 运用幂等是一个新事物，我们需要逐渐熟悉它。
// 6没有副作用的函数就是纯函数，纯函数是我们追求编写的！
// 7将一个不纯的函数重构为纯函数是首选。但是，如果无法重构，尝试封装副作用。（假如一棵树在森林里倒下而没有人在附近听见，它有没有发出声音？—— 有没有其实已经不重要了，反正听不到）
