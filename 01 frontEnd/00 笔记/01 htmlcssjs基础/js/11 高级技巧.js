// 判断属性
// typeof
// instanceOf
// Object.prototype.toString.call(obj)

// 如何实现异步编程？
// 方法1，通过回调函数。优点是简单、容易理解和部署；缺点是不利于代码的阅读和维护，各个部分之间高度耦合（ Coupling），流程混乱，而且每个任务只能指定一个回调函数。
// 方法2，通过事件监听，可以绑定多个事件，每个事件可以指定多个回调函数，而且可以“去耦合”（ Decoupling），有利于实现模块化；缺点是整个程序都要变成事件驱动型，运行流程会变得很不清晰。
// 方法3，采用发布/订阅方式。性质与“事件监听”类似，但是明显优于后者。
// 方法4，通过 Promise对象实现， Promise对象是 Commonjs工作组提出的一种规范，旨在为异步编程提供统一接口。它的思想是，每一个异步任务返回一个 Promise对象，该对象有一个then方法，允许指定回调函数

// webWorker

fibonacci.js;
self.onmessage = (e) => {
  const userNum = Number(e.data);
  fibonacci(userNum);
};

function fibonacci(num) {
  let a = 1;
  let b = 0;
  while (num >= 0) {
    [a, b] = [a + b, a];
    num--;
  }

  self.postMessage(b);
}

// 使用的地方
const worker = new Worker("fibonacci.js");

worker.onmessage = (event) => {
  result.textContent = event.data;
  console.log(`Got: ${event.data}`);
};

worker.onerror = (error) => {
  console.log(`Worker error: ${error.message}`);
  throw error;
};

form.onsubmit = (e) => {
  e.preventDefault();
  worker.postMessage(input.value);
  input.value = "";
};

// wersoket
// Create WebSocket connection.
const socket = new WebSocket("ws://localhost:8080");

// Connection opened
socket.addEventListener("open", function (event) {
  socket.send("Hello Server!");
});

// Listen for messages
socket.addEventListener("message", function (event) {
  console.log("Message from server ", event.data);
});
