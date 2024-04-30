// 函数式编程指南
// 类库ramda lodash/fp

// 第一章
// 函数是一等公民
// 原则不要改变外面的引用
// 弃用this
//闭包的运用   偏函数和柯里化

// 第二章
// 偏函数表现形式：partial(sum,1,2)(3)
// 柯里化表现形式：sum(1)(2)(3)
// 偏函数  参数个数逐渐减少
// 柯里化函数：接收单一实参（实参个数：1）并返回另一个接收下一个实参的函数。
// ajax(url,data,callback) => getPerson(data,cb) => getCurrentUser(cb)
// 一个函数如果可以接受或返回一个甚至多个函数，它被叫做高阶函数。

// 来源于范畴论
// 定律:  同一律  同态 互换  组合

function ajax(url, data, cb) {
  console.log("ajax", url, data, cb);
}
function getPerson(data, cb) {
  ajax("http://some.api/person", data, cb);
}

function getCurrentUser(cb) {
  getPerson({ user: "sss" }, cb);
}

function partial(fn, ...prevArgs) {
  return function partialApplied(...lastArgs) {
    return fn(...prevArgs, ...lastArgs);
  };
}

// const getPerson=partial(ajax,"http://some.api/person");
// const getCurrentUser=(ajax,"http://some.api/person",{ user: 'sss'})
function sum(...args) {
  return args.reduce((prev, cur) => (prev += cur), 0);
}
function partial(fn, ...presetArgs) {
  return function partiallyApplied(...laterArgs) {
    return fn(...presetArgs, ...laterArgs);
  };
}

function curry(fn, arity = fn.length) {
  return (function nextCurried(prevArgs) {
    return function curried(nextArg) {
      var args = prevArgs.concat([nextArg]);

      if (args.length >= arity) {
        return fn(...args);
      } else {
        return nextCurried(args);
      }
    };
  })([]);
}
console.log(partial(sum, 1, 2)(3));
console.log(curry(sum, 3)(1)(2)(3));

// 第三章  案例

requirejs.config({
  paths: {
    ramda: "https://cdnjs.cloudflare.com/ajax/libs/ramda/0.13.0/ramda.min",
    jquery: "https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min",
  },
});

require(["ramda", "jquery"], function (_, $) {
  ////////////////////////////////////////////
  // Utils

  var Impure = {
    getJSON: _.curry(function (callback, url) {
      $.getJSON(url, callback);
    }),

    setHtml: _.curry(function (sel, html) {
      $(sel).html(html);
    }),
  };

  var img = function (url) {
    return $("<img />", { src: url });
  };

  var trace = _.curry(function (tag, x) {
    console.log(tag, x);
    return x;
  });

  ////////////////////////////////////////////

  var url = function (t) {
    return (
      "https://api.flickr.com/services/feeds/photos_public.gne?tags=" +
      t +
      "&format=json&jsoncallback=?"
    );
  };

  var mediaUrl = _.compose(_.prop("m"), _.prop("media"));

  // var srcs = _.compose(_.map(mediaUrl), _.prop("items"));
  // var images = _.compose(_.map(img), srcs);
  // var images = _.compose(_.map(img), _.compose(_.map(mediaUrl), _.prop("items")));=> _.compose(_.map(_.compose(img,mediaUrl)),  _.prop("items"));
  // compose(map(a),compose(map(b),c))=>compose(compose(map(a,b)),c)
  // map 的组合律 compose(map(f), map(g)) == map(compose(f, g));
  // 可以优化为如下:
  var mediaToImg = _.compose(img, mediaUrl);
  var images = _.compose(_.map(mediaToImg), _.prop("items"));

  var renderImages = _.compose(Impure.setHtml("body"), images);

  var app = _.compose(Impure.getJSON(renderImages), url);

  app("cats");
});

// 类型签名: 在函数上增加说明标识
// :: number->number -> number   类似ts,非常容易知道输入两次number类型的参数返回一个number的结果
//  add(){}
// Pointfree 编程风格
// Pointfree  没有出现需要操作的参数
// const upperLastItem = compose(toUpperCase, head, reverse);

//  非 Pointfree 编写过程中不出现参数,只在调用时传入 优点:无需考虑参数命名,关注点集中,代码精简,可读性强
// const upperLastItem = arr => {
//   const reverseArr = arr.reverse();
//   const head = reverseArr[0];
//   return head.toUpperCase();
// }

// 总结: 代码简洁，开发快速,易于"并发编程,接近自然语言，易于理解
// 缺点:
// 1  性能:JS 这种非函数式语言中，函数式的方式必然会比直接写语句指令慢（引擎会针对很多指令做特别优化）。就拿原生方法 map 来说，它就要比纯循环语句实现迭代慢 8 倍。
// 2  资源占用: 在 JS 中为了实现对象状态的不可变，往往会创建新的对象，因此，它对垃圾回收（Garbage Collection）所产生的压力远远超过其他编程方式
// 3  递归陷阱 在函数式编程中，为了实现迭代，通常会采用递归操作,JS 是不支持尾递归优化的
