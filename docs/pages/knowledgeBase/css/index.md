# css基础知识

::: tip 提示
价值不大的知识点不做记录
:tada: :100: :bamboo: :gift_heart: :fire:
https://www.webpagefx.com/tools/emoji-cheat-sheet/
:::

## 1.标准的CSS盒子模型及其和低版本的IE盒子模型的区别？
- 标准（W3C）盒子模型：width = 内容宽度（content） + border + padding + margin
- 低版本IE盒子模型： width = 内容宽度（content + border + padding）+ margin
- 对应的css属性box-sizing值分别为: content-box和border-box

## 2.CSS选择符有哪些？哪些属性可以继承？

- id选择器（#content），类选择器（.content）, 标签选择器（div, p, span等）, 相邻选择器（h1+p）, 子选择器（ul>li）, 后代选择器（li a）， 通配符选择器（*）, 属性选择器（a[rel = "external"]）， 伪类选择器（a:hover, li:nth-child）；
- 可继承的样式属性： font-size, font-family, color, ul, li, dl, dd, dt;
- 不可继承的样式属性： border, padding, margin, width, height；

## 3.CSS优先级算法如何计算？

- important > 内联 > id > class > tag

## 4.CSS3新增伪类有那些？
- :root 选择文档的根元素，等同于html元素
- :empty 选择没有子元素的元素
- :target 选取当前活动的目标元素
- :not(selector) 选择除 selector 元素意外的元素
- :enabled 选择可用的表单元素
- :disabled 选择禁用的表单元素
- :checked 选择被选中的表单元素
- :nth-child(n) 匹配父元素下指定子元素，在所有子元素中排序第n
- :nth-last-child(n) 匹配父元素下指定子元素，在所有子元素中排序第n，从后向前数
- :nth-child(odd)
- :nth-child(even)
- :nth-child(3n+1)
- :first-child
- :last-child
- :only-child
- :nth-of-type(n) 匹配父元素下指定子元素，在同类子元素中排序第n
- :nth-last-of-type(n) 匹配父元素下指定子元素，在同类子元素中排序第n，从后向前数
- :nth-of-type(odd)
- :nth-of-type(even)
- :nth-of-type(3n+1)
- :first-of-type
- :last-of-type
- :only-of-type
- ::selection 选择被用户选取的元素部分（伪元素）
- :first-line 选择元素中的第一行（伪元素）
- :first-letter 选择元素中的第一个字符（伪元素）
- :after 在元素在该元素之后添加内容（伪元素）
- :before 在元素在该元素之前添加内容（伪元素）

**注意nth-child和nth-of-type的区别**

