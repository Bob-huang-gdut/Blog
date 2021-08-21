module.exports = {
  title: '黄思博 blog', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
  description: '前端工程师,前端自学,高级前端工程师,中高级前端工程师,前端进阶知识,前端职业发展', // meta 中的描述文字，用于SEO
  base: '/blog/',
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  head: [
    ['link',
      {
        rel: 'icon',
        href: '/images/logo.png'
      }
    ],
    ['script', {
      src: 'https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js'
    }],
    ['script', {
      src: 'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js'
    }],
    ['script', {
      src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js'
    }],
  ],
  serviceWorker: true,
  themeConfig: {
    logo: '/images/logo.png', // 注意图片放在 public 文件夹下
    sidebar: 'auto',
    navbar: true,
    search: true,
    searchMaxSuggestions: 10,
    smoothScroll: true,
    nav: [{
        text: '首页',
        link: '/'
      },
      {
        text: '知识库',
        link: '/pages/knowledgeBase/'
      },
      {
        text: '算法',
        link: '/pages/algorithm/'
      },
      {
        text: '每日·一题',
        link: '/pages/question/'
      },
      {
        text: '个人总结',
        link: '/pages/summary/'
      },
      {
        text: 'Github',
        link: 'https://github.com/Bob-huang-gdut'
      },
    ],
    sidebar: {
      '/pages/knowledgeBase/': [{
          title: '知识库',
          path: '/pages/knowledgeBase/',
        },
        {
          title: 'html',
          path: '/pages/knowledgeBase/html/',
        }, {
          title: 'nginx',
          path: '/pages/knowledgeBase/nginx/',
        }, {
          title: 'node',
          path: '/pages/knowledgeBase/node/',
        }, {
          title: '监控SDK',
          path: '/pages/knowledgeBase/监控SDK/',
        }, {
          title: '移动端',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            ['移动端/1.md', '各类移动端技术对比总结'],
            ['移动端/react-native/1.md', 'react-native'],
            ['移动端/weex/1.md', 'weex'],
            ['移动端/flutter/1.md', 'flutter'],
            ['移动端/H5/1.md', 'H5'],
          ]
        }, {
          title: '小程序',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            ['小程序/1.md', '各类小程序技术对比总结'],
            ['小程序/原生微信小程序/1.md', '原生微信小程序'],
            ['小程序/mpvue/1.md', 'mpvue'],
            ['小程序/taro/1.md', 'taro'],
            ['小程序/uni-app/1.md', 'uni-app'],
          ]
        }, {
          title: 'js',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            ['js/1.md', 'javascript篇--1.6万字带你回忆那些遗忘的JS知识点'],
            ['js/2.md', '「2021」高频前端面试题汇总之JavaScript篇（上）'],
            ['js/3.md', '「2021」高频前端面试题汇总之JavaScript篇（下）'],
            ['js/4.md', 'JavaScript风格指南'],
          ]
        },
        {
          title: '设计模式',
          path: '/pages/knowledgeBase/设计模式/',
        },
        {
          title: 'web脚手架',
          path: '/pages/knowledgeBase/web脚手架/',
        },
        {
          title: '数据可视化',
          path: '/pages/knowledgeBase/数据可视化/',
        },
        {
          title: '性能优化',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            ['optimization/1.md', '基础性能优化'],
            ['optimization/2.md', 'vue优化'],
            ['optimization/3.md', 'react优化'],
          ]
        },
        {
          title: '微前端',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            ['微前端/1.md', 'qiankun'],
            ['微前端/2.md', 'single-spa'],
            ['微前端/3.md', '模块联邦'],
          ]
        },
        {
          title: 'react',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            ['react/1.md', '一、组件基础'],
            ['react/2.md', '二、数据管理'],
            ['react/3.md', '三、生命周期'],
            ['react/4.md', '四、组件通信'],
            ['react/5.md', '五、路由'],
            ['react/6.md', '六、Redux'],
            ['react/7.md', '七、Hooks'],
            ['react/8.md', '八、虚拟DOM'],
            ['react/9.md', '九、其他'],
          ]
        },
        {
          title: 'typeScript',
          path: '/pages/knowledgeBase/typeScript/',
        },
        {
          title: 'vue',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            ['vue/1.md', '一、基础'],
            ['vue/2.md', '二、生命周期'],
            ['vue/3.md', '三、组件通信'],
            ['vue/4.md', '四、路由'],
            ['vue/5.md', '五、vuex'],
            ['vue/6.md', '六、vue3.0'],
            ['vue/7.md', '七、虚拟DOM'],
          ]
        },
        {
          title: '浏览器',
          path: '/pages/knowledgeBase/浏览器/',
        },
        {
          title: '计算机网络',
          path: '/pages/knowledgeBase/network/',
        },
        {
          title: '骨架屏',
          path: '/pages/knowledgeBase/骨架屏/',
        },
        {
          title: '数据结构',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            ['数据结构/1.md', '数据结构'],
          ]
        },
        {
          title: '移动端适配',
          path: '/pages/knowledgeBase/移动端适配/',
        },
        {
          title: '手写代码',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            ['code/1.md', '一、JavaScript基础'],
            ['code/2.md', '二、数据处理'],
            ['code/3.md', '三、应用场景'],
          ]
        },
        {
          title: '前端安全',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            ['security/1.md', '前端安全'],
          ]
        },
        {
          title: 'Docker',
          path: '/pages/knowledgeBase/Docker/',
        },
      ],
      '/pages/algorithm/': [{
        title: '算法',
        path: '/pages/algorithm/',
      }],
      '/pages/question/': [{
          title: '每天一题',
          path: '/pages/question/',
        },
        {
          title: 'js',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            ['js/1.md', '代码输出题'],
            ['js/2.md', 'js2']
          ]
        }
      ],
      '/pages/summary/': [{
        title: '个人总结',
        path: '/pages/summary/',
      }, {
        title: '文章',
        collapsable: true,
        sidebarDepth: 2,
        children: [
          ['1.md', '个人总结'],
          ['2.md', '个人总结2'],
          ['3.md', '开发原则'],
          ['4.md', '面试题'],
          ['5.md', '微前端技术方案'],
          ['6.md', '断点续传方案'],
          ['7.md', '个人总结3'],
          ['组件库npm版本号管理策略.md', '组件库npm版本号管理策略'],
          ['大牛文章.md', '大牛文章'],
          ['异步重试.md', '异步重试'],
          ['axios请求终极封装.md', 'axios请求终极封装']
        ]
      }]
    },
  },
  plugins: [
    'demo-block',
    '@vuepress/last-updated',
    '@vuepress/back-to-top',
    '@vuepress/active-header-links',
    '@vuepress/google-analytics', {
      'ga': 'UA-00000000-0' // UA-00000000-0
    },
    '@vuepress/medium-zoom',
    '@vuepress/nprogress',
  ]
}