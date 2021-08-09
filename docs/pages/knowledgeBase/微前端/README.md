## 微前端的核心和本质

微前端产生的原因，说白了是个业务问题，我们的业务项目，分久必合合久必分，一个项目合在一起太久了，等到不好维护的时候，就需要拆分，反之同理，拆的太碎的时候，合在一起更容易维护

微前端的本质是前端路由，不需要和运维童鞋联调，而且自己还能控制生命周期，进行沙箱隔离，甚至可以状态通信

微前端框架大致套路差不多，大概包括下面几个功能
- lifeycycles
- shadow dom
- scoped css
- Proxy sandbox
- html-loader
- global store

### lifecycle loop
生命周期的是 single-spa 的核心，berial 内部也复现了一组类似的循环队列

### shadow dom & scoped css

### proxy sandox
沙箱机制，是微前端框架另一个机制，大概有两种方案

### html-loader
html-loader 其实是一个 parser，然后找到 script 和 style，暴露出来

### global store
用于状态通信的最简机制，也是通过 Proxy 实现的，可以简单方便地在不同 APP 之间通信
然后我们还会自带一个批处理，让用户多次修改状态，mount 阶段都交替一次

### webpack5 module federation？
webpack5 的新特性，中文名叫做「模块联邦」，令人稍稍有点沮丧的是，这玩意完全可以实现多个不同技术栈共存，而不需要任何框架

- 简单 任意 js 框架均可使用。微应用接入像使用接入一个 iframe 系统一样简单，但实际不是 iframe。
- 完备性 几乎包含所有构建微前端系统时所需要的基本能力，如 样式隔离、js 沙箱、预加载等。
- 生产可用 已在蚂蚁内外经受过足够大量的线上系统的考验及打磨，健壮性值得信赖。

## 什么是微前端

Techniques, strategies and recipes for building a modern web app with multiple teams that can ship features independently. -- Micro Frontends

微前端是一种多个团队通过**独立发布功能的方式**来共同构建现代化 web 应用的技术手段及方法策略。

微前端架构具备以下几个核心价值：
- **技术栈无关** 主框架不限制接入应用的技术栈，微应用具备完全自主权
- **独立&部署** 微应用仓库独立，前后端可独立开发，部署完成后主框架自动完成同步更新

- **增量升级** 在面对各种复杂场景时，我们通常很难对一个已经存在的系统做全量的技术栈升级或重构，而微前端是一种非常好的实施渐进式重构的手段和策略

- **独立运行时** 每个微应用之间状态隔离，运行时状态不共享

微前端架构旨在解决单体应用在一个相对长的时间跨度下，由于参与的人员、团队的增多、变迁，从一个普通应用演变成一个巨石应用(Frontend Monolith)后，随之而来的应用不可维护的问题。这类问题在企业级 Web 应用中尤其常见。

## qiankun 的核心设计理念
- **简单** 由于主应用微应用都能做到技术栈无关，qiankun 对于用户而言只是一个类似 jQuery 的库，你需要调用几个 qiankun 的 API 即可完成应用的微前端改造。同时由于 qiankun 的 HTML entry 及沙箱的设计，使得微应用的接入像使用 iframe 一样简单。

- 🍡 **解耦/技术栈无关** 微前端的核心目标是**将巨石应用拆解成若干可以自治的松耦合微应用**，而 qiankun 的诸多设计均是秉持这一原则，如 HTML entry、沙箱、应用间通信等。这样才能确保微应用真正具备 独立开发、独立运行 的能力。

## Why Not Iframe
为什么不用 iframe，这几乎是所有微前端方案第一个会被 challenge 的问题。但是大部分微前端方案又不约而同放弃了 iframe 方案，自然是有原因的，并不是为了 "炫技" 或者刻意追求 "特立独行"。

如果不考虑体验问题，iframe 几乎是最完美的微前端解决方案了。

