// 同步
function compose(...funcs) {
  if (funcs.length === 0) {
    return (args) => args;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce(
    (a, b) =>
      (...args) =>
        b(a(...args))
  );
}
// 千分符号
function thousandSplit(num) {
  return String(num).replace(/(?=\B(?:\d{3})+\b)(\d{3}(\.\d+$)?)/g, ",$1");
}
// 保留两位数字向下取整
function floor(num) {
  return (Math.floor(num * 100) / 100).toFixed(2);
}

var conts = 125885.365;
console.log("正常我们的做法", thousandSplit(floor(conts)));
console.log("compose", compose(floor, thousandSplit)(conts));

// 异步
(async () => {
  function compose(...funcs) {
    if (funcs.length === 0) {
      return (args) => args;
    }
    if (funcs.length === 1) {
      return funcs[0];
    }
    return funcs.reduce(
      (a, b) =>
        async (...args) =>
          b(await a(...args))
    );
  }
  function fn1(arg) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        arg += "_Promise_fn1";
        console.log("fn1");
        resolve(arg);
      }, 1000);
    });
  }
  function fn2(arg) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        arg += "_Promise_fn2";
        console.log("fn2");
        resolve(arg);
      }, 1000);
    });
  }
  function fn3(arg) {
    arg += "_fn3";
    return arg;
  }
  const result = compose(fn1, fn3, fn2);
  result(1).then((res) => {
    console.log("异步返回", res);
  });
})();