## 5.如何水平居中div？如何居中一个浮动元素？如何让绝对定位的div居中？
- 方式1： 使用margin： 0 auto居中
```css
.content {
  margin: 0 auto;
  width: 100px;
  height: 100px;
  background: pink;
}
```
- // 方式3： 使用 定位 + margin-left 居中
```css
.content {
  width: 100px;
  height: 100px;
  margin-left: -50px;
  left: 50%;
}
```
- // 方式3： 使用 定位 + left 居中
```css
.content {
  width: 100px;
  height: 100px;
  transform: translatex(-50%);
  left: 50%;
}
```
- // 方式4： 使用 flex
```css
.content {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## 6.position的值relative和absolute定位原点？
- relative（相对定位）： 生成相对定位的元素，定位原点是元素本身所在的位置；
- absolute（绝对定位）：生成绝对定位的元素，定位原点是离自己这一级元素最近的一级position设置为absolute或者relative的父元素的左上角为原点的。
- fixed （老IE不支持）：生成绝对定位的元素，相对于浏览器窗口进行定位。
- sticky 吸顶，使用sticky时，必须指定top、bottom、left、right4个值之一，不然只会处于相对定位；sticky只在其父元素内其效果，且保证父元素的高度要高于sticky的高度；父元素不能overflow:hidden或者overflow:auto等属性，兼容性一般；

## 7.CSS3有哪些新特性？
- 选择器;
- 圆角（border-raduis）;
- 多列布局（multi-column layout）;
- 阴影（shadow）和反射（reflect）;
- 文字特效（text-shadow）;
- 文字渲染（text-decoration）;
- 线性渐变（gradient）;
- 旋转（rotate）/缩放（scale）/倾斜（skew）/移动（translate）;
- 媒体查询（@media）;
- RGBA和透明度 ;
- @font-face属性;
- 多背景图 ;
- 盒子大小;
- 语音;

## 8.用纯CSS创建一个三角形的原理是什么？
- 隐藏上，左，右三条边，颜色设定为（transparent）
```css
.content {
  width； 0px;
  height: 0px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent pink transparent; // 对应上右下左，此处为 下 粉色
}
```

## 9.🤨什么是响应式设计？响应式设计的基本原理是什么？如何兼容低版本的IE？
- 响应式网站设计（Responsive Web design）是一个网站能够兼容多个终端，而不是为每一个终端做一个特定的版本。
- 关于原理： 基本原理是通过媒体查询（@media）查询检测不同的设备屏幕尺寸做处理。
- 关于兼容： 页面头部必须有mate声明的viewport。

## 10.浮动原理以及为什么会出现浮动和什么时候需要清除浮动？清除浮动的方式？

非IE浏览器下，容器不设定高度且子元素浮动时，容器高度不能被内容撑开。此时，内容会溢出到容器外面而影响布局。此类现象被称为浮动（溢出）。

原理：

- 浮动元素脱离文档流，不占据空间（引起“高度塌陷”现象）；
- 浮动元素碰到包含它的边框或其他浮动元素的边框停留。

浮动会带来的问题：
- 父级元素的高度将会无法被撑开，会影响与父级元素同级的元素
- 若浮动的元素不是第一个元素，则该元素之前的元素也要浮动，否则会影响页面的显示结构

清除方式：

- 父级盒子定义高度（height）;
- 父元素::after的伪元素 clear: both；
- 最后一个浮动元素后面加一个div空标签，并且添加样式clear: both;
- 包含浮动元素的父级标签添加样式overflow为hidden/both;
- 父级div定义zoom;

## 11.CSS优化、提高性能的方法有哪些？

- 多个css可合并，并尽量减少http请求
- 属性值为0时，不加单位
- 将css文件放在页面最上面
- 避免后代选择符，过度约束和链式选择符
- 使用紧凑的语法
- 避免不必要的重复
- 使用语义化命名，便于维护
- 尽量少的使用!impotrant，可以选择其他选择器
- 精简规则，尽可能合并不同类的重复规则
- 遵守盒子模型规则

## 12.CSS预处理器/后处理器是什么？为什么要使用它们？

预处理器，如：less，sass，stylus,用来预编译sass或者less，增加了css代码的复用性，还有层级，mixin， 变量，循环， 函数等，对编写以及开发UI组件都极为方便。css预处理器为css增加一些编程特性，无需考虑浏览器的兼容问题，我们可以在CSS中使用变量，简单的逻辑程序，函数等在编程语言中的一些基本的性能，可以让我们的css更加的简洁，增加适应性以及可读性，可维护性等。

后处理器， 如： postcss,通常被视为在完成的样式表中根据css规范处理css，让其更加有效。目前最常做的是给css属性添加浏览器私有前缀，实现跨浏览器兼容性的问题。

其它css预处理器语言：Sass（Scss）, Less, Stylus, Turbine, Swithch css, CSS Cacheer, DT Css。
## 13.::before 和 :after中双冒号和单冒号有什么区别？解释一下这2个伪元素的作用

- 冒号(:)用于CSS3伪类，双冒号(::)用于CSS3伪元素。
- ::before就是以一个子元素的存在，定义在元素主体内容之前的一个伪元素。并不存在于dom之中，只存在在页面之中。
🍀注意： :before 和 :after 这两个伪元素，是在CSS2.1里新出现的。起初，伪元素的前缀使用的是单冒号语法，但随着Web的进化，在CSS3的规范里，伪元素的语法被修改成使用双冒号，成为::before ::after。
- 伪类和伪元素的根本区别在于：它们是否创造了新的元素

## 14.让页面里的字体变清晰，变细用CSS怎么做？

-webkit-font-smoothing 在 window 系统下没有起作用，但是在 IOS 设备上起作用 -webkit-font-smoothing：antialiased 是最佳的，灰度平滑。

## 15.如果需要手动写动画，你认为最小时间间隔是多久，为什么？

多数显示器默认频率是60Hz，即1秒刷新60次，所以理论上最小间隔为1/60＊1000ms ＝ 16.7ms。

## 16. rgba() 和 opacity 的透明效果有什么不同？

- opacity 作用于元素以及元素内的所有内容（包括文字）的透明度；
- rgba() 只作用于元素自身的颜色或其背景色，子元素不会继承透明效果；

## 17.png、jpg、 jpeg、 bmp、gif 这些图片格式解释一下，分别什么时候用。有没有了解过webp？
- png-便携式网络图片（Portable Network Graphics）,是一种无损数据压缩位图文件格式。优点是：压缩比高，色彩好。 大多数地方都可以用。
- jpg是一种针对相片使用的一种失真压缩方法，是一种破坏性的压缩，在色调及颜色平滑变化做的不错。在www上，被用来储存和传输照片的格式。
- gif是一种位图文件格式，以8位色重现真色彩的图像。可以实现动画效果。
- bmp的优点： 高质量图片；缺点： 体积太大； 适用场景： windows桌面壁纸；
- webp格式是谷歌在2010年推出的图片格式，压缩率只有jpg的2/3，大小比png小了45%。缺点是压缩的时间更久了，兼容性不好，目前谷歌和opera支持。

## 18.在CSS样式中常使用 px、em 在表现上有什么区别？
- px相对于显示器屏幕分辨率，无法用浏览器字体放大功能。
- em值不是固定的，会继承父级的字体大小： em = 像素值 / 父级font-size。
- rem相对于根元素的字体大小

## 19.一个高度自适应的div，里面有两个div，一个高度100px，希望另一个填满剩下的高度问题怎么解决？
- 方案一：
```css
.content { 
  height: calc(100%-100px);
}
```
- 方案二：
```css
.container { 
  display:flex;
  flex-direction:column;
}
.content { 
  flex:1;
}
``` 

## 20.transform、transition、animation和animation-duration的区别？
- transform: 它可以对网页元素进行变换的属性，比如旋转，缩放，移动，或者沿着水平或者垂直方向扭曲（斜切变换）等等。这些的基础都是transform属性。
- transition可以实现动态效果，实际上是**一定时间之内，一组css属性变换到另一组属性的动画展示过程**。transition使用4个属性控制：**（transition-property）**:可以使用all关键字，动画过程有多久 **（transition--duration）**,
控制动画速度变化 **（transition-timing-function:linear,ease,ease-in,ease-out,ease-in-out）**，动画是否延迟执行 **（transition-delay）**
- animation：transition只能从一组css属性变成另一组css属性。animation则可以在多组属性之间变换。transition必须使用触发器触发，animation可以使用触发器，也可以在页面加载完成的时候自动触发。
```css
/* 1.定义动画：主要指定义关键帧 */
@keyframes fadeIn{
  from{
    opacity:0;
  },
  to{
    opacity:1;   
 }
}
/* 2.使用一下css属性定义动画： */
.nav-button{
  animation-name: fadeIn; // 和当初定义的动画名称相对应
  animation-duration: 1s; // 动画执行一次持续的时长
  animation-timing-function: ease-out, // 动画速率变化函数；
  animation-delay: .5s; // 动画延迟执行的时间长度；
  animation-iteration-count: infinite;  // 动画执行的次数，可以是数字，或者关键字：infinate(无限运行)；
  animation-direction: alternate // alternate(奇数次超前运行，偶数次后退运行).如希望动画从黄色到蓝色，并且再重复一次，使用alternate关键字就能够防止从蓝色突变为黄色
  // 告诉浏览器将元素的格式保持为动画结束时候的样子。
}
```

## 21.🤥什么是外边距重叠？ 重叠的结果是什么？

首先，外边距重叠就是 margin-collapse。相邻的两个盒子（可能是兄弟关系也可能是祖先关系）的外边距可以结合成一个单独的外边距。 这种合并外边距的方式被称为折叠，结合而成的外边距称为折叠外边距。

折叠结果遵循下列计算原则：

- 两个相邻的外面边距是正数时，折叠结果就是他们之中的较大值；
- 两个相邻的外边距都是负数时，折叠结果是两者绝对值的较大值；
- 两个外边距一正一负时，折叠结果是两者的相加的和；

::: demo [vanilla]
```html
<html>
  <style>
    .box {
      width: 100px;
      height: 100px;
      background-color: green;
    }
    .red {
      background-color: red;
    }
    .yellow {
      background-color: yellow;
    }
  </style>
  <div>
    <h3>两个相邻的外面边距是正数时，折叠结果就是他们之中的较大值；</h3>
    <div class="box red" style="margin-bottom: 100px;"></div>
    <div class="box yellow" style="margin-top: 80px;"></div>
  </div>
  <div>
    <h3>两个相邻的外面边距是正数时，折叠结果就是他们之中的较大值；</h3>
    <div class="box red" style="margin-bottom: -100px;"></div>
    <div class="box yellow" style="margin-top: -80px;"></div>
  </div>
  <div>
    <h3>两个外边距一正一负时，折叠结果是两者的相加的和；</h3>
    <div class="box red" style="margin-bottom: -100px;"></div>
    <div class="box yellow" style="margin-top: 80px;"></div>
  </div>
  <label for="Name">Number:</label> 
  <input type=“text“ name="Name" id="Name"/>
</html>
<script>
  console.log('%c⧭', 'color: #ff0000', 1);
</script>
```
:::

### 22.display: none; 与 visibility: hidden; 有什么区别？

联系： 这两个属性的值都可以让元素变得不可见；
区别：

- 从占据空间角度看：display: none;会让元素完全从渲染树中消失，渲染的时候不占据任何空间；visibility:  hidden;不会让元素从渲染树消失，渲染师元素继续占据空间，只是内容不可见；
- 从继承方面角度看：display: none;是非继承属性，子孙节点消失由于元素从渲染树消失造成，通过修改子孙节点属性无法显示；visibility:hidden;是继承属性，子孙节点消失由于继承了hidden，通过设置visibility: visible;可以让子孙节点显式；
- 从重绘和重排角度看：修改常规流中元素的display通常会造成文档重排。修改visibility属性只会造成本元素的重绘

读屏器不会读取display: none;元素内容；会读取visibility: hidden元素内容；