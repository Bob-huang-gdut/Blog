# css基础知识

::: tip 提示
价值不大的知识点不做记录
:tada: :100: :bamboo: :gift_heart: :fire:
https://www.webpagefx.com/tools/emoji-cheat-sheet/

掘金资源
https://juejin.cn/search?query=css%20%E9%9D%A2%E8%AF%95%E9%A2%98&sort=0

字节跳动最爱考的前端面试题：CSS 基础

https://juejin.cn/post/6936913689115099143

CSS面试题整理

https://juejin.cn/post/6844903810125529101

最近大厂面试 CSS 题目总结

https://juejin.cn/post/6969733494754770952

「2021」高频前端面试题汇总之CSS篇

https://juejin.cn/post/6905539198107942919
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

- 标签选择器、伪元素选择器：1
- 类选择器、伪类选择器、属性选择器：10
- id 选择器：100
- 内联样式：1000

注意事项：

- 通用选择器（*）、子选择器（>）和相邻同胞选择器（+）并不在这四个等级中，所以它们的权值都为 0 ；
- 样式表的来源不同时，优先级顺序为：内联样式 > 内部样式 > 外部样式 > 浏览器用户自定义样式 > 浏览器默认样式。


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
- 方式2： 使用 定位 + margin-left 居中
```css
.content {
  width: 100px;
  height: 100px;
  margin-left: -50px;
  left: 50%;
}
```
- 方式3： 使用 定位 + left 居中
```css
.content {
  width: 100px;
  height: 100px;
  transform: translatex(-50%);
  left: 50%;
}
```
- 方式4： 使用 flex
```css
.content {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## 6.position属性，都有啥特点？
- static：无特殊定位，对象遵循正常文档流。top，right，bottom，left等属性不会被应用。
- relative：对象遵循正常文档流，但将依据top，right，bottom，left等属性在正常文档流中偏移位置。而其层叠通过z-index属性定义。
- absolute：对象脱离正常文档流，使用top，right，bottom，left等属性进行绝对定位。而其层叠通过z-index属性定义。
- fixed：对象脱离正常文档流，使用top，right，bottom，left等属性以窗口为参考点进行定位，当出现滚动条时，对象不会随着滚动。而其层叠通过z-index属性定义。
- sticky：具体是类似 relative 和 fixed，在 viewport 视口滚动到阈值之前应用 relative，滚动到阈值之后应用 fixed 布局，由 top 决定。

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

- clear清除浮动（添加空div法）在浮动元素下方添加空div,并给该元素写css样式：{clear:both;height:0;overflow:hidden;}
- 给浮动元素父级设置高度
- 父级同时浮动（需要给父级同级元素添加浮动）
- 父级设置成inline-block，其margin: 0 auto居中方式失效
- 给父级添加overflow:hidden 清除浮动方法
- 万能清除法 after伪类 清浮动（现在主流方法，推荐使用）
```css
.float_div:after{
  content:".";
  clear:both;
  display:block;
  height:0;
  overflow:hidden;
  visibility:hidden;
}
.float_div{
  zoom:1
}
```

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
## 13.::before 和 :after中双冒号和单冒号有什么区别？

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
- BMP，是无损的、既支持索引色也支持直接色的点阵图。这种图片格式几乎没有对数据进行压缩，所以BMP格式的图片通常是较大的文件。
- GIF是无损的、采用索引色的点阵图。采用LZW压缩算法进行编码。文件小，是GIF格式的优点，同时，GIF格式还具有支持动画以及透明的优点。但是GIF格式仅支持8bit的索引色，所以GIF格式适用于对色彩要求不高同时需要文件体积较小的场景。
- JPEG是有损的、采用直接色的点阵图。JPEG的图片的优点是采用了直接色，得益于更丰富的色彩，JPEG非常适合用来存储照片，与GIF相比，JPEG不适合用来存储企业Logo、线框类的图。因为有损压缩会导致图片模糊，而直接色的选用，又会导致图片文件较GIF更大。
- PNG-8是无损的、使用索引色的点阵图。PNG是一种比较新的图片格式，PNG-8是非常好的GIF格式替代者，在可能的情况下，应该尽可能的使用PNG-8而不是GIF，因为在相同的图片效果下，PNG-8具有更小的文件体积。除此之外，PNG-8还支持透明度的调节，而GIF并不支持。除非需要动画的支持，否则没有理由使用GIF而不是PNG-8。
- PNG-24是无损的、使用直接色的点阵图。PNG-24的优点在于它压缩了图片的数据，使得同样效果的图片，PNG-24格式的文件大小要比BMP小得多。当然，PNG24的图片还是要比JPEG、GIF、PNG-8大得多。
- SVG是无损的矢量图。SVG是矢量图意味着SVG图片由直线和曲线以及绘制它们的方法组成。当放大SVG图片时，看到的还是线和曲线，而不会出现像素点。SVG图片在放大时，不会失真，所以它适合用来绘制Logo、Icon等。
- WebP是谷歌开发的一种新图片格式，WebP是同时支持有损和无损压缩的、使用直接色的点阵图。从名字就可以看出来它是为Web而生的，什么叫为Web而生呢？就是说相同质量的图片，WebP具有更小的文件体积。现在网站上充满了大量的图片，如果能够降低每一个图片的文件大小，那么将大大减少浏览器和服务器之间的数据传输量，进而降低访问延迟，提升访问体验。目前只有Chrome浏览器和Opera浏览器支持WebP格式，兼容性不太好。

在无损压缩的情况下，相同质量的WebP图片，文件大小要比PNG小26%；
在有损压缩的情况下，具有相同图片精度的WebP图片，文件大小要比JPEG小25%~34%；
WebP图片格式支持图片透明度，一个无损压缩的WebP图片，如果要支持透明度只需要22%的格外文件大小。

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

## 20.transform、transition、animation和translate区别？
- transform: 它可以对网页元素进行变换的属性，比如旋转，缩放，移动，或者沿着水平或者垂直方向扭曲（斜切变换）等等。这些的基础都是transform属性。
- transition强调过度，它的实现需要触发一个事件（比如鼠标移动上去，焦点，点击等）才执行动画。它类似于flash的补间动画，设置一个开始关键帧，一个结束关键帧。实际上是**一定时间之内，一组css属性变换到另一组属性的动画展示过程**。transition使用4个属性控制：**（transition-property）**:可以使用all关键字，动画过程有多久 **（transition--duration）**,
控制动画速度变化 **（transition-timing-function:linear,ease,ease-in,ease-out,ease-in-out）**，动画是否延迟执行 **（transition-delay）**
- animation：transition只能从一组css属性变成另一组css属性。animation则可以在多组属性之间变换。transition必须使用触发器触发，animation可以使用触发器，也可以在页面加载完成的时候自动触发。
- translate：translate只是transform的一个属性值，即移动，除此之外还有 scale 等
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
</html>
```
:::

