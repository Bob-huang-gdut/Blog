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

### 4.CSS3新增伪类有那些？
