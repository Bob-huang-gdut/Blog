module.exports = {
  title: 'Bob首页', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
  description: 'Bob的前端记录', // meta 中的描述文字，用于SEO
  // 注入到当前页面的 HTML <head> 中的标签
  base: '/blog/',
  head: [
    ['link',
      {
        rel: 'icon',
        href: '/logo.png'
      }
      //浏览器的标签栏的网页图标，第一个'/'会遍历public文件夹的文件
    ],
  ],
  themeConfig: {
    sidebar: 'auto',
    //顶部导航栏
    nav: [
      //格式一：直接跳转，'/'为不添加路由，跳转至首页
      {
        text: '首页',
        link: '/'
      },
      // {
      //   text: '进阶·博文',
      //   link: '/pages/question/css/'
      // },
      {
        text: '每日·一题',
        link: '/pages/question/index.md'
      },
      //格式二：添加下拉菜单，link指向的文件路径
      {
        text: '分类', //默认显示        
        ariaLabel: '分类', //用于识别的label
        items: [{
            text: '文章',
            link: '/pages/folder1/test1.md'
          },
          //点击标签会跳转至link的markdown文件生成的页面
          {
            text: '琐碎',
            link: '/pages/folder2/test4.md'
          },
        ]
      },
      {
        text: '功能演示',
        link: '/pages/folder1/test3.md'
      },
      //格式三：跳转至外部网页，需http/https前缀
      {
        text: 'Github',
        link: 'https://github.com/Bob-huang-gdut'
      },
    ],
    //侧边导航栏：会根据当前的文件路径是否匹配侧边栏数据，自动显示/隐藏
    sidebar: {
      '/pages/question/': [{
        title: '壹题汇总', // 一级菜单名称
        collapsable: false, // false为默认展开菜单, 默认值true是折叠,
        sidebarDepth: -1, //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
      }, {
        title: 'css世界', // 一级菜单名称
        collapsable: true, // false为默认展开菜单, 默认值true是折叠,
        sidebarDepth: 2, //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
        children: [
          ['css/1.md', 'css1'], //菜单名称为'子菜单1'，跳转至/pages/folder1/test1.md
          ['css/2.md', 'css2']
        ]
      }, {
        title: 'js世界', // 一级菜单名称
        collapsable: true, // false为默认展开菜单, 默认值true是折叠,
        sidebarDepth: 2, //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
        children: [
          ['js/1.md', 'js1'], //菜单名称为'子菜单1'，跳转至/pages/folder1/test1.md
          ['js/2.md', 'js2']
        ]
      }],
    },
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'vuejs/vuepress',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'vuejs/vuepress',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！'
  }
}