## 22.visibility 和 display 的差别（还有opacity)?

visibility 设置 hidden 会隐藏元素，但是其位置还存在与页面文档流中，不会被删除，所以会触发浏览器渲染引擎的重绘。
display 设置了 none 属性会隐藏元素，且其位置也不会被保留下来，所以会触发浏览器渲染引擎的回流和重绘。
opacity 会将元素设置为透明，但是其位置也在页面文档流中，不会被删除，所以会触发浏览器渲染引擎的重绘。

## 23.css hack原理及常用hack有哪些？

原理： 利用不同浏览器对CSS的支持和解析结果不一样编写针对特定浏览器的样式。

常见的hack有： 属性hack、选择器hack、IE条件注释。

## 24.外边距折叠(collapsing margins)

毗邻的两个或多个margin会合并成一个margin，叫做外边距折叠。规则如下：
- 两个或多个毗邻的普通流中的块元素垂直方向上的margin会折叠；
- 浮动元素或inline-block元素或绝对定位元素的margin不会和垂直方向上的其他元素的margin折叠；
- 创建了块级格式化上下文的元素，不会和它的子元素发生margin折叠；
- 元素自身的margin-bottom和margin-top相邻时也会折叠；

## 25.有哪几种隐藏元素的方法？
- visibility: hidden; 这个属性只是简单的隐藏某个元素，但是元素占用的空间任然存在；
- opacity: 0;``CSS3属性，设置0可以使一个元素完全透明；
- position: absolute; 设置一个很大的 left 负值定位，使元素定位在可见区域之外；
- display: none; 元素会变得不可见，并且不会再占用文档的空间；
- transform: scale(0); 将一个元素设置为缩放无限小，元素将不可见，元素原来所在的位置将被保留；
- ```<div hidden="hidden">``` HTML5属性,效果和display:none;相同，但这个属性用于记录一个元素的状态；
- height: 0; 将元素高度设为 0 ，并消除边框；
- filter: blur(0); CSS3属性，括号内的数值越大，图像高斯模糊的程度越大，到达一定程度可使图像消失（此处感谢小伙伴支持）；

