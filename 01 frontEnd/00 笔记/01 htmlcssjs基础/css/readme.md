# 盒子模型

```css
盒子模型：Margin(外边距) ，Padding(内边距)，Border(边框) ，Content(内容)
box-sizing: content-box|border-box(CSS 替代盒模型)|inherit; 控制元素的盒模型的解析模式。
```

# 选择器

```css
id class 属性选择器
伪类：
  :nth-child(xx) 在父元素的子元素列表中的索引来选择元素
      odd奇数 even偶数
        :nth-child(odd)
        :nth-child(even)
      <An+B>
        :nth-child(-n + 3)    (-n+3)前三个元素
        p:nth-child(n+8):nth-child(-n+15) 第 8 到第 15 个
      of <selector>
        li:nth-child(even of .noted)
  :first-child 一组兄弟元素中的第一个元素。
  :last-child  一组兄弟元素中的最后元素
  :enabled :disabled 控制表单控件的禁用状态。
  :checked 单选框或复选框被选中
  :hover
  :focus
  :is() 该列表中任意一个选择器可以选择的元素
  :not() 匹配不符合一组选择器的元素
伪元素：
  ::after
  ::before
  ::first-letter
  ::first-line
邻接兄弟:p + img <p>元素之后的<img>元素
通用兄弟:p ~ img <p>元素的兄弟<img>元素，包括不相邻的
```

# 优先权

```css
样式权重：！important>style（内联）>ld选择器（权重100）> class类选择器（权重10）>元素选择器、标签属性选择器、伪类选择器（权重1）

@layout 级联层，层叠机制
```

# 背景边框

```css
border
border-radius
background background-repeat background-size  background-position background-image
background-attachment 背景附加,内容要滚动时,背景是否跟随滚动
渐变 linear-gradient radial-gradient
```

# 列表

```css
list-style-type
```

# 文本处理

```css
  文本方向：
    writing-mode：horizontal-tb(横向，快流从上到下)|vertical-rl(纵向，快流从右向左)|vertical-lr(纵向，快流从左到右)
    inline-size

  省略号：
    overflow:hidden；width:xxx；white-space:nowrap；text-overflow:ellipsis

  color font-size font-family
  text-transform:uppercase: 转为大写;lowercase: 转为小写;capitalize: 其首字母大写;none
  text-decoration:underline: 文本下划线;overline: 文本上划线;line-through: 穿过文本的线;none
  text-shadow: 左右偏移 上下偏移  阴影半径  颜色；
  text-align：left；right；center；justify使文本展开，改变单词之间的差距，使所有文本行的宽度相同
  line-height： 推荐的行高大约是 1.5–2 (双倍间距。)
  letter-spacing (字母间距)、word-spacing (单词间距)

  超链接有对应的伪类：:link、:visited、:hover、:focus、:active
```

# 动画

# 自适应

# 布局

```css
  display:标准流(block, inline 或者 inline-block);弹性布局(flex);网格(grid);
    flex:
      父元素:
          flex-direction：定义是行还是列；row,column;
          flex-wrap: wrap;
          flex-flow(flex-direction与flex-wrap的缩写):row wrap;
          justify-content:主轴
            center,flex-start,flex-end,space-around,space-between（space-between，它和 space-around 非常相似，只是它不会在两端留下任何空间）
          align-items:交叉轴 stretch(填充),center,flex-start,flex-end
      子元素：
          order: 排序；
          flex: flex-grow(弹性单位)，flex-shrink(溢出量),flex-basis(最小值)
    grid：
      column、row、gutter沟槽
      grid-template-columns(列宽)：repeat(3, 1fr); 3 个 1fr(灵活单位) 的列
      grid-gap(沟槽): 20px;
      grid-auto-rows: minmax(100px, auto);为网格内的内容设置了取值范围
      grid-column：开始/结束；
      grid-row：第几行

  float:right,left,none;浮动;
    清除浮动  clear: left，right，both；
  positon:static,reletive,fixed，sticky(滚动的时候固定定位);定位
  表格布局
  多列布局
    column-count: 3;
    column-gap: 20px;
    column-rule: 4px dotted rgb(79, 185, 227);
  媒体查询，就是响应式布局:@media 设备名(print,screen,all) only （选取条件） not （选取条件） and（设备选取条件）
    @media screen and （max-width： 650px） {
      #header {height： auto;}
    }
    viewport
```

```html
<!-- - 1 浮动加 marginLeft
  - 使用 float 左浮左边栏
  - 右边模块使用 margin-left 撑出内容块做内容展示
- 2 浮动 自适应
  - 两个浮动,同时加一个元素或者伪类清除浮动防止父元素高度坍塌 float:both;或者 overflow:hidden;
* 3 position+margin 三栏布局 -->
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

# 其他

```css

CSS Sprite：利用CSS的“ background- image"“ background- repeat”“ background-position”的组合进行背景定位。 精灵图

访问超链接后 hover样式就不出现的原因是什么？
  超链接样式覆盖了原有的 hover和 active伪类选择器样式，解决方法是排列顺序改为L→V→H→A（link, visited, hover, active）
让文字在垂直和水平方向上重叠的两个属性是什么？
  垂直方向的属性是 line-height.水平方向的属性是 letter-spacing
自适应的单位都有哪些？
  % ww相对于视口宽度的单位 vh相对于视口高度 Vm相对于视口宽度或者高度（取决于哪个小）  em相对于父元素字体大小  rem相对于根元素字体大小
如何禁止复制或选中文本？
  user-select:none；
```

# sass

```css

父选择器 &
变量 $: $width: 5em;
延伸 继承：@extend
  .error {
    border: 1px #f00;
  }
  .seriousError {
    @extend .error;
    border-width: 3px;
  }
@if
  $type: monster;
  p {
    @if $type == ocean {
      color: blue;
    } @else if $type == monster {
      color: green;
    } @else {
      color: black;
    }
  }
@for
  @for $i from 1 through 3 {
    .item-#{$i} { width: 2em * $i; }
  }
  .item-1 {width: 2em;}.item-2 {width: 4em;}.item-3 {width: 6em;}
@each
  @each $animal in puma, sea-slug,  {
    .#{$animal}-icon {
      background-image: url('/images/#{$animal}.png');
    }
  }
  .puma-icon {background-image: url('/images/puma.png');}.sea-slug-icon {background-image: url('/images/sea-slug.png');}
@while
  $i: 6;
  $i > 0 {
    .item-#{$i} { width: 2em * $i; }
    $i: $i - 2;
  }
  .item-6 {width: 12em;}.item-4 {width: 8em;}.item-2 {width: 4em;}
@mixin
  @mixin 后添加名称与样式
  @mixin large-text {
    font: {
        family: Arial;
        size: 20px;
        weight: bold;
      }
      color: #ff0000;
    }
    .page-title {
      @include large-text;
      padding: 4px;
      margin-top: 10px;
    }
  @mixin也可以用函数的方式，把外部变量传进来
```

# less

```css

变量 @: @width: 5em;
each(range(4), {
  .col-@{value} {
    height: (@value * 50px);
  }
});
```
