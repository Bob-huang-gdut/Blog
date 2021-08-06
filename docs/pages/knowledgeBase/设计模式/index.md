# JavaScript设计模式与开发实践

列举14种常见的设计模式

## 单例设计模式

::: tip 提示
单例模式：保证一个类仅有一个实例，并提供一个访问它的全局访问点。
:::

#### 单例设计模式的案例

- 线程池
- 全局缓存
- 浏览器中的window对象
- 网页登录浮窗

#### 单例设计模式的实现：面向对象
```js
// 单例设计模式的实现：面向对象
var Singleton = function(name) {
  this.name = name;
  this.instance = null;
}
Singleton.prototype.getName = function(){
  return this.name;
}
Singleton.getInstance = function(name) {
  if(!this.instance) {
    this.instance = new Singleton(name);
  }
  return this.instance;
}

var instance1 = Singleton.getInstance('why');
var instance2 = Singleton.getInstance('www');
console.log(instance1===instance2); // 输出true

var obj1 = new Singleton('why');
var obj2 = new Singleton('www');
console.log(obj1.getName());        // 输出why
console.log(obj2.getName());        // 输出www
```
#### 单例设计模式的实现：闭包
```js
// 单例设计模式的实现：闭包
var Singleton = function(name) {
  this.name = name;
}
Singleton.prototype.getName = function() {
  return this.name;
}
Singleton.getInstance = (function() {
  var instance = null;
  return function(name) {
    if(!instance) {
      instance = new Singleton(name)
    }
    return instance;
  }
})()

var instance1 = Singleton.getInstance('why');
var instance2 = Singleton.getInstance('www');
console.log(instance1 === instance2); // 输出true
```
#### 透明的单例设计模式
无论以上面向对象的单例实现还是闭包的单例实现，都通过Singleton.getInstance来获取Singleton类的唯一对象，这增加了这个类的不透明性，使用者必须知道Singleton是一个单例类，然后通过Singleton.getInstance方法才能获取单例对象，要解决这一问题，可以使用透明的单例设计模式
```js
// 透明的单例模式
var CreateDiv = (function(){
  var instance = null;
  var CreateDiv = function(html) {
    if(instance) {
      return instance;
    }
    this.html = html;
    this.init();
    instance = this;
    return instance;
  }
  CreateDiv.prototype.init = function() {
    var div = document.createElement('div');
    div.innerHTML = this.html;
    document.body.appendChild(div);
  }
  return CreateDiv;
})()

var instance1 = new CreateDiv('why');
var instance2 = new CreateDiv('www');
console.log(instance1===instance2); // 输出true
```

## 策略模式

::: tip 提示
策略模式：定义一系列算法，把他们一个一个封装起来，并且使他们可以相互替换。
:::

#### 策略模式的优点
- 策略模式利用组合、委托和多态等技术的思想，可以有效的避免多重条件选择语句
- 策略模式提供了对开放-封闭原则的完美支持，将算法封装在独立的策略类中，使它们易于切换、易于理解、易于扩展。
- 策略模式中的算法也可以复用在系统的其他地方
- 策略模式利用组合和委托来让Context拥有执行算法的能力，这也是继承的一种更轻便的替代方案。

#### 策略模式案例：计算奖金

案例描述：某公司的年终奖是根据员工的工资基数和年底绩效来发放的。例如，绩效为S的人年终奖有4倍工资，绩效为A的人年终奖有3倍工资，绩效为B的人年终奖有2倍工资，财务部要求我们提供一段代码，来方便他们计算员工的年终奖。
```js
// 计算奖金：JavaScript的完善版本
var strategy = {
  'S': function(salary) {
    return salary * 4;
  },
  'A': function(salary) {
    return salary * 3;
  },
  'B': function(salary) {
    return salary * 2;
  }
}
var calcluateBouns = function(level,salary) {
  return strategy[level](salary);
}
console.log(calcluateBouns('S',4000));  // 输出16000
console.log(calcluateBouns('A',3000));  // 输出9000
console.log(calcluateBouns('B',2000));  // 输出4000
```

#### 策略模式案例：表单验证

::: tip 提示
1.用户名(验证是否为空)
2.密码(验证长度不能小于6位)
3.手机号(验证是否是手机号格式)
:::

