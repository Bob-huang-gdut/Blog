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