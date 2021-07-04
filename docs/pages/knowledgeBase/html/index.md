# html基础知识

::: tip 提示
价值不大的知识点不做记录
:tada: :100: :bamboo: :gift_heart: :fire:
https://www.webpagefx.com/tools/emoji-cheat-sheet/
:::

## 1、HTML、XHTML和HTML5区别以及有什么联系?

### XHTML与HTML5的区别
- HTML5新增了canvas绘画元素；
- HTML5新增了用于绘媒介回放的video和audio元素；
- 更具语义化的标签，便于浏览器识别；
- 对本地离线存储有更好的支持；
- MATHML，SVG等，可以更好的render；
- 添加了新的表单控件：calendar、date、time、email等。

### HTML、XHTML、HTML5之间联系
- XHTML是HTML规范版本；
- HTML5是HTML、XHTML以及HTML DOM的新标准

## iframe有哪些优缺点？

**优点**

- iframe可以内嵌第三方页面进行跨域通信；
- 解决了加载缓慢的第三方内容如图标和广告等的加载问题

**缺点**

- iframe会阻塞主页面的Onload事件;
- 无法被一些搜索引擎索引到;
- 回退事件错乱

## 3、行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？
- 行内元素 span input img strong select a b等;
- 块级元素 div p h1-5 ul li dl dt dd等；
- 空元素 br hr link meta等;

## 4、页面导入样式时，使用link和@import有什么区别?
- link属于HTML标签，而@import是css提供的；
- 页面被加载时，link会同时被加载，而@import引用的css会等到页面被加载完再加载；
- @import只在IE5以上才能识别，而link是XHTML标签，无兼容问题；
- link方式的样式的权重高于@import的权重

## 5、Label 的作用是什么？ 怎么用？
label 标签来定义表单控制间的关系，当用户选择该标签时，浏览器会自动将焦点转到和标签相关的表单控件上。

::: demo [vanilla]
```html
<html>
  <label for="Name">Number:</label> 
  <input type=“text“ name="Name" id="Name"/>
</html>
```
:::

## 6、标签上title属性与alt属性的区别是什么？

- alt是为了在图片未能正常显示时（屏幕阅读器）给予文字说明。且长度必须少于100个英文字符或者用户必须保证替换文字尽可能的短。
- title属性为设置该属性的元素提供建议性的信息。使用title属性提供非本质的额外信息。

## 7、如何理解语义化标签？

**概念**

语义化是指根据内容的结构化（内容语义化），选择合适的标签（代码语义化），便于开发者阅读和写出更优雅的代码的同时，让浏览器的爬虫和机器很好的解析。

**语义化的好处**

- 用正确的标签做正确的事情；
- 页面呈现出清晰的结构；
- 方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页；
- 有利于SEO：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：爬虫依赖于标签来确定上下文和各个关键字的权重；
- 便于团队开发和维护，语义化更具可读性，遵循W3C标准的团队都遵循这个标准，可以减少差异化。

## 8、如何实现浏览器内多个标签页之间的通信？

- 可以通过调用localstorge、cookies等本地存储方式。

## 9、webSocket如何兼容低浏览器

- Adobe Flash Socket；
- ActiveX HTMLFile (IE) ；
- 基于 multipart 编码发送 XHR；
- 基于长轮询的 XHR；

## 10、文档声明（Doctype）和<!Doctype html>有何作用? 严格模式与混杂模式如何区分？它们有何意义?

- <!doctype html> 的作用就是让浏览器进入标准模式，使用最新的 HTML5标准来解析渲染页面；如果不写，浏览器就会进入混杂模式，我们需要避免此类情况发生。
- 严格模式让各个浏览器统一执行一套规范.兼容模式保证了旧网站的正常运行。

## 11、src与href有什么区别？

- src用于替换当前元素；href用于在当前文档和引用资源之间确立联系；

## 12、浏览器乱码的原因是什么？如何解决？

**产生乱码的原因**

- 网页源代码是gbk的编码，而内容中的中文字是utf-8编码的，这样浏览器打开即会出现html乱码。反之也会出现乱码；
- html网页编码是gbk，而程序从数据库中调出呈现是utf-8编码的内容也会造成编码乱码；
- 浏览器不能自动检测网页编码，造成网页乱码。

**解决办法**
- 使用软件进行编辑HTML网页内容；
- 如果网页设置编码是gbk，而数据库储存数据编码格式是UTF-8，此时需要程序查询数据库数据显示数据前进程序转码；
- 如果浏览器浏览时候出现网页乱码，在浏览器中找到转换编码的菜单进行转换；

## 13、html5有哪些新特性、移除了那些元素？