iframe **最大的特性就是提供了浏览器原生的硬隔离方案**，不论是样式隔离、js 隔离这类问题统统都能被完美解决。但他的**最大问题也在于他的隔离性无法被突破**，导致应用间上下文无法被共享，随之带来的开发体验、产品体验的问题。

- **url 不同步**。浏览器刷新 iframe url 状态丢失、后退前进按钮无法使用。
- **UI 不同步**，DOM 结构不共享。想象一下屏幕右下角 1/4 的 iframe 里来一个带遮罩层的弹框，同时我们要求这个弹框要浏览器居中显示，还要浏览器 resize 时自动居中..
- **全局上下文完全隔离**，内存变量不共享。iframe 内外系统的通信、数据同步等需求，主应用的 cookie 要透传到根域名都不同的子应用中实现免登效果。
- **慢**。每次子应用进入都是一次浏览器上下文重建、资源重新加载的过程。

其中有的问题比较好解决(问题1)，有的问题我们可以睁一只眼闭一只眼(问题4)，但有的问题我们则很难解决(问题3)甚至无法解决(问题2)，而这些无法解决的问题恰恰又会给产品带来非常严重的体验问题， 最终导致我们舍弃了 iframe 方案。

## 特性
- 📦 基于 single-spa 封装，提供了更加开箱即用的 API。
- 📱 技术栈无关，任意技术栈的应用均可 使用/接入，不论是 React/Vue/Angular/JQuery 还是其他等框架。
- 💪 HTML Entry 接入方式，让你接入微应用像使用 iframe 一样简单。
- 🛡​ 样式隔离，确保微应用之间样式互相不干扰。
- 🧳 JS 沙箱，确保微应用之间 全局变量/事件 不冲突。
- ⚡️ 资源预加载，在浏览器空闲时间预加载未打开的微应用资源，加速微应用打开速度。
- 🔌 umi 插件，提供了 @umijs/plugin-qiankun 供 umi 应用一键切换成微前端架构系统。

## 上手
### 主应用
```js
import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'react app', // app name registered
    entry: '//localhost:7100',
    container: '#yourContainer',
    activeRule: '/yourActiveRule',
  },
  {
    name: 'vue app',
    entry: { scripts: ['//localhost:7100/main.js'] },
    container: '#yourContainer2',
    activeRule: '/yourActiveRule2',
  },
]);

start();
```
当微应用信息注册完之后，一旦浏览器的 url 发生变化，便会自动触发 qiankun 的匹配逻辑，所有 activeRule 规则匹配上的微应用就会被插入到指定的 container 中，同时依次调用微应用暴露出的生命周期钩子。

如果微应用不是直接跟路由关联的时候，你也可以选择手动加载微应用的方式：
```js
import { loadMicroApp } from 'qiankun';

loadMicroApp({
  name: 'app',
  entry: '//localhost:7100',
  container: '#yourContainer',
});
```

### 微应用
微应用不需要额外安装任何其他依赖即可接入 qiankun 主应用。

微应用需要在自己的入口 js (通常就是你配置的 webpack 的 entry js) 导出 bootstrap、mount、unmount 三个生命周期钩子，以供主应用在适当的时机调用。

```js
/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log('react app bootstraped');
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  ReactDOM.render(<App />, props.container ? props.container.querySelector('#root') : document.getElementById('root'));
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props) {
  ReactDOM.unmountComponentAtNode(
    props.container ? props.container.querySelector('#root') : document.getElementById('root'),
  );
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
  console.log('update props', props);
}
```
### 配置微应用的打包工具
```js
const packageName = require('./package.json').name;

module.exports = {
  output: {
    library: `${packageName}-[name]`,
    libraryTarget: 'umd',
    jsonpFunction: `webpackJsonp_${packageName}`,
  },
};
```

## API 说明

