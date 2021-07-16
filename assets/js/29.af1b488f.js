(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{389:function(n,v,_){"use strict";_.r(v);var p=_(46),e=Object(p.a)({},(function(){var n=this,v=n.$createElement,_=n._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[_("p",[n._v("1. 介绍\n在日渐复杂的业务发展下，为了更加高效的开展各项业务，不可避免的将会开发出各类中后台应用。但这种高效的同时，带来的弊端也显而易见，随着中后台应用数量增长，带来的管理难度也随之上升。另外一方面，中后台应用由于其应用生命周期长(动辄 3+ 年)等特点，最后演变成一个巨石应用的概率往往高于其他类型的Web应用。")]),n._v(" "),_("p",[n._v("统一管理平台建立就是为了解决这些弊端，统一管理平台将会把各类中后台应用统一集中管理，并通过微前端架构进行整合，降低后期维护升级的带来的开发难度。")]),n._v(" "),_("p",[n._v("2. 技术架构介绍\n2.1 什么是微前端\n微前端是一种类似于微服务的架构，它将微服务的理念应用于浏览器端，即将 Web 应用由单一的单体应用转变为多个小型前端应用聚合为一的应用。各个前端应用还可以独立运行、独立开发、独立部署。微前端不是单纯的前端框架或者工具，而是一套架构体系。")]),n._v(" "),_("p",[n._v("2.2 微前端的价值\n微前端架构具备以下几个核心价值：")]),n._v(" "),_("p",[n._v("与技术栈无关，主框架不限制接入应用的技术栈，子应用具备完全自主权。\n子应用可以独立开发、独立部署甚至子应用仓库独立，同时前后端也可独立开发，部署完成后主框架自动完成同步更新。\n独立运行时每个子应用之间状态隔离，运行时状态不共享。\n微前端架构旨在解决单体应用在一个相对长的时间跨度下，由于参与的人员、团队的增多、变迁，从一个普通应用演变成一个巨石应用后，随之而来的应用不可维护的问题，这类问题在企业级 Web 应用中尤其常见。")]),n._v(" "),_("p",[n._v("2.3 实现微前端几种方案\n单纯根据对概念的理解，很容易想到实现微前端的重要思想就是将应用进行拆解和整合，通常是一个父应用加上一些子应用，那么使用类似Nginx配置不同应用的转发，或是采用iframe来将多个应用整合到一起等等这些其实都属于微前端的实现方案，他们之间的对比如下图：")]),n._v(" "),_("p",[n._v("上述方案中，每种都有自己的优劣，最原始的Nginx配置反向代理是从接入层的角度来将系统进行分离，但是需要运维配置，而iframe嵌套是最简单和最快速的方案，但是iframe的弊端也是无法避免的，而Web Components的方案则需要大量的改造成本，最后的组合式应用路由分发方案改造成本中等并且能满足大部分需求，也不影响各前端应用的体验，是当下各个业务普遍采用的一种方案。")]),n._v(" "),_("p",[n._v("2.4 微前端的模块\n组合式应用路由方案的核心是“主从”思想，即包括一个基座应用和若干个微应用，基座应用大多数是一个前端SPA项目，主要负责应用注册，路由映射，消息下发等，而微应用是独立前端项目，这些项目不限于采用React，Vue，Angular或者JQuery开发，每个微应用注册到基座应用中，由基座进行管理，但是如果脱离基座也是可以单独访问，基本的流程如下图所示：")]),n._v(" "),_("p",[n._v("当整个微前端框架运行之后，给用户的体验就是类似下图所示：")]),n._v(" "),_("p",[n._v("简单描述下就是基座应用中有一些菜单项，点击每个菜单项可以展示对应的微应用，这些应用的切换是纯前端无感知的，所以，基于目前的方案来说，一个微前端的基座框架需要解决以下问题：")]),n._v(" "),_("p",[n._v("路由切换的分发问题。\n主微应用的隔离问题。\n通信问题。\n下面针对这些问题来一一阐述。")]),n._v(" "),_("p",[n._v("2.5 微前端的路由分发\n作为微前端的基座应用，是整个应用的入口，负责承载当前微应用的展示和对其他路由微应用的转发，对于当前微应用的展示，一般是由以下几步构成：")]),n._v(" "),_("p",[n._v("作为一个SPA的基座应用，其自身是一套纯前端项目，要想展示微应用的页面除了采用iframe之外，要能先拉取到微应用的页面内容，这就需要远程拉取机制。\n远程拉取机制通常会采用fetch API来首先获取到微应用的HTML内容，然后通过解析将微应用的JavaScript和CSS进行抽离，采用eval方法来运行JavaScript，并将CSS和HTML内容append到基座应用中留给微应用的展示区域，当微应用切换走时，同步卸载这些内容，这就构成的当前应用的展示流程。\n在这个流程里必然会涉及到CSS样式的污染以及JavaScript对全局对象的污染，这个涉及到隔离问题会在后面讨论。\n2.6 微前端的应用隔离\n要将每个微应用做到独立运行，那么应用隔离问题是必不可免的。在现有的方案中应用隔离主要分为主应用和微应用、微应用和微应用之间的JavaScript执行环境隔离、CSS样式隔离。")]),n._v(" "),_("p",[n._v("CSS隔离：当主应用和微应用同屏渲染时，就可能会有一些样式会相互污染，如果要彻底隔离CSS污染，可以采用CSS Module 或者命名空间的方式，给每个微应用模块以特定前缀，即可保证不会互相干扰，可以采用Webpack的Postcss插件，在打包时添加特定的前缀。")]),n._v(" "),_("p",[n._v("而对于微应用与微应用之间的CSS隔离就非常简单，在每次应用加载时，将该应用所有的link和style 内容进行标记。在应用卸载后，同步卸载页面上对应的link和style即可。")]),n._v(" "),_("p",[n._v("JavaScript隔离：每当微应用的JavaScript被加载并运行时，它的核心实际上是对全局对象Window的修改以及一些全局事件的改变，例如jQuery这个js运行后，会在Window上挂载一个window.$对象，对于其他库React，Vue也不例外。为此，需要在加载和卸载每个微应用的同时，尽可能消除这种冲突和影响，最普遍的做法是采用沙箱机制。")]),n._v(" "),_("p",[n._v("沙箱机制的核心是让局部的JavaScript运行时，对外部对象的访问和修改处在可控的范围内，即无论内部怎么运行，都不会影响外部的对象。通常在Node.js端可以采用vm模块，而对于浏览器，则需要结合with关键字和window.Proxy对象来实现浏览器端的沙箱。")]),n._v(" "),_("p",[n._v("2.7 微前端的消息通信\n另一方面，微前端下各个应用间通信方式也是考量一个微前端是否可靠、可用的指标。微前端下应用间的通信方式有很多种，要让多个分离的微应用之间要做到互相通信，本质上仍离不开中间媒介或者说全局对象。所以对于消息订阅模式的通信机制是非常适用的，在基座应用中会定义事件中心Event，每个微应用分别来注册事件，当被触发事件时再由事件中心统一分发，这就构成了基本的通信机制，流程如下图：")]),n._v(" "),_("p",[n._v("3. 微应用-版本管理平台\n版本管理平台是一个集版本管理、全量安装包管理、增量安装包管理、版本信息分发为一体的综合性管理平台。其用途在于优化和改善现有的团队的发版方式。")]),n._v(" "),_("p",[n._v("在现有的发版方式中，每次发版时，客户端开发同事需要通过PostMan等类似的工具进行手动化操作来完成发版任务。大致工作流程如下：")]),n._v(" "),_("p",[n._v("客户端同事登录门户后台，将最新的全量安装包上传后，手动将上传好的回调地址复制保存下来。\n通过PostMan调用发版接口，并将前一步复制的安装包地址填入相关接口信息中，完成发版操作。\n通过上述流程可以发现，现存的发版方式操作体验较差、不支持对旧版本的发版信息进行统计和分析。同时，对后期的增量更新发版方式也不支持。因此，版本管理平台将会优化现有的发版流程，使后续的发版方式体验更加友好和多样化。")]),n._v(" "),_("p",[n._v("版本管理平台另一个作用是联接客户端和服务器，完成对当前版本更新信息的分发。通过调用接口，服务器端将根据本次的发版信息以及前N次版本的发版情况，结合一些列的业务性规则，从而决定客户端此次版本升级的执行操作。")]),n._v(" "),_("p",[n._v("4. 总结\n微前端帮助团队解决了实际的问题，但是对于每个业务来说，是否适合使用微前端，以及是否能正确的使用微前端，还是需要遵循以下一些原则：")]),n._v(" "),_("p",[n._v("微前端最佳的使用场景是一些B端的管理系统或者中后台应用，既能兼容并集成历史系统，也可以将新的系统集成进来，并且不影响原先的交互体验。\n整体的微前端不仅仅是只将系统集成进来，而是整个微前端体系的完善，这其中就包括：\n基座应用和微应用的自动部署能力。\n微应用的配置管理能力。\n本地开发调试能力。\n线上监控和统计能力等等。\n只有将整个能力体系搭建完善，才能说是整个微前端体系流程的完善。当发现使用微前端反而使效率变低，简单的变更复杂那就说明微前端并不适用。")])])}),[],!1,null,null,null);v.default=e.exports}}]);