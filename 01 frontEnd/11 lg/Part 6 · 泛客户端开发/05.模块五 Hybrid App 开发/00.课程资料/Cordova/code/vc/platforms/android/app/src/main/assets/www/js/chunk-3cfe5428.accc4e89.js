(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3cfe5428"],{"69eb":function(t,n,e){"use strict";e.r(n);var o=e("7a23"),a=Object(o["P"])("data-v-c0758546");Object(o["C"])("data-v-c0758546");var c={class:"scan-container"},r=Object(o["h"])('<div class="scan-none-1" data-v-c0758546></div><div class="scan-box-container" data-v-c0758546><div class="scan-none-2" data-v-c0758546></div><div class="scan-box" data-v-c0758546><div class="scan-box-area" data-v-c0758546><div class="top-half top-left" data-v-c0758546></div><div class="top-half top-right" data-v-c0758546></div><div class="bottom-half bottom-left" data-v-c0758546></div><div class="bottom-half bottom-right" data-v-c0758546></div></div></div><div class="scan-none-2" data-v-c0758546></div></div>',2),i={class:"scan-none-1"},l=Object(o["i"])("放入框内，自动扫描"),d={id:"scanMenu"};Object(o["A"])();var s=a((function(t,n,e,s,u,f){var b=Object(o["G"])("van-nav-bar"),v=Object(o["G"])("van-tag"),g=Object(o["G"])("van-button");return Object(o["z"])(),Object(o["g"])("div",null,[Object(o["j"])(b,{title:"扫一扫","left-text":"返回","right-text":"按钮","left-arrow":""}),Object(o["j"])("div",c,[r,Object(o["j"])("div",i,[Object(o["j"])(v,{type:"primary",plain:"",size:"large"},{default:a((function(){return[l]})),_:1}),Object(o["j"])("div",d,[Object(o["j"])(g,{round:"",color:"#00ddaa",onClick:n[1]||(n[1]=function(t){return s.toggleLight()})},{default:a((function(){return[Object(o["i"])(Object(o["J"])(t.lightOn?"关闭":"打开"),1)]})),_:1}),Object(o["j"])(g,{round:"",color:"#00ddaa",onClick:n[2]||(n[2]=function(t){return s.toggleCamera()})},{default:a((function(){return[Object(o["i"])(Object(o["J"])(t.frontCamera?"后摄":"前摄"),1)]})),_:1})])])])])})),u=e("5530");e("a4d3"),e("e01a"),e("d3b7"),e("d28b"),e("3ca3"),e("ddb0");function f(t){return f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}var b=e("6c02"),v={name:"Scan",setup:function(){var t=Object(o["D"])({lightOn:!1,frontCamera:!1}),n=(Object(b["c"])(),function(){alert("切换闪光灯"),!1===t.lightOn?QRScanner.enableLight((function(n,e){n&&console.log(n),t.lightOn=!0})):QRScanner.disableLight((function(n,e){n&&console.log(n),t.lightOn=!1}))}),e=function(){alert("切换摄像头"),!1===t.frontCamera?QRScanner.useFrontCamera((function(n,e){n&&console.log(n),t.frontCamera=!0})):QRScanner.useBackCamera((function(n,e){n&&console.log(n),t.frontCamera=!1}))},a=function(){function t(t,n){if(t&&console.log(t._message),n.authorized){function e(t,n){t?console.error(t):alert(n)}QRScanner.scan(e),QRScanner.show()}else n.denied?alert("用户拒绝扫码"):alert("未获取数据")}"object"===("undefined"===typeof QRScanner?"undefined":f(QRScanner))?QRScanner.prepare(t):alert("QRScanner 不存在")};return Object(o["w"])((function(){a()})),Object(o["x"])((function(){document.getElementById("app").style.backgroundColor="#FFFFFF",document.querySelector("body").style.backgroundColor="#FFFFFF";try{QRScanner.hide((function(t){console.log("关闭扫描"+JSON.stringify(t))})),QRScanner.destroy((function(t){console.log("销毁扫描"+JSON.stringify(t))}))}catch(t){console.log(t)}})),Object(u["a"])(Object(u["a"])({},Object(o["K"])(t)),{},{toggleLight:n,toggleCamera:e})}};e("afe8");v.render=s,v.__scopeId="data-v-c0758546";n["default"]=v},9753:function(t,n,e){},afe8:function(t,n,e){"use strict";e("9753")},d28b:function(t,n,e){var o=e("746f");o("iterator")},e01a:function(t,n,e){"use strict";var o=e("23e7"),a=e("83ab"),c=e("da84"),r=e("5135"),i=e("861d"),l=e("9bf2").f,d=e("e893"),s=c.Symbol;if(a&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var u={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),n=this instanceof f?new s(t):void 0===t?s():s(t);return""===t&&(u[n]=!0),n};d(f,s);var b=f.prototype=s.prototype;b.constructor=f;var v=b.toString,g="Symbol(test)"==String(s("test")),p=/^Symbol\((.*)\)[^)]+$/;l(b,"description",{configurable:!0,get:function(){var t=i(this)?this.valueOf():this,n=v.call(t);if(r(u,t))return"";var e=g?n.slice(7,-1):n.replace(p,"$1");return""===e?void 0:e}}),o({global:!0,forced:!0},{Symbol:f})}}}]);
//# sourceMappingURL=chunk-3cfe5428.accc4e89.js.map