## 26.li与li之间有看不见的空白间隔是什么原因引起的？有什么解决办法？

li排列受到中间空白(回车/空格)等的影响，因为空白也属于字符，会被应用样式占据空间，产生间隔。解决办法：

- 在ul中用font-size：0（谷歌不支持）；可以使用letter-space：-3px;
- 设置float：left；

## 27.什么是回流（重排）和重绘以及其区别？

- 回流（重排），reflow:当render tree中的一部分（或全部）因为**元素的规模尺寸，布局，隐藏等改变时**而需要重新构建；
- 重绘（repaint）:当render tree中的一些元素需要更新属性，而这些属性只影响元素的外观，风格，而不会影响布局时，称其为重绘，例如颜色改变等。

::: tip 注意
:fire:每个页面至少需要引发一次重排+重绘，而且重排（回流）一定会引发重绘。
:::

触发重排（回流）的条件：

- 增加或者删除可见的dom元素；
- 元素的位置发生了改变；
- 元素的尺寸发生了改变，例如边距，宽高等几何属性改变；
- 内容改变，例如图片大小，字体大小改变等；
- 页面渲染初始化；
- 浏览器窗口尺寸改变，例如resize事件发生时等；

## 28.border:none;与border:0;有什么区别？

首先是性能差异：

- {border：0;}: 把border设置为0像素，虽然在页面上看不到，但是按border默认值理解，浏览器依然对border-width/border-color进行了渲染，即已经占用内存值；
- {border：none；}被理解为border-style:none。boder:0;比border:none多渲染了一个border-width:0,也就是为什么border:none的性能要比border:0高；

兼容性差异：

- {border:none;}当border为“none”时似乎对IE6/7无效边框依然存在当border为“0”时，感觉比“none”更有效，所有浏览器都一致把边框隐藏。

## 29.视差滚动效果以及如何实现？
视差滚动（Parallax Scrolling）指网页滚动过程中，多层次的元素进行不同程度的移动，视觉上形成立体运动效果的网页展示技术（3D效果）。
实现方式：

- CSS3实现： 优点是开发时间相对较短，性能和开发效率比较好。缺点是不能兼容到低版本的浏览器；
- JQuery实现：（通过控制不同层滚动速度，计算每一层的时间）优点是能兼容到各个版本，效果可控性好，缺点是开发起来对制作者的要求较高；
- 插件实现方式： 例如使用parallax-scrolling,兼容性十分好；

## 30.对BFC规范(块级格式化上下文：block formatting context)的理解
BFC规定了内部的Block Box如何布局。一个页面是由很多个Box组成的，元素的类型和display属性，决定了这个Box的类型。不同类型的box，会参与不同的Formatting Context（决定如何渲染文档的容器），因此Box内的元素会以不用的方式渲染，也是就是说BFC内部的元素和外部的元素不会相互影响。

定位方案：

