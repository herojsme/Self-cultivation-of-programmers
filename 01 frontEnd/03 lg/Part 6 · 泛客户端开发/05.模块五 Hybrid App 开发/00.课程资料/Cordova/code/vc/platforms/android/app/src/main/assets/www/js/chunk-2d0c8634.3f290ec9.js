(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c8634"],{5553:function(t,e,n){"use strict";n.r(e);var o=n("7a23"),a=Object(o["P"])("data-v-73ce3bbe");Object(o["C"])("data-v-73ce3bbe");var r=Object(o["i"])("跳转到百度");Object(o["A"])();var c=a((function(t,e,n,c,l,i){var u=Object(o["G"])("van-nav-bar"),d=Object(o["G"])("van-search"),s=Object(o["G"])("van-dropdown-item"),b=Object(o["G"])("van-dropdown-menu"),p=Object(o["G"])("van-button");return Object(o["z"])(),Object(o["g"])("div",null,[Object(o["j"])(u,{title:"应用内跳转","left-text":"返回","right-text":"按钮","left-arrow":"",onClickLeft:c.goHome,onClickRight:e[1]||(e[1]=function(){})},null,8,["onClickLeft"]),Object(o["j"])(d,{modelValue:t.url,"onUpdate:modelValue":e[3]||(e[3]=function(e){return t.url=e}),placeholder:"请输入跳转地址",label:"地址","show-action":"",onSearch:c.onSearch},{action:a((function(){return[Object(o["j"])("div",{onClick:e[2]||(e[2]=function(){return c.onSearch&&c.onSearch.apply(c,arguments)})}," 跳转 ")]})),_:1},8,["modelValue","onSearch"]),Object(o["j"])(b,null,{default:a((function(){return[Object(o["j"])(s,{modelValue:t.target,"onUpdate:modelValue":e[4]||(e[4]=function(e){return t.target=e}),options:c.targetList},null,8,["modelValue","options"]),Object(o["j"])(s,{modelValue:t.options,"onUpdate:modelValue":e[5]||(e[5]=function(e){return t.options=e}),options:c.optionsList},null,8,["modelValue","options"])]})),_:1}),Object(o["j"])(p,{type:"primary",onClick:c.goBaidu},{default:a((function(){return[r]})),_:1},8,["onClick"])])})),l=n("5530"),i=n("6c02"),u={name:"Inappbrowser",setup:function(){var t=Object(o["D"])({url:"https://m.lagou.com",target:"_blank",options:"location=yes"}),e=Object(i["c"])(),n=function(){e.push("/")},a=[{text:"当前页打开",value:"_self"},{text:"新页面打开",value:"_blank"},{text:"系统浏览器打开",value:"_system"}],r=[{text:"显示地址栏",value:"location=yes"},{text:"隐藏地址栏",value:"location=no"}],c=function(){location.href="https://m.baidu.com"},u=function(){var e=cordova.InAppBrowser.open(t.url,t.target,t.options);function n(t){alert("Loading started: "+t.url)}function o(t){alert("Loading finished: "+t.url)}function a(t){alert("Loading error: "+t.message)}function r(){alert("浏览器已关闭")}e.addEventListener("loadstart",n),e.addEventListener("loadstop",o),e.addEventListener("loaderror",a),e.addEventListener("exit",r)};return Object(o["w"])((function(){})),Object(l["a"])(Object(l["a"])({},Object(o["K"])(t)),{},{onSearch:u,goBaidu:c,targetList:a,optionsList:r,goHome:n})}};u.render=c,u.__scopeId="data-v-73ce3bbe";e["default"]=u}}]);
//# sourceMappingURL=chunk-2d0c8634.3f290ec9.js.map