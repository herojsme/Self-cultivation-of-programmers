function sum(...args) {
  return args.reduce((prev, cur) => (prev += cur), 0);
}

// 实现1
// function curry(fn, arity = fn.length) {
//   return (function nextCurried(prevArgs) {
//     return function curried(nextArg) {
//       var args = prevArgs.concat([nextArg]);

//       if (args.length >= arity) {
//         return fn(...args);
//       } else {
//         return nextCurried(args);
//       }
//     };
//   })([]);
// }
// console.log(curry(sum, 3)(1)(2)(3));   //需要指定参数长度

// ramda的实现  增加获取参数长度的辅助函数
// 跟1有何区别在于  可以知道函数的参数长度
// 实现2
// n为还需接收的参数
var _arity = function (n, fn) {
  /* eslint-disable no-unused-vars */
  switch (n) {
    case 0:
      return function () {
        return fn.apply(this, arguments);
      };
    case 1:
      return function (a0) {
        return fn.apply(this, arguments);
      };
    case 2:
      return function (a0, a1) {
        return fn.apply(this, arguments);
      };
    case 3:
      return function (a0, a1, a2) {
        return fn.apply(this, arguments);
      };
    case 4:
      return function (a0, a1, a2, a3) {
        return fn.apply(this, arguments);
      };
    case 5:
      return function (a0, a1, a2, a3, a4) {
        return fn.apply(this, arguments);
      };
    case 6:
      return function (a0, a1, a2, a3, a4, a5) {
        return fn.apply(this, arguments);
      };
    case 7:
      return function (a0, a1, a2, a3, a4, a5, a6) {
        return fn.apply(this, arguments);
      };
    case 8:
      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.apply(this, arguments);
      };
    case 9:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.apply(this, arguments);
      };
    case 10:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.apply(this, arguments);
      };
    default:
      throw new Error(
        "First argument to _arity must be a non-negative integer no greater than ten"
      );
  }
};
// curry使用_curry1柯里化，接收参数fn, 默认调用curryN,
// curry = (fn) => curryN(fn.length, fn)
var curry = _curry1(function (fn) {
  return curryN(fn.length, fn);
});
// 如果是一个参数，使用_curry1, ramda里面的内部函数，接收的参数大多为1-3个
function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
}
// 如果参数是2个
function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      // 返回本身
      case 0:
        return f2;
      // 返回_curry1的结果,
      case 1:
        return _curry1(function (_b) {
          return fn(a, _b);
        });
      // 直接调用
      case 2:
        return fn(a, b);
    }
  };
}
// curryN本身也是一个柯里化的函数
var curryN = _curry2(function (length, fn) {
  if (length === 1) {
    return _curry1(fn);
  }
  // 使用_artity包裹函数_curryN, _curryN包括3个参数，具体看下面的实现
  return _arity(length, _curryN(length, [], fn));
});
// 内部_curryN的实现， 在上面第一种方式，的基础上添加包裹函数
var _curryN = function (length, recived, fn) {
  return function () {
    // 获取函数调用的参数
    var args = [].slice.call(arguments);
    // 已传的参数
    var combined = recived.concat(args);

    if (combined.length < length) {
      return _arity(length - combined.length, _curryN(length, combined, fn));
    } else {
      return fn.apply(this, combined);
    }
  };
};
debugger;
const _cSum = curry(sum)(1, 2, 3);
console.log(_cSum);