- 内部的box会在垂直方向上一个接一个的放置；
- box垂直方向的距离由margin决定，属于同一个BFC的两个相邻Box的margin会发生重叠；
- 每个元素margin box的左边，与包含块border box的左边相接触；
- BFC的区域不会与float box重叠；
- BFC是页面上的一个隔离的独立容器，容器里面的元素不会影响到外面的元素；
- 计算BFC的高度时，浮动元素也会参与计算。

满足下列条件之一就可以出发BFC：

- 根元素变化，即html；
- float的值不为none（默认）；
- overflow的值不为visible（默认）；
- display的值为inline-block, tabke-cell，table-caption；
- position的值为absolute或fixed;

## 31.元素竖向的百分比设定是相对于容器的高度吗？
一般来说，子元素的百分比单位都是以父元素为依据。但是margin和padding例外。元素的height是相对于容器的高度，但是元素的margin和padding是相对于容器的宽度。

## 32.元素竖向的百分比设定是相对于容器的高度吗？

## 33.经常遇到的浏览器的兼容性有哪些？原因，解决方法是什么，常用hack的技巧 ？
- png24位的图片在ie浏览器上出现背景。解决： 做成png8；
- 浏览器默认的margin和padding不同。 解决： 添加一个全局的*{ margin： 0; padding： 0;}；
- IE下,可以使用获取常规属性的方法来获取自定义属性,也可以使用getAttribute()获取自定义属性，而Firefox下,只能使用getAttribute()获取自定义属性。 解决： 统一通过getAttribute()获取自定义属性；
-  IE下,event对象有x,y属性,但是没有pageX,pageY属性，而Firefox下,event对象有pageX,pageY属性,但是没有x,y属性。 解决： 使用mX(mX = event.x ? event.x : event.pageX;)来代替IE下的event.x或者Firefox下的event.pageX。

## 34.box-sizing 常用的属性有哪些？分别有什么作用？
- box-sizing: content-box; // 默认的标准(W3C)盒模型元素效果；
- box-sizing: border-box; // 触发怪异(IE)盒模型元素的效果；
- box-sizing: inherit; // 继承父元素 box-sizing 属性的值；

## 35.怎么让Chrome支持小于12px的文字？
```css
.shrink {
  -webkit-transform: scale(0.8);
  -o-transform: scale(1);
  display: inilne-block;
}
```

## 36.css sprites是什么？如何使用？
css精灵图，把一堆小的图片整合到一张大的图片（png）上，利用CSS的“background-image”，“background- repeat”``，“background-position”的组合进行背景定位background-position可以用数字能精确的定位出背景图片的位置，减轻服务器对图片的请求数量。

优点：

- 利用CSS Sprites能很好地减少网页的http请求，从而大大提高了页面的性能，这也是CSS Sprites最大的优点；
- CSS Sprites能减少图片的字节，曾经多次比较过，把3张图片合并成1张图片的字节总是小于这3张图片的字节总和。

缺点：

- 在图片合并时，要把多张图片有序的、合理的合并成一张图片，还要留好足够的空间，防止板块内出现不必要的背景。在宽屏及高分辨率下的自适应页面，如果背景不够宽，很容易出现背景断裂；
- CSSSprites在开发的时候相对来说有点麻烦，需要借助photoshop或其他工具来对每个背景单元测量其准确的位置。
- 维护方面：CSS Sprites在维护的时候比较麻烦，页面背景有少许改动时，就要改这张合并的图片，无需改的地方尽量不要动，这样避免改动更多的CSS，如果在原来的地方放不下，又只能（最好）往下加图片，这样图片的字节就增加了，还要改动CSS。

## 37.rem为什么可以缩放，以什么为基准？其优缺点有哪些？
rem以html的字号为基准，比如2rem，而html的字号时16px，此时rem就是32px。可以写一段js让html根元素的字号随着浏览器宽度的变化而等比例变化，此时造成页面等比例缩放的现象。

