(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{411:function(e,s,t){"use strict";t.r(s);var a=t(28),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h3",{attrs:{id:"_1-react-router的实现原理是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-react-router的实现原理是什么"}},[e._v("#")]),e._v(" 1. React-Router的实现原理是什么？")]),e._v(" "),t("p",[e._v("客户端路由实现的思想：")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("基于 hash 的路由：通过监听"),t("code",[e._v("hashchange")]),e._v("事件，感知 hash 的变化")]),e._v(" "),t("ul",[t("li",[e._v("改变 hash 可以直接通过 location.hash=xxx")])])]),e._v(" "),t("li",[t("p",[e._v("基于 H5 history 路由：")]),e._v(" "),t("ul",[t("li",[e._v("改变 url 可以通过 history.pushState 和 resplaceState 等，会将URL压入堆栈，同时能够应用 "),t("code",[e._v("history.go()")]),e._v(" 等 API")]),e._v(" "),t("li",[e._v("监听 url 的变化可以通过自定义事件触发实现")])])])]),e._v(" "),t("p",[t("strong",[e._v("react-router 实现的思想：")])]),e._v(" "),t("ul",[t("li",[e._v("基于 "),t("code",[e._v("history")]),e._v(" 库来实现上述不同的客户端路由实现思想，并且能够保存历史记录等，磨平浏览器差异，上层无感知")]),e._v(" "),t("li",[e._v("通过维护的列表，在每次 URL 发生变化的回收，通过配置的 路由路径，匹配到对应的 Component，并且 render")])]),e._v(" "),t("h3",{attrs:{id:"_2-如何配置-react-router-实现路由切换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-如何配置-react-router-实现路由切换"}},[e._v("#")]),e._v(" 2. 如何配置 React-Router 实现路由切换")]),e._v(" "),t("p",[t("strong",[e._v("（1）使用"),t("code",[e._v("<Route>")]),e._v(" 组件")])]),e._v(" "),t("p",[e._v("路由匹配是通过比较 "),t("code",[e._v("<Route>")]),e._v(" 的 path 属性和当前地址的 pathname 来实现的。当一个 "),t("code",[e._v("<Route>")]),e._v(" 匹配成功时，它将渲染其内容，当它不匹配时就会渲染 null。没有路径的 "),t("code",[e._v("<Route>")]),e._v(" 将始终被匹配。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// when location = { pathname: '/about' }\n<Route path='/about' component={About}/> // renders <About/>\n<Route path='/contact' component={Contact}/> // renders null\n<Route component={Always}/> // renders <Always/>\n\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("p",[t("strong",[e._v("（2）结合使用 "),t("code",[e._v("<Switch>")]),e._v(" 组件和 "),t("code",[e._v("<Route>")]),e._v(" 组件")])]),e._v(" "),t("p",[t("code",[e._v("<Switch>")]),e._v(" 用于将 "),t("code",[e._v("<Route>")]),e._v(" 分组。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<Switch>\n    <Route exact path="/" component={Home} />\n    <Route path="/about" component={About} />\n    <Route path="/contact" component={Contact} />\n</Switch>\n\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("p",[t("code",[e._v("<Switch>")]),e._v(" 不是分组 "),t("code",[e._v("<Route>")]),e._v(" 所必须的，但他通常很有用。 一个 "),t("code",[e._v("<Switch>")]),e._v(" 会遍历其所有的子 "),t("code",[e._v("<Route>")]),e._v("元素，并仅渲染与当前地址匹配的第一个元素。")]),e._v(" "),t("p",[t("strong",[e._v("（3）使用 "),t("code",[e._v("<Link>、 <NavLink>、<Redirect>")]),e._v(" 组件")])]),e._v(" "),t("p",[t("code",[e._v("<Link>")]),e._v(" 组件来在你的应用程序中创建链接。无论你在何处渲染一个"),t("code",[e._v("<Link>")]),e._v(" ，都会在应用程序的 HTML 中渲染锚（"),t("code",[e._v("<a>")]),e._v("）。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<Link to=\"/\">Home</Link>   \n// <a href='/'>Home</a>\n\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v('是一种特殊类型的 当它的 to属性与当前地址匹配时，可以将其定义为"活跃的"。')]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// location = { pathname: '/react' }\n<NavLink to=\"/react\" activeClassName=\"hurray\">\n    React\n</NavLink>\n// <a href='/react' className='hurray'>React</a>\n\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("p",[e._v("当我们想强制导航时，可以渲染一个"),t("code",[e._v("<Redirect>")]),e._v("，当一个"),t("code",[e._v("<Redirect>")]),e._v("渲染时，它将使用它的to属性进行定向。")]),e._v(" "),t("h3",{attrs:{id:"_3-react-router怎么设置重定向"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-react-router怎么设置重定向"}},[e._v("#")]),e._v(" 3. React-Router怎么设置重定向？")]),e._v(" "),t("p",[e._v("使用"),t("code",[e._v("<Redirect>")]),e._v("组件实现路由的重定向：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<Switch>\n  <Redirect from='/users/:id' to='/users/profile/:id'/>\n  <Route path='/users/profile/:id' component={Profile}/>\n</Switch>\n\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("p",[e._v("当请求 "),t("code",[e._v("/users/:id")]),e._v(" 被重定向去 "),t("code",[e._v("'/users/profile/:id'")]),e._v("：")]),e._v(" "),t("ul",[t("li",[e._v("属性 "),t("code",[e._v("from: string")]),e._v("：需要匹配的将要被重定向路径。")]),e._v(" "),t("li",[e._v("属性 "),t("code",[e._v("to: string")]),e._v("：重定向的 URL 字符串")]),e._v(" "),t("li",[e._v("属性 "),t("code",[e._v("to: object")]),e._v("：重定向的 location 对象")]),e._v(" "),t("li",[e._v("属性 "),t("code",[e._v("push: bool")]),e._v("：若为真，重定向操作将会把新地址加入到访问历史记录里面，并且无法回退到前面的页面。")])]),e._v(" "),t("h3",{attrs:{id:"_4-react-router-里的-link-标签和-a-标签的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-react-router-里的-link-标签和-a-标签的区别"}},[e._v("#")]),e._v(" 4. react-router 里的 Link 标签和 a 标签的区别")]),e._v(" "),t("p",[e._v("从最终渲染的 DOM 来看，这两者都是链接，都是 标签，区别是∶ "),t("code",[e._v("<Link>")]),e._v("是react-router 里实现路由跳转的链接，一般配合"),t("code",[e._v("<Route>")]),e._v(" 使用，react-router接管了其默认的链接跳转行为，区别于传统的页面跳转，"),t("code",[e._v("<Link>")]),e._v(" 的“跳转”行为只会触发相匹配的"),t("code",[e._v("<Route>")]),e._v("对应的页面内容更新，而不会刷新整个页面。")]),e._v(" "),t("p",[t("code",[e._v("<Link>")]),e._v("做了3件事情:")]),e._v(" "),t("ul",[t("li",[e._v("有onclick那就执行onclick")]),e._v(" "),t("li",[e._v("click的时候阻止a标签默认事件")]),e._v(" "),t("li",[e._v("根据跳转href(即是to)，用history (web前端路由两种方式之一，history & hash)跳转，此时只是链接变了，并没有刷新页面而"),t("code",[e._v("<a>")]),e._v("标签就是普通的超链接了，用于从当前页面跳转到href指向的另一 个页面(非锚点情况)。")])]),e._v(" "),t("p",[e._v("a标签默认事件禁掉之后做了什么才实现了跳转?")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let domArr = document.getElementsByTagName('a')\n[...domArr].forEach(item=>{\n    item.addEventListener('click',function () {\n        location.href = this.href\n    })\n})\n\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])]),t("h3",{attrs:{id:"_5-react-router如何获取url的参数和历史对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-react-router如何获取url的参数和历史对象"}},[e._v("#")]),e._v(" 5. React-Router如何获取URL的参数和历史对象？")]),e._v(" "),t("p",[t("strong",[e._v("（1）获取URL的参数")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("get传值")])])]),e._v(" "),t("p",[e._v("路由配置还是普通的配置，如："),t("code",[e._v("'admin'")]),e._v("，传参方式如："),t("code",[e._v("'admin?id='1111''")]),e._v("。通过"),t("code",[e._v("this.props.location.search")]),e._v("获取url获取到一个字符串"),t("code",[e._v("'?id='1111'")]),e._v(" 可以用url，qs，querystring，浏览器提供的api URLSearchParams对象或者自己封装的方法去解析出id的值。")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("动态路由传值")])])]),e._v(" "),t("p",[e._v("路由需要配置成动态路由：如"),t("code",[e._v("path='/admin/:id'")]),e._v("，传参方式，如"),t("code",[e._v("'admin/111'")]),e._v("。通过"),t("code",[e._v("this.props.match.params.id")]),e._v(" 取得url中的动态路由id部分的值，除此之外还可以通过"),t("code",[e._v("useParams（Hooks）")]),e._v("来获取")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("通过query或state传值")])])]),e._v(" "),t("p",[e._v("传参方式如：在Link组件的to属性中可以传递对象"),t("code",[e._v("{pathname:'/admin',query:'111',state:'111'};")]),e._v("。通过"),t("code",[e._v("this.props.location.state")]),e._v("或"),t("code",[e._v("this.props.location.query")]),e._v("来获取即可，传递的参数可以是对象、数组等，但是存在缺点就是只要刷新页面，参数就会丢失。")]),e._v(" "),t("p",[t("strong",[e._v("（2）获取历史对象")])]),e._v(" "),t("ul",[t("li",[e._v("如果React >= 16.8 时可以使用 React Router中提供的Hooks")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('import { useHistory } from "react-router-dom";\nlet history = useHistory();\n\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("2.使用this.props.history获取历史对象")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let history = this.props.history;\n\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("h3",{attrs:{id:"_6-react-router-4怎样在路由变化时重新渲染同一个组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-react-router-4怎样在路由变化时重新渲染同一个组件"}},[e._v("#")]),e._v(" 6. React-Router 4怎样在路由变化时重新渲染同一个组件？")]),e._v(" "),t("p",[e._v("当路由变化时，即组件的props发生了变化，会调用componentWillReceiveProps等生命周期钩子。那需要做的只是： 当路由改变时，根据路由，也去请求数据：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("class NewsList extends Component {\n  componentDidMount () {\n     this.fetchData(this.props.location);\n  }\n  \n  fetchData(location) {\n    const type = location.pathname.replace('/', '') || 'top'\n    this.props.dispatch(fetchListData(type))\n  }\n  componentWillReceiveProps(nextProps) {\n     if (nextProps.location.pathname != this.props.location.pathname) {\n         this.fetchData(nextProps.location);\n     } \n  }\n  render () {\n    ...\n  }\n}\n\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br")])]),t("p",[e._v("利用生命周期componentWillReceiveProps，进行重新render的预处理操作。")]),e._v(" "),t("h3",{attrs:{id:"_7-react-router的路由有几种模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-react-router的路由有几种模式"}},[e._v("#")]),e._v(" 7. React-Router的路由有几种模式？")]),e._v(" "),t("p",[e._v("React-Router 支持使用 hash（对应 HashRouter）和 browser（对应 BrowserRouter） 两种路由规则， react-router-dom 提供了 BrowserRouter 和 HashRouter 两个组件来实现应用的 UI 和 URL 同步：")]),e._v(" "),t("ul",[t("li",[e._v("BrowserRouter 创建的 URL 格式："),t("a",{attrs:{href:"https://link.juejin.cn?target=http%3A%2F%2Fxxx.com%2Fpath",title:"http://xxx.com/path",target:"_blank",rel:"noopener noreferrer"}},[e._v("xxx.com/path"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("HashRouter 创建的 URL 格式："),t("a",{attrs:{href:"https://link.juejin.cn?target=http%3A%2F%2Fxxx.com%2F%23%2Fpath",title:"http://xxx.com/#/path",target:"_blank",rel:"noopener noreferrer"}},[e._v("xxx.com/#/path"),t("OutboundLink")],1)])]),e._v(" "),t("p",[t("strong",[e._v("（1）BrowserRouter")])]),e._v(" "),t("p",[e._v("它使用 HTML5 提供的 history API（pushState、replaceState 和 popstate 事件）来保持 UI 和 URL 的同步。由此可以看出，"),t("strong",[e._v("BrowserRouter 是使用 HTML 5 的 history API 来控制路由跳转的：")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<BrowserRouter\n    basename={string}\n    forceRefresh={bool}\n    getUserConfirmation={func}\n    keyLength={number}\n/>\n\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])]),t("p",[t("strong",[e._v("其中的属性如下：")])]),e._v(" "),t("ul",[t("li",[e._v("basename 所有路由的基准 URL。basename 的正确格式是前面有一个前导斜杠，但不能有尾部斜杠；")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<BrowserRouter basename="/calendar">\n    <Link to="/today" />\n</BrowserRouter>\n\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[e._v("等同于")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<a href="/calendar/today" />\n\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("ul",[t("li",[e._v("forceRefresh 如果为 true，在导航的过程中整个页面将会刷新。一般情况下，只有在不支持 HTML5 history API 的浏览器中使用此功能；")]),e._v(" "),t("li",[e._v("getUserConfirmation 用于确认导航的函数，默认使用 window.confirm。例如，当从 /a 导航至 /b 时，会使用默认的 confirm 函数弹出一个提示，用户点击确定后才进行导航，否则不做任何处理；")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// 这是默认的确认函数\nconst getConfirmation = (message, callback) => {\n  const allowTransition = window.confirm(message);\n  callback(allowTransition);\n}\n<BrowserRouter getUserConfirmation={getConfirmation} />\n\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])]),t("blockquote",[t("p",[e._v("需要配合"),t("code",[e._v("<Prompt>")]),e._v(" 一起使用。")])]),e._v(" "),t("ul",[t("li",[e._v("KeyLength 用来设置 Location.Key 的长度。")])]),e._v(" "),t("p",[t("strong",[e._v("（2）HashRouter")])]),e._v(" "),t("p",[e._v("使用 URL 的 hash 部分（即 window.location.hash）来保持 UI 和 URL 的同步。由此可以看出，"),t("strong",[e._v("HashRouter 是通过 URL 的 hash 属性来控制路由跳转的：")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<HashRouter\n    basename={string}\n    getUserConfirmation={func}\n    hashType={string}  \n/>\n\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("p",[t("strong",[e._v("其参数如下")]),e._v("：")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("basename, getUserConfirmation 和 "),t("code",[e._v("BrowserRouter")]),e._v(" 功能一样；")])]),e._v(" "),t("li",[t("p",[e._v("hashType window.location.hash 使用的 hash 类型，有如下几种：")]),e._v(" "),t("ul",[t("li",[e._v("slash - 后面跟一个斜杠，例如 #/ 和 #/sunshine/lollipops；")]),e._v(" "),t("li",[e._v("noslash - 后面没有斜杠，例如 # 和 #sunshine/lollipops；")]),e._v(" "),t("li",[e._v("hashbang - Google 风格的 ajax crawlable，例如 #!/ 和 #!/sunshine/lollipops。")])])])]),e._v(" "),t("h3",{attrs:{id:"_8-react-router-4的switch有什么用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-react-router-4的switch有什么用"}},[e._v("#")]),e._v(" 8. React-Router 4的Switch有什么用？")]),e._v(" "),t("p",[e._v("Switch 通常被用来包裹 Route，用于渲染与路径匹配的第一个子 "),t("code",[e._v("<Route>")]),e._v(" 或 "),t("code",[e._v("<Redirect>")]),e._v("，它里面不能放其他元素。")]),e._v(" "),t("p",[e._v("假如不加 "),t("code",[e._v("<Switch>")]),e._v(" ：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('import { Route } from \'react-router-dom\'\n\n<Route path="/" component={Home}></Route>\n<Route path="/login" component={Login}></Route>\n\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("p",[e._v("Route 组件的 path 属性用于匹配路径，因为需要匹配 "),t("code",[e._v("/")]),e._v(" 到 "),t("code",[e._v("Home")]),e._v("，匹配 "),t("code",[e._v("/login")]),e._v(" 到 "),t("code",[e._v("Login")]),e._v("，所以需要两个 Route，但是不能这么写。这样写的话，当 URL 的 path 为 “/login” 时，"),t("code",[e._v('<Route path="/" />')]),e._v("和"),t("code",[e._v('<Route path="/login" />')]),e._v(" 都会被匹配，因此页面会展示 Home 和 Login 两个组件。这时就需要借助 "),t("code",[e._v("<Switch>")]),e._v(" 来做到只显示一个匹配组件：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('import { Switch, Route} from \'react-router-dom\'\n    \n<Switch>\n    <Route path="/" component={Home}></Route>\n    <Route path="/login" component={Login}></Route>\n</Switch>\n\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])]),t("p",[e._v("此时，再访问 “/login” 路径时，却只显示了 Home 组件。这是就用到了exact属性，它的作用就是精确匹配路径，经常与"),t("code",[e._v("<Switch>")]),e._v(" 联合使用。只有当 URL 和该 "),t("code",[e._v("<Route>")]),e._v(" 的 path 属性完全一致的情况下才能匹配上：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('import { Switch, Route} from \'react-router-dom\'\n   \n<Switch>\n   <Route exact path="/" component={Home}></Route>\n   <Route exact path="/login" component={Login}></Route>\n</Switch>\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);