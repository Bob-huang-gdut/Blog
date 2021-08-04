(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{412:function(s,n,a){"use strict";a.r(n);var t=a(28),r=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("React组件间通信常见的几种情况:")]),s._v(" "),a("ul",[a("li",[s._v("父组件向子组件通信")]),s._v(" "),a("li",[s._v("子组件向父组件通信")]),s._v(" "),a("li",[s._v("跨级组件通信")]),s._v(" "),a("li",[s._v("非嵌套关系的组件通信")])]),s._v(" "),a("h3",{attrs:{id:"_1-父子组件的通信方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-父子组件的通信方式"}},[s._v("#")]),s._v(" 1. 父子组件的通信方式？")]),s._v(" "),a("p",[a("strong",[s._v("父组件向子组件通信")]),s._v("：父组件通过 props 向子组件传递需要的信息。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('// 子组件: Child\nconst Child = props =>{\n  return <p>{props.name}</p>\n}\n// 父组件 Parent\nconst Parent = ()=>{\n    return <Child name="react"></Child>\n}\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[a("strong",[s._v("子组件向父组件通信")]),s._v("：: props+回调的方式。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('// 子组件: Child\nconst Child = props =>{\n  const cb = msg =>{\n      return ()=>{\n          props.callback(msg)\n      }\n  }\n  return (\n      <button onClick={cb("你好!")}>你好</button>\n  )\n}\n// 父组件 Parent\nclass Parent extends Component {\n    callback(msg){\n        console.log(msg)\n    }\n    render(){\n        return <Child callback={this.callback.bind(this)}></Child>    \n    }\n}\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("h3",{attrs:{id:"_2-跨级组件的通信方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-跨级组件的通信方式"}},[s._v("#")]),s._v(" 2. 跨级组件的通信方式？")]),s._v(" "),a("p",[s._v("父组件向子组件的子组件通信，向更深层子组件通信：")]),s._v(" "),a("ul",[a("li",[s._v("使用props，利用中间组件层层传递,但是如果父组件结构较深，那么中间每一层组件都要去传递props，增加了复杂度，并且这些props并不是中间组件自己需要的。")]),s._v(" "),a("li",[s._v("使用context，context相当于一个大容器，可以把要通信的内容放在这个容器中，这样不管嵌套多深，都可以随意取用，对于跨越多层的全局数据可以使用context实现。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('// context方式实现跨级组件通信 \n// Context 设计目的是为了共享那些对于一个组件树而言是“全局”的数据\nconst BatteryContext = createContext();\n//  子组件的子组件 \nclass GrandChild extends Component {\n    render(){\n        return (\n            <BatteryContext.Consumer>\n                {\n                    color => <h1 style={{"color":color}}>我是红色的:{color}</h1>\n                }\n            </BatteryContext.Consumer>\n        )\n    }\n}\n//  子组件\nconst Child = () =>{\n    return (\n        <GrandChild/>\n    )\n}\n// 父组件\nclass Parent extends Component {\n      state = {\n          color:"red"\n      }\n      render(){\n          const {color} = this.state\n          return (\n          <BatteryContext.Provider value={color}>\n              <Child></Child>\n          </BatteryContext.Provider>\n          )\n      }\n}\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br")])]),a("h3",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")])]),s._v(" "),a("h3",{attrs:{id:"_3-非嵌套关系组件的通信方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-非嵌套关系组件的通信方式"}},[s._v("#")]),s._v(" 3. 非嵌套关系组件的通信方式？")]),s._v(" "),a("p",[s._v("即没有任何包含关系的组件，包括兄弟组件以及不在同一个父级中的非兄弟组件。")]),s._v(" "),a("ul",[a("li",[s._v("可以使用自定义事件通信（发布订阅模式）")]),s._v(" "),a("li",[s._v("可以通过redux等进行全局状态管理")]),s._v(" "),a("li",[s._v("如果是兄弟组件通信，可以找到这两个兄弟节点共同的父节点, 结合父子间通信方式进行通信。")])]),s._v(" "),a("h3",{attrs:{id:"_4-如何解决-props-层级过深的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-如何解决-props-层级过深的问题"}},[s._v("#")]),s._v(" 4. 如何解决 props 层级过深的问题")]),s._v(" "),a("ul",[a("li",[s._v("使用Context API：提供一种组件之间的状态共享，而不必通过显式组件树逐层传递props；")]),s._v(" "),a("li",[s._v("使用Redux等状态库。")])]),s._v(" "),a("h3",{attrs:{id:"_5-组件通信的方式有哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-组件通信的方式有哪些"}},[s._v("#")]),s._v(" 5. 组件通信的方式有哪些")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("⽗组件向⼦组件通讯")]),s._v(": ⽗组件可以向⼦组件通过传 props 的⽅式，向⼦组件进⾏通讯")]),s._v(" "),a("li",[a("strong",[s._v("⼦组件向⽗组件通讯")]),s._v(": props+回调的⽅式，⽗组件向⼦组件传递props进⾏通讯，此props为作⽤域为⽗组件⾃身的函 数，⼦组件调⽤该函数，将⼦组件想要传递的信息，作为参数，传递到⽗组件的作⽤域中")]),s._v(" "),a("li",[a("strong",[s._v("兄弟组件通信")]),s._v(": 找到这两个兄弟节点共同的⽗节点,结合上⾯两种⽅式由⽗节点转发信息进⾏通信")]),s._v(" "),a("li",[a("strong",[s._v("跨层级通信")]),s._v(": Context 设计⽬的是为了共享那些对于⼀个组件树⽽⾔是“全局”的数据，例如当前认证的⽤户、主题或⾸选语⾔，对于跨越多层的全局数据通过 Context 通信再适合不过")]),s._v(" "),a("li",[a("strong",[s._v("发布订阅模式")]),s._v(": 发布者发布事件，订阅者监听事件并做出反应,我们可以通过引⼊event模块进⾏通信")]),s._v(" "),a("li",[a("strong",[s._v("全局状态管理⼯具")]),s._v(": 借助Redux或者Mobx等全局状态管理⼯具进⾏通信,这种⼯具会维护⼀个全局状态中⼼Store,并根据不同的事件产⽣新的状态")])])])}),[],!1,null,null,null);n.default=r.exports}}]);