优点：
- 相对于em的好处来说，不会发生逐渐增大或者减小字体尺寸的情况，因为始终集成根元素的字体大小；rem单位不仅仅是可应用于字体大小，还可以用- 于设定高度等其它大小，使页面可以适配不同屏幕尺寸。
🍀注意： rem 一般只用于移动端。

## 38.5条常见的Firefox和IE的脚本兼容的问题。
- 绑定监听： IE是attatchEvent()  、 firefox是addEventListener();
- 计算样式：IE是currentStyle、 firefox是getComputedSyle;
- 滚动事件：IE是MouseWheel、 firefox是onmousewheel；
- 表单元素：IE是 document.forms("formname“) ， firefox是document.forms["formname"]；
- 事件对象： IE是window.event属性， firefox必须给事件处理函数注入实参event；

## 39.:link、:visited、:hover、:active的执行顺序是怎么样的？
L-V-H-A，l(link)ov(visited)e h(hover)a(active)te，即用喜欢和讨厌两个词来概括。

## 40.经常遇到的浏览器兼容性有哪些？如何解决？
- 浏览器默认的margin和padding不同；
- IE6双边距bug；
- 在IE6-7中元素高度超出自己设置的高度。原因是IE8以前的浏览器中会给元素设置偶人的行高的高度所导致的；
- min-height在IE6下不起作用；
- 透明性IE用filter：Alpha（Opacity=60）,而其它主流浏览器用opacity： 0.6；
- input边框问题，去掉input边框一般用border：none；就可以但是由于IE6在解析input样式时bug（优先级问题），在IE6下无效；

## 41.CSS哪些属性可以继承？哪些属性不可以继承？
- 可以继承的样式属性： font-size、font-family（字体系列属性）、color（文本系列属性）、visibility（元素可见性）、list-style（列表布局属性）、ul, li, dl, dd, dt、cursor（光标属性）;
- 不可继承的样式属性： width、height、 border、 padding、 margin、 background；

## 42.🤧设置元素浮动后，该元素的 display 值会如何变化？
设置元素浮动后，该元素的display值自动变成block。

## 43.行内元素有哪些?块级元素有哪些? 空(void)元素有那些?
行内元素： a、b、 span、img、 input、 strong、 select、 label、 em、 button、 textarea；
块级元素： div、 ul、 li、 dl、 dt、 dd、 p、 h1-h6、 blockquote；
空元素： 即没有实际内容内容的html元素，如：br、 meta、 hr、 link、 input、 img

## 44.box-sizing属性？
用来控制元素的盒子模型的解析模式，默认为content-box。
- content-box: W3C的标准盒子模型，设置元素的height/width属性指的是content部分的宽/高；
- border-box：IE传统盒子模型。设置元素的height/width属性指的是border + padding + content部分的高/宽；

## 45.写代码：css div 垂直水平居中，并完成 div 高度永远是宽度的一半（宽度可以不指定）

::: demo [vanilla]
```html
<html>
  <style>
    .box45-1 {
      width: 200px;
      height: 200px;
      background-color: green;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .box45-2 {
      position: relative;
      width: 100%;
      height: 0;
      padding-bottom: 50%;
      background: red;
    }
    .box45-3 {
      position: absolute;
      width: 100%;
      height: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  </style>
  <div class="box45-1">
    <div class="box45-2">
      <div class="box45-3"></div>
    </div>
  </div>
</html>
```
:::

## 46.介绍 Flex 布局，flex 是什么属性的缩写?

- flex-grow + flex-shrink + flex-basis
- flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。
- flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。
- flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。

## 47.介绍 Flex 布局，flex-flow 是什么属性的缩写?

- flex-direction + flex-wrap

## 48.space-between 和 space-around 的区别？

- space-between：两端对齐，项目之间的间隔都相等。
- space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

## 49.CSS 怎么画一个大小为父元素宽度一半的正方形？

::: demo [vanilla]
```html
<html>
  <style>
    .box49-1 {
      width: 200px;
      height: 200px;
      background-color: green;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .box49-2 {
      position: relative;
      width: 50%;
      height: 0;
      padding-bottom: 50%;
      background: red;
    }
  </style>
  <div class="box49-1">
    <div class="box49-2"></div>
  </div>
</html>
```
:::

## 50.BFC会与float元素相互覆盖吗？为什么？举例说明

不会，因为 BFC 是页面中一个独立的隔离容器，其内部的元素不会与外部的元素相互影响，比如两个 div，上面的 div 设置了 float，那么如果下面的元素不是 BFC，也没有设置 float，会形成对上面的元素进行包裹内容的情况，如果设置了下面元素为 overflow：hidden；属性那么就能够实现经典的两列布局，左边内容固定宽度，右边因为是 BFC 所以会进行自适应。

## 51.CSS实现自适应正方形、等宽高比矩形
- 双重嵌套，外层 relative，内层 absolute
- padding 撑高
- 如果只是要相对于 body 而言的话，还可以使用 vw 和 vh
- 伪元素设置 margin-top: 100%撑高

## 52.实现两列布局、三列布局的方式

## 53.实现各类垂直居中

## 54.display的block、inline和inline-block的区别
- block： 会独占一行，多个元素会另起一行，可以设置width、height、margin和padding属性；
- inline： 元素不会独占一行，设置width、height属性无效。但可以设置水平方向的margin和padding属性，不能设置垂直方向的padding和margin；
- inline-block： 将对象设置为inline对象，但对象的内容作为block对象呈现，之后的内联对象会被排列在同一行内。

## 55.为什么有时候⽤translate来改变位置⽽不是定位？
translate 是 transform 属性的⼀个值。改变transform或opacity不会触发浏览器回流（reflow）或重绘（repaint），只会触发复合（compositions）。⽽改变绝对定位会触发重新布局，进⽽触发重绘和复合。transform使浏览器为元素创建⼀个 GPU 图层，但改变绝对定位会使⽤到 CPU。 因此translate()更⾼效，可以缩短平滑动画的绘制时间。 ⽽translate改变位置时，元素依然会占据其原始空间，绝对定位就不会发⽣这种情况。

## 56.什么是物理像素，逻辑像素和像素密度，为什么在移动端开发时需要用到@3x, @2x这种图片？
以 iPhone XS 为例，当写 CSS 代码时，针对于单位 px，其宽度为 414px & 896px，也就是说当赋予一个 DIV元素宽度为 414px，这个 DIV 就会填满手机的宽度；

而如果有一把尺子来实际测量这部手机的物理像素，实际为 1242*2688 物理像素；经过计算可知，1242/414=3，也就是说，在单边上，一个逻辑像素=3个物理像素，就说这个屏幕的像素密度为 3，也就是常说的 3 倍屏。

对于图片来说，为了保证其不失真，1 个图片像素至少要对应一个物理像素，假如原始图片是 500300 像素，那么在 3 倍屏上就要放一个 1500900 像素的图片才能保证 1 个物理像素至少对应一个图片像素，才能不失真。

## 57.display:inline-block 什么时候会显示间隙？
- 单行文本溢出
```css
.text1{
  overflow: hidden;            // 溢出隐藏
  text-overflow: ellipsis;      // 溢出用省略号显示
  white-space: nowrap;         // 规定段落中的文本不进行换行
}
```
- 多行文本溢出
```css
.text1{
  overflow: hidden;            // 溢出隐藏
  text-overflow: ellipsis;      // 溢出用省略号显示
  white-space: nowrap;         // 规定段落中的文本不进行换行
}
```

## 58.对CSS 工程化的理解

CSS 工程化是为了解决以下问题：

- 宏观设计：CSS 代码如何组织、如何拆分、模块结构怎样设计？
- 编码优化：怎样写出更好的 CSS？
- 构建：如何处理我的 CSS，才能让它的打包结果最优？
- 可维护性：代码写完了，如何最小化它后续的变更成本？如何确保任何一个同事都能轻松接手？

以下三个方向都是时下比较流行的、普适性非常好的 CSS 工程化实践：

- 预处理器：Less、 Sass 等；
- 重要的工程化插件： PostCss；
- Webpack loader 等 。

基于这三个方向，可以衍生出一些具有典型意义的子问题，这里我们逐个来看：
（1）预处理器：为什么要用预处理器？它的出现是为了解决什么问题？

预处理器，其实就是 CSS 世界的“轮子”。预处理器支持我们写一种类似 CSS、但实际并不是 CSS 的语言，然后把它编译成 CSS 代码：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3d58c5313e884e38b1545a5896613250~tplv-k3u1fbpfcp-zoom-1.image)

