module.exports = {
  title: 'Bob前端进阶', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
  description: '前端工程师,前端自学,高级前端工程师,中高级前端工程师,前端进阶知识,前端职业发展', // meta 中的描述文字，用于SEO
  base: '/blog/',
  head: [
    ['link',
      {
        rel: 'icon',
        href: '/logo.png'
      }
    ],
    ['script', {
      src: 'https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js'
    }],
    ['script', {
      src: 'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js'
    }],
    ['script', {
      src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js'
    }],
    ['script', {
      src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js'
    }],
  ],
  serviceWorker: true,
  themeConfig: {
    sidebar: 'auto',
    navbar: true,
    search: true,
    searchMaxSuggestions: 10,
    smoothScroll: true,
    lastUpdated: 'Last Updated',
    nav: [{
        text: '首页',
        link: '/'
      },
      {
        text: '知识库',
        link: '/knowledgeBase/'
      },
      {
        text: '算法',
        link: '/algorithm/'
      },
      {
        text: '每日·一题',
        link: '/question/'
      },
      {
        text: 'Github',
        link: 'https://github.com/Bob-huang-gdut'
      },
    ],
    sidebar: {
      '/knowledgeBase/': [{
          title: '知识库',
          path: '/knowledgeBase/',
        },
        {
          title: 'html',
          path: '/knowledgeBase/html/',
        }, {
          title: 'css',
          path: '/knowledgeBase/css/',
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
          title: 'es6',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            ['es6/1.md', 'es6'],
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
            ['optimization/1.md', '性能优化1'],
          ]
        },
        {
          title: 'qiankun',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            ['qiankun/1.md', 'qiankun1'],
          ]
        },
        {
          title: 'react',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            ['react/1.md', 'react'],
          ]
        },
        {
          title: 'ts',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            ['ts/1.md', 'ts'],
          ]
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
          path: '/knowledgeBase/browser/',
        },
        {
          title: '计算机网络',
          path: '/knowledgeBase/network/',
        },
        {
          title: '数据结构',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            ['dataStructure/1.md', '数据结构'],
          ]
        },
        {
          title: '手写代码',
          path: '/knowledgeBase/code/',
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
      '/algorithm/': [{
        title: '算法',
        path: '/algorithm/',
      }],
      '/question/': [{
          title: '每天一题',
          path: '/question/',
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
    },
  },
  plugins: [
    'demo-block',
    '@vuepress/last-updated',
    '@vuepress/back-to-top',
    '@vuepress/active-header-links',
    '@vuepress/google-analytics',
    {
      'ga': 'UA-00000000-0' // UA-00000000-0
    },
    '@vuepress/medium-zoom',
    '@vuepress/nprogress'
  ]
}