```js
// 策略模式案例：表单验证
var strategies = {
  isEmpty: function(value,errMsg) {
    if(value==='') {
      return errMsg
    }
  },
  minLength: function(value,length,errMsg) {
    if(value.length<length) {
      return errMsg
    }
  },
  isMobile: function(value,errMsg) {
    if(!(/^1[34578]\d{9}$/.test(value))) {
      return errMsg
    }
  }
}
var Validator = function() {
  this.cache = [];
}
Validator.prototype.add = function(dom,rule,msg) {
  var ary = rule.split(':');
  this.cache.push(function(){
    var strategy = ary.shift();
    ary.unshift(dom.value);
    ary.push(msg);
    return strategies[strategy].apply(dom,ary);
  });
}
Validator.prototype.run = function() {
  for (let index = 0; index < this.cache.length; index++) {
    var msg = this.cache[index]();
    if(msg) {
      return msg;
    }
  }
}

var validateFunc = function() {
  var validator = new Validator();
  validator.add(registerForm.username,'isEmpty','用户名不能为空');
  validator.add(registerForm.password,'minLength:6','密码长度不能小于6位');
  validator.add(registerForm.phone,'isMobile','手机号格式不正确');
  var errMsg = validator.run();
  return errMsg;
}

var submitBtn = document.getElementById('submitBtn');
var registerForm = document.getElementById('registerForm');
submitBtn.onclick = function() {
  var errMsg = validateFunc();
  if(errMsg) {
    console.log(errMsg);
    return false;
  } else {
    console.log('表单验证成功')
  }
}
```

## 代理模式

::: tip 定义
代理模式是为一个对象提供一个代用品或占位符，以便控制对它的访问。
:::
代理模式的关键所在就是：当客户不方便直接访问一个对象或者不满足需要的时候，提供一个替身对象来控制对这个对象的访问，客户实际上访问的是替身对象，替身对象作出一些请求后再把请求转接给本体对象

用代理实现图片懒加载
```js
// 用代理实现图片懒加载
var myImage = (function(){
  var image = document.createElement('img');
  document.body.appendChild(image);
  return {
    setSrc: function(src) {
      image.src = src;
    }
  }
})();

var proxyImage = (function(){
  var img = new Image();
  img.onload = function() {
    myImage.setSrc(this.src);
  }
  return {
    setSrc: function(src) {
      myImage.setSrc('file:///C:/Users/admin/Desktop/mask/img/7.jpg');
      img.src = src;
    }
  }
})()
proxyImage.setSrc('https://img1.sycdn.imooc.com/5c09123400014ba418720632.jpg');
```
缓存代理
::: tip 定义
缓存代理可以为一些开销大的运算结果提供暂时的存储，在下次运算时，如果传递进来的参数跟之前一样，则可以直接返回前面存储的运算结果。
:::
```js
// 缓存代理：计算乘积
var mult = function() {
  console.log('开始计算乘积');
  var sum = 1;
  for(var i=0;i<arguments.length;i++) {
    sum = sum * arguments[i];
  }
  return sum;
}
var proxyMult = (function(){
  var cache = {};
  return function() {
    var args = Array.prototype.join.call(arguments,',');
    if(cache.hasOwnProperty(args)) {
      return cache[args];
    }
    return cache[args] = mult.apply(this,arguments)
  }
})()
console.log(proxyMult(1,2,3,4)); // 输出：开始计算乘积 24
console.log(proxyMult(1,2,3,4)); // 输出24
```
## 迭代器模式
::: tip 定义
迭代器模式是指提供一种顺序访问一个聚合对象中的各个元素，而又不需要暴露该对象的内部表示。迭代器分为两种，一种是内部迭代器，另外一种是外部迭代器
:::
```js
// 自定义外部迭代器实现比较两个数组的值是否完全相等
var Iterator = function(obj) {
  var current = 0;
  var next = function() {
    current++;
  }
  var isDone = function() {
    return current >=obj.length;
  }
  var getCurrentItem = function() {
    return obj[current];
  }
  return {
    next: next,
    isDone: isDone,
    getCurrentItem:getCurrentItem,
    length: obj.length
  }
}
var compare = function(iterator1,iterator2) {
  if(iterator1.length!=iterator2.length) {
    console.log('两个数组不相等');
    return false;
  }
  while(!iterator1.isDone() && !iterator2.isDone()) {
    if(iterator1.getCurrentItem()!=iterator2.getCurrentItem()) {
      throw new Error('两个数组不相等')
    }
    iterator1.next();
    iterator2.next();
  }
  console.log('两个数组相等')
}
var iterator1 = Iterator([1,2,3]);
var iterator2 = Iterator([1,2,4]);
compare(iterator1,iterator2); // 报错，两个数组不相等
```
## 发布-订阅模式
## 命令模式
## 组合模式
## 模板方法模式
## 享元模式
::: tip
亨元模式是一种用于性能优化的模式，其核心是运用共享技术来有效支持大量细粒度的对象。亨元模式要求将对象的属性划分为内部状态和外部状态。
:::
## 职责链模式
::: tip
职责链模式：使多个对象都有机会处理请求，从而避免请求的发送者和接受者之间的耦合关系，将这些对象连成一条链传递该请求，直到有一个对象处理它为止。
:::
## 中介者模式
::: tip
中介者模式：中介者模式的作用就是解除对象与对象之间的紧耦合关系。增加一个中介者对象后，所有的相关对象都通过中介者对象来通信，而不是互相引用，所以当一个对象发生改变时，只需要通知中介者即可。
:::
## 装饰者模式
::: tip
装饰者模式可以动态的给某个对象添加一些额外的职责，而不会影响从这个类中派生的其他对象。
:::
## 状态模式
::: tip
状态模式的关键是区分事物内部的状态，事物内部状态的改变往往会带来事物的行为改变。
:::
#### 电灯程序
状态模式的核心是区分对象的状态，将电灯程序中三种状态分别设计成单独的一个类，与此种状态有关的行为被封装在这个类的内部。

