module.exports = {
  title: '黄思博前端进阶', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
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
          title: 'css',
          path: '/pages/knowledgeBase/css/',
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
          collapsable: true,
          sidebarDepth: 2,
          children: [
            ['designMode/1.md', '设计模式'],
          ]
        },
        {
          title: '小程序',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            ['miniProgram/1.md', '小程序1'],
          ]
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
          path: '/pages/knowledgeBase/browser/',
        },
        {
          title: '计算机网络',
          path: '/pages/knowledgeBase/network/',
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
          title: 'rollup',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            ['rollup/1.md', 'rollup'],
          ]
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
        }
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
        title: 'js',
        collapsable: true,
        sidebarDepth: 2,
        children: [
          ['folder1/1.md', '1.md'],
          ['folder1/2.md', '2.md']
        ]
      }, {
        title: 'ts',
        collapsable: true,
        sidebarDepth: 2,
        children: [
          ['folder2/3.md', '3.md'],
        ]
      }],
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
    '@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: {
        message: "新的风暴已经出现",
        buttonText: "盘他"
      }
    }
  ]
}