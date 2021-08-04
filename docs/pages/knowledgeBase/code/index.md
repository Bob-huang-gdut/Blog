# 手写代码

::: tip 提示
价值不大的知识点不做记录
:fire:
:::
### 1. 手写 Object.create
思路：将传入的对象作为原型
```js
function create(obj) {
    function F() {}
    F.prototype = obj 
    return new F()
}
```
### 2. 手写 instanceof 方法
instanceof 运算符用于判断构造函数的 prototype 属性是否出现在对象的原型链中的任何位置。

实现步骤：
- 首先获取类型的原型
- 然后获得对象的原型
- 然后一直循环判断对象的原型是否等于类型的原型，直到对象原型为 null，因为原型链最终为 null

具体实现：
```js
function myInstanceof(left, right) {
    let proto = Object.getPrototypeOf(left);
    let prototype = right.prototype;
    while(true) {
        if (!proto) return false;
        if (proto === prototype) return true;
        proto = Object.getPrototypeOf(proto)
    }
}
```
### 8.手写防抖函数
函数防抖是指在事件被触发 n 秒后再执行回调，如果在这 n 秒内事件又被触发，则重新计时。这可以使用在一些点击请求的事件上，避免因为用户的多次点击向后端发送多次请求。
```js
function debounce(fn, wait) {
    let timer = null;
    return (args) => {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        // 设置定时器，使事件间隔指定事件后执行
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, wait);
    }
}
```

### 9.手写节流函数
函数节流是指规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。节流可以使用在 scroll 函数的事件监听上，通过事件节流来降低事件调用的频率。
```js
// 函数节流的实现;
function throttle(fn, delay) {
    let curTime = new Date();
    return (args) => {
        let nowTime = new Date();
        if (nowTime - curTime >= delay) {
            curTime = new Date()
            fn.apply(this, args)
        }
    }
}
```

### 10. 手写类型判断函数
```js
function getType(value) {
    // 判断数据是 null 的情况
    return Object.prototype.toString.call(value).split(' ').slice(0, -1).toLowerCase();
}
```

### 11. 手写 call 函数
### 12. 手写 apply 函数
### 13. 手写 bind 函数