### 基于路由配置
- registerMicroApps(apps, lifeCycles?)
```
apps - Array<RegistrableApp>
app: {
  name: 'react app', // app name registered
  entry: '//localhost:7100',
  container: '#yourContainer',
  activeRule: '/yourActiveRule',
  loader: () => {}
  props: {
    a: 1
  }
}
lifeCycles: 
beforeLoad - Lifecycle | Array<Lifecycle> - 可选
beforeMount - Lifecycle | Array<Lifecycle> - 可选
afterMount - Lifecycle | Array<Lifecycle> - 可选
beforeUnmount - Lifecycle | Array<Lifecycle> - 可选
afterUnmount - Lifecycle | Array<Lifecycle> - 可选
```
- start(opts?)
prefetch - boolean | 'all' | string[] | (( apps: RegistrableApp[] ) => { criticalAppNames: string[]; minorAppsName: string[] }) - 可选，是否开启预加载，默认为 true。

singular - boolean | ((app: RegistrableApp<any>) => Promise<boolean>); - 可选，是否为单实例场景，单实例指的是同一时间只会渲染一个微应用。默认为 true。

sandbox - boolean | { strictStyleIsolation?: boolean, experimentalStyleIsolation?: boolean } - 可选，是否开启沙箱，默认为 true。

默认情况下沙箱可以确保单实例场景子应用之间的样式隔离，但是无法确保主应用跟子应用、或者多实例场景的子应用样式隔离。当配置为 { strictStyleIsolation: true } 时表示开启严格的样式隔离模式。这种模式下 qiankun 会为每个微应用的容器包裹上一个 shadow dom 节点，从而确保微应用的样式不会对全局造成影响。

- setDefaultMountApp(appLink)
- runAfterFirstMounted(effect)
### 手动加载
- loadMicroApp(app, configuration?)
- prefetchApps(apps, importEntryOpts?)
- addGlobalUncaughtErrorHandler(handler)
- removeGlobalUncaughtErrorHandler(handler)
- initGlobalState(state)

主应用：
```js
import { initGlobalState, MicroAppStateActions } from 'qiankun';

// 初始化 state
const actions: MicroAppStateActions = initGlobalState(state);

actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log(state, prev);
});
actions.setGlobalState(state);
actions.offGlobalStateChange();
```
微应用：
```js
// 从生命周期 mount 中获取通信方法，使用方式和 master 一致
export function mount(props) {
  props.onGlobalStateChange((state, prev) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log(state, prev);
  });

  props.setGlobalState(state);
}
```

## 常见问题
- 微应用之间如何跳转？
主应用和微应用都是 hash 模式，主应用根据 hash 来判断微应用，则不用考虑这个问题。

主应用根据 path 来判断微应用

history 模式的微应用之间的跳转，或者微应用跳主应用页面，直接使用微应用的路由实例是不行的，原因是微应用的路由实例跳转都基于路由的 base。有两种办法可以跳转：

history.pushState()：mdn 用法介绍
将主应用的路由实例通过 props 传给微应用，微应用这个路由实例跳转。

- 微应用文件更新之后，访问的还是旧版文件
服务器需要给微应用的 index.html 配置一个响应头：Cache-Control no-cache，意思就是每次请求都检查是否更新。

以 Nginx 为例:
```nginx
location = /index.html {
  add_header Cache-Control no-cache;
}
```
- 如何解决拉取微应用 entry 时 cookie 未携带的问题？
因为拉取微应用 entry 的请求都是跨域的，所以当你的微应用是依赖 cookie (如登陆鉴权)的情况下，你需要通过自定义 fetch 的方式，开启 fetch 的 cors 模式：
```js
import { start } from 'qiankun';

start({
  fetch(url, ...args) {
    // 给指定的微应用 entry 开启跨域请求
    if (url === 'http://app.alipay.com/entry.html') {
      return window.fetch(url, {
        ...args,
        mode: 'cors',
        credentials: 'include',
      });
    }

    return window.fetch(url, ...args);
  },
});
```