```js
// 关闭
var OffLightState = function(light) {
  this.light = light;
}
OffLightState.prototype.buttonPressed = function() {
  console.log('弱光');
  this.light.setState(this.light.weakLightState);
}
// 弱光
var WeakLightState = function(light) {
  this.light = light;
}
WeakLightState.prototype.buttonPressed = function() {
  console.log('强光');
  this.light.setState(this.light.strongLightState);
}
// 强光
var StrongLightState = function(light) {
  this.light = light;
}
StrongLightState.prototype.buttonPressed = function() {
  console.log('关闭');
  this.light.setState(this.light.offLightState);
}

// 电灯类
var Light = function() {
  this.offLightState = new OffLightState(this);
  this.weakLightState = new WeakLightState(this);
  this.strongLightState = new StrongLightState(this);
  this.button = null;
}
Light.prototype.init = function() {
  var button = document.createElement('button');
  var _self = this;
  this.button = document.body.appendChild(button);
  this.button.innerHTML = '开关';
  this.currState = this.offLightState;
  this.button.onclick = function() {
    _self.currState.buttonPressed();
  }
}
Light.prototype.setState = function(state) {
  this.currState = state;
}

// 初始化测试
var light = new Light();
light.init();
```
状态模式的优缺点

优点：

- 状态模式定义了状态和行为之间的关系，并将他们封装在一个类里。通过增加新的状态类，很容易增加新的状态和转换。
- 避免了Context无限膨胀，状态切换的逻辑被分布在状态类中，也去掉了Context中原本过多的条件分支
- 用对象代替字符串来记录当前状态，使得状态的切换更加一目了然。
- Context中的请求动作和状态类中封装的行为可以非常容易的独立变化而不影响。

缺点：

- 状态模式会根据系统中多少种状态来定义多少个类，这将是一项枯燥和无味的过程
- 状态模式会将逻辑分散在各个状态类中，虽然可以避免条件分支语句判断，但也造成了逻辑分散，我们无法在一个地方就看出整个状态机的逻辑。
## 设配器模式
::: tip
适配器模式的作用是解决两个软件实体间的接口不兼容的问题，使用适配器模式之后，原本由于接口不兼容而不能工作的两个软件实体可以一起工作。
:::

#### 适配器运用:地图渲染
```js
// 谷歌地图
var googleMap = {
  show: function() {
    console.log('开始渲染谷歌地图');
  }
}
// 百度地图
var baiduMap = {
  // 地图渲染接口不兼容
  display: function() {
    console.log('开始渲染百度地图');
  }
}
// 百度地图适配器
var baiduMapAdapter = {
  show: function() {
    return baiduMap.display();
  }
}
// 地图渲染
var renderMap = function(map) {
  if(map.show instanceof Function) {
    map.show();
  }
}
// 测试地图渲染
renderMap(googleMap);       // 开始渲染谷歌地图
renderMap(baiduMapAdapter); // 开始渲染百度地图
```