**新特性**
- 拖拽释放（Drag and drop）API
- 语义化更好的内容标签（header，nav，footer，aside，article，section）
- 音频、视频API（audio，video）
- 画布(Canvas) API;
- 地理(Geolocation) API;
- 本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失；
- sessionStorage 的数据在浏览器关闭后自动删除;
- 表单控件:calendar、date、time、email、url、search;
- 新的技术webworker, websocket, Geolocation等；

**移除元素**
- ```<basefont>``` 默认字体，不设置字体，以此渲染；
- ```<font>``` 字体标签；
- ```<center>``` 水平居中；
- ```<u>``` 下划线；
- ```<big>```字体；
- ```<strike>```中横字；
- ```<tt>```文本等宽；

## 14、Quirks和Standards模式的区别？（怪异模式和标准模式的区别）
- 盒模型：在W3C标准中，如果设置一个元素的宽度和高度，指的是元素内容的宽度和高度，而在Quirks 模式下，IE的宽度和高度还包含了padding和border；
- 设置行内元素的高宽：在Standards模式下，给等行内元素设置wdith和height都不会生效，而在quirks模式下，则会生效；
- 设置百分比的高度：在standards模式下，一个元素的高度是由其包含的内容来决定的，如果父元素没有设置百分比的高度，子元素设置一个百分比的高度是无效的用；
- 设置水平居中：使用margin:0 auto在standards模式下可以使元素水平居中，但在quirks模式下却会失效。

## 15、对HTML5有什么了解？
- 良好的移动性，以移动设备为主；
- 响应式设计，以适应自动变化的屏幕尺寸；
- 支持离线缓存技术，webStorage本地缓存；
- 新增了canvas，video，audio等新标签元素；以及特殊内容元素：article，footer，header，nav，section等；以及表单控件：calendar，date，time，email，url，search等；
- 新增webSocket/webWork技术；
- 还有新增的地理位置等。

## 16、如何对网站的文件和资源进行优化？
- 文件合并（目的是减少http请求）；
- 文件压缩 （目的是直接减少文件下载的体积）；
- 使用缓存；
- 使用cdn托管资源；
- gizp压缩需要的js和css文件；

## 17、Html5中本地存储概念是什么，有什么优点，与cookie有什么区别？

- sessionStorage用于本地存储一个会话中的数据，当会话结束后就会销毁；
- 和sessionStorage不同，localStorage用于持久化的本地存储，除非用户主动删除数据，否则数据永远不会过期；
- cookie是网站为了标示用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）。

**区别**
- 从浏览器和服务器间的传递看：cookie数据始终在同源的http请求中携带（即使不需要）；而sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。
- 从大小看： 存储大小限制不同，cookie数据不能超过4k，只适合保存很小的数据；而sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。
- 从数据有效期看： sessionStorage在会话关闭会立刻关闭，因此持续性不久；cookie只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭。而localStorage始终有效。
- 从作用域看： sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面；而localStorage和cookie都是可以在所有的同源窗口中共享的。

## 18、常见的浏览器内核有哪些?
- Trident内核：IE最先开发或使用的， 360浏览器；
- Webkit内核：Google Chrome，Safari， 搜狗浏览器，360极速浏览器， 阿里云浏览器等；
- Gecko内核： Mozilla FireFox (火狐浏览器) ，K-Meleon浏览器；
- Presto内核：Opera浏览器；

## 19、渐进增强和优雅降级之间的区别?

- 渐进增强（progressive enhancement）：主要是针对低版本的浏览器进行页面重构，保证基本的功能情况下，再针对高级浏览器进行效果，交互等方面的改进和追加功能，以达到更好的用户体验。
- 优雅降级 graceful degradation： 一开始就构建完整的功能，然后再针对低版本的浏览器进行兼容。
- 优雅降级是从复杂的现状开始的，并试图减少用户体验的供给；而渐进增强是从一个非常基础的，能够起作用的版本开始的，并在此基础上不断扩充，以适应未来环境的需要；

## 20、浏览器如何对HTML5的离线储存资源进行管理和加载

**有线情况下：**
- 浏览器发现html头部有manifest属性，它会请求manifest文件，如果是第一次访问app，那么浏览器就会根据 manifest文件的内容下载相应的资源并且进行离线存储。

- 如果已经访问过app并且资源已经离线存储了，那么浏览器就会使用离线的资源加载页面，然后 浏览器会对比新的manifest文件与旧的manifest文件，如果文件没有发生改变，就不做任何操作，如果文件改变了，那么就会重新下载文件中的资源并进行离线存储。

**在离线情况下：**
- 浏览器直接使用离线缓存的资源；