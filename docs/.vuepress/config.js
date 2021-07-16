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
  plugins: [
    'demo-block'
  ],
  serviceWorker: true,
  themeConfig: {
    sidebar: 'auto',
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
        text: '分类',
        ariaLabel: '分类',
        items: [{
            text: '文章',
            link: '/pages/knowledgeBase/test1.md'
          },
          {
            text: '琐碎',
            link: '/pages/knowledgeBase/test4.md'
          },
        ]
      },
      {
        text: '功能演示',
        link: '/pages/knowledgeBase/test3.md'
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
        }, {
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
            ['vue/1.md', 'vue 基础'],
          ]
        },
        {
          title: '浏览器',
          path: '/pages/knowledgeBase/browser/',
        },
        {
          title: '计算机网络',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            ['network/1.md', '计算机网络'],
          ]
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
          path: '/pages/knowledgeBase/code/',
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
        title: '壹题汇总',
        path: '/pages/question/',
      }, {
        title: 'js',
        collapsable: true,
        sidebarDepth: 2,
        children: [
          ['js/1.md', '代码输出题'],
          ['js/2.md', 'js2']
        ]
      }],
    },
  }
}