那为什么写 CSS 代码写得好好的，偏偏要转去写“类 CSS”呢？这就和本来用 JS 也可以实现所有功能，但最后却写 React 的 jsx 或者 Vue 的模板语法一样——为了爽！要想知道有了预处理器有多爽，首先要知道的是传统 CSS 有多不爽。随着前端业务复杂度的提高，前端工程中对 CSS 提出了以下的诉求：

- 宏观设计上：我们希望能优化 CSS 文件的目录结构，对现有的 CSS 文件实现复用；
- 编码优化上：我们希望能写出结构清晰、简明易懂的 CSS，需要它具有一目了然的嵌套层级关系，而不是无差别的一铺到底写法；我们希望它具有变量特征、计算能力、循环能力等等更强的可编程性，这样我们可以少写一些无用的代码；
- 可维护性上：更强的可编程性意味着更优质的代码结构，实现复用意味着更简单的目录结构和更强的拓展能力，这两点如果能做到，自然会带来更强的可维护性。

这三点是传统 CSS 所做不到的，也正是预处理器所解决掉的问题。预处理器普遍会具备这样的特性：

- 嵌套代码的能力，通过嵌套来反映不同 css 属性之间的层级关系 ；
- 支持定义 css 变量；
- 提供计算函数；
- 允许对代码片段进行 extend 和 mixin；
- 支持循环语句的使用；
- 支持将 CSS 文件模块化，实现复用。

