<!-- 重点 -->

# 布局

- 1 浮动加 marginLeft
  - 使用 float 左浮左边栏
  - 右边模块使用 margin-left 撑出内容块做内容展示
- 2 浮动 自适应
  - 两个浮动,同时加一个元素或者伪类清除浮动防止父元素高度坍塌 float:both;或者 overflow:hidden;

* 3 position+margin 三栏布局

```html
<div class="box">
  <div class="left">左边</div>
  <div class="middle">中间</div>
  <div class="right">右边</div>
</div>
```

```css
.box {
  position: relative;
}
.left {
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 200px;
  background-color: gray;
}
.right {
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  height: 200px;
  background-color: gray;
}
.middle {
  margin-left: 210px;
  margin-right: 210px;
  background-color: lightgray;
  height: 200px;
}
```

- 4 flex gird 布局

# 动画

# 自适应

# 字体

# 颜色

# 边框
