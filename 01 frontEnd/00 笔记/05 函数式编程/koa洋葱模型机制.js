function add5(x) {
  return x + 5;
}

function div2(x) {
  return x / 2;
}

function sub3(x) {
  return x - 3;
}

const chain = [add5, div2, sub3].reduce(
  (a, b) =>
    (...args) =>
      a(b(...args))
);
//4

// redux 比koa多了一层可以获取框架内部的store
const reduxMiddleware = (store) => (next) => (action) => {
  // ...
  next(action);
  // ...
};
//   而 koa 的中间件多了 ctx 上下文参数，和支持异步。
app.use(async (ctx, next) => {
  // ...
  await next();
  // ...
});

// koa

// lib/application.js
class Application extends Emitter {
  constructor(options) {
    super();
    // 省略部分代码
    this.middleware = [];
  }

  use(fn) {
    if (typeof fn !== "function")
      throw new TypeError("middleware must be a function!");
    // 省略部分代码
    this.middleware.push(fn);
    return this;
  }

  callback() {
    const fn = compose(this.middleware);
    if (!this.listenerCount("error")) this.on("error", this.onerror);

    const handleRequest = (req, res) => {
      const ctx = this.createContext(req, res);
      return this.handleRequest(ctx, fn);
    };
    return handleRequest;
  }
}
const app = new Application();
// 统计请求处理时长的中间件
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// 调度算法
/**
 * Compose `middleware` returning
 * a fully valid middleware comprised
 * of all those which are passed.
 *
 * @param {Array} middleware
 * @return {Function}
 * @api public
 */
function compose(middleware) {
  // 省略部分代码
  return function (context, next) {
    // last called middleware #
    let index = -1;
    return dispatch(0);
    function dispatch(i) {
      if (i <= index)
        return Promise.reject(new Error("next() called multiple times"));
      index = i;
      let fn = middleware[i];
      if (i === middleware.length) fn = next;
      if (!fn) return Promise.resolve();
      try {
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
      } catch (err) {
        return Promise.reject(err);
      }
    }
  };
}

// 基础都是函数编程的compose