（2）PostCss：PostCss 是如何工作的？我们在什么场景下会使用 PostCss？

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2911f98bbacf4b1cbffbb9e1527a4977~tplv-k3u1fbpfcp-zoom-1.image)

它和预处理器的不同就在于，预处理器处理的是 类CSS，而 PostCss 处理的就是 CSS 本身。Babel 可以将高版本的 JS 代码转换为低版本的 JS 代码。PostCss 做的是类似的事情：它可以编译尚未被浏览器广泛支持的先进的 CSS 语法，还可以自动为一些需要额外兼容的语法增加前缀。更强的是，由于 PostCss 有着强大的插件机制，支持各种各样的扩展，极大地强化了 CSS 的能力。

PostCss 在业务中的使用场景非常多：

- 提高 CSS 代码的可读性：PostCss 其实可以做类似预处理器能做的工作；
- 当我们的 CSS 代码需要适配低版本浏览器时，PostCss 的 Autoprefixer 插件可以帮助我们自动增加浏览器前缀；
- 允许我们编写面向未来的 CSS：PostCss 能够帮助我们编译 CSS next 代码；

（3）Webpack 能处理 CSS 吗？如何实现？
Webpack 能处理 CSS 吗：

Webpack 在裸奔的状态下，是不能处理 CSS 的，Webpack 本身是一个面向 JavaScript 且只能处理 JavaScript 代码的模块化打包工具；
Webpack 在 loader 的辅助下，是可以处理 CSS 的。

如何用 Webpack 实现对 CSS 的处理：

Webpack 中操作 CSS 需要使用的两个关键的 loader：css-loader 和 style-loader
注意，答出“用什么”有时候可能还不够，面试官会怀疑你是不是在背答案，所以你还需要了解每个 loader 都做了什么事情：

css-loader：导入 CSS 模块，对 CSS 代码进行编译处理；
style-loader：创建style标签，把 CSS 内容写入标签。

## 59.如何判断元素是否到达可视区域
待补充
当前进度
https://juejin.cn/post/6905539198107942919#heading-30

