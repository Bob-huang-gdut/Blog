### npm 依赖包版本号~和^的区别
- ~会匹配最近的小版本依赖包，比如~1.2.3会匹配所有1.2.x版本，但是不包括1.3.0
- ^会匹配最新的大版本依赖包，比如^1.2.3会匹配所有1.x.x的包，包括1.3.0，但是不包括2.0.0
那么该如何选择呢？当然你可以指定特定的版本号，直接写1.2.3，前面什么前缀都没有，这样固然没问题，但是如果依赖包发布新版本修复了一些小bug，那么需要手动修改package.json文件；~和^则可以解决这个问题。

但是需要注意^版本更新可能比较大，会造成项目代码错误，所以建议使用~来标记版本号，这样可以保证项目不会出现大的问题，也能保证包中的小bug可以得到修复。

版本号写*，这意味着安装最新版本的依赖包，但缺点同上，可能会造成版本不兼容，慎用！

#### 1. npm version的含义

每个npm包都有一个package.json，如果要发布包的话，package.json里面的version字段就是决定发包的版本号。
version字段是这样一个结构：0.0.1，是有三位的版本号。分别是对应的version里面的：major, minor, patch。
也就是说当发布大版本的时候会升级为 1.0.0，小版本是0.1.0，一些小修复是0.0.2。

如果执行了prepatch，版本号会从1.1.1变成 1.1.2-0

antd-design 也是用预发布的方式管理npm版本号
![输入图片说明](https://user-gold-cdn.xitu.io/2019/10/12/16dbe1ee0db64d14?w=1920&h=947&f=png&s=193571 "屏幕截图.png")
我们称版本号1.1.2-0的4位分别是 大号.中号.小号-预发布号

| version | 功能 |
| --- | --- |
| major | 如果没有预发布号，则直接升级一位大号，其他位都置为0。**即2.0.1变成3.0.0**<br> 如果有预发布号：<br>中号和小号都为0，则不升级大号，而将预发布号删掉。 **即2.0.0-1变成2.0.0** ，这就是预发布的作用<br>如果中号和小号有任意一个不是0，那边会升级一位大号，其他位都置为0，清空预发布号。**即2.0.1-0变成3.0.0** |
| minor | 如果没有预发布号，则升级一位中号，大号不动，小号置为0。**即2.0.1变成2.1.0**<br>如果有预发布号:<br>如果小号为0，则不升级中号，将预发布号去掉。**即2.0.0-1变成2.1.0**<br>如果小号不为0，同理没有预发布号。**即2.0.1-1变成2.0.5** |
| patch | 如果没有预发布号：直接升级小号，去掉预发布号。**即2.0.1变成2.0.2**<br>如果有预发布号：去掉预发布号，其他不动。**即2.0.1-0变成2.0.1** |
| premajor | 直接升级大号，中号和小号置为0，增加预发布号为0。**即2.0.1变成3.0.0-0** |
| preminor | 直接升级中号，小号置为0，增加预发布号为0。**即2.0.1-0变成2.1.0-0** |
| prepatch | 直接升级小号，增加预发布号为0。**即2.0.1变成2.0.2-0** |
| prerelease | 如果没有预发布号：增加小号，增加预发布号为0。**即2.0.1变成2.0.1-0** <br>如果有预发布号，则升级预发布号。**即2.0.1-0变成2.0.1-1** |

#### 2. 一次完整的npm package发布流程是怎样的？

##### 1. 使用Git Bash(命令行工具)切换到组件库项目目录，如下图。
``` 命令行
cd 项目目录
```


##### 2. 登录npm账号，到官网注册用户 https://www.npmjs.com 进行注册。
``` 命令行
$ npm adduser // or $ npm login
Username: npm-user-name
Password:
Email: your-email
```


##### 3. 发布（由于之前已经发布到npm，所以这里提示我们去更新 package.json 中的 version）
``` 命令行
$ npm publish
```


##### 4. 更新

- 发布一个新的稳定版本

当模块有更新的时候，需要发布一个新版本，当所有需要更新的文件都 commit 完了后，就可以更新到 npm 了。
``` 命令行
# 更新版本号（major | minor | patch | premajor | preminor | prepatch | prerelease）
# 大版本并且不向下兼容时，使用 major
# 有新功能且向下兼容时，使用 minor
# 修复一些问题、优化等，使用 patch
# 下面比如更新一个 patch 小版本号
$ npm version patch
$ npm publish
```

- 预发布版本

很多时候一些新改动，并不能直接发布到稳定版本上（稳定版本的意思就是使用 npm install weex-ui-demo 即可下载的最新版本），这时可以发布一个 “预发布版本“，不会影响到稳定版本。
``` 命令行
# 发布一个 prelease 版本，tag=beta
$ npm version prerelease
$ npm publish --tag beta
```
比如原来的版本号是 1.0.1，那么以上发布后的版本是 1.0.1-0，用户可以通过 npm install weex-ui-demo@beta 或者 npm install weex-ui-demo@1.0.1-0 来安装。

- 当 prerelease 版本稳定之后，可以把它设置为稳定版本

``` 命令行
# 首先可以查看当前所有的最新版本，包括 prerelease 与稳定版本。
$ npm dist-tag ls

# 设置 1.0.1-1 版本为稳定版本
$ npm dist-tag add weex-ui-demo@1.0.1-1 latest

# 或者通过 tag 来设置
$ npm dist-tag add weex-ui-demo@beta latest
```
这时候，latest 稳定版本已经是 1.0.1-1 了，用户可以直接通过 npm install weex-ui-demo 即可安装该版本。

- 当需要删除多余的tag时，可以用下面的指令。
``` 命令行
# 删除 tag beta
$ npm dist-tag rm weex-ui-demo beta
```

- 可通过 --preid 参数来设置增加预版本号前缀，antd-design就是通过这种方式。
``` 命令行
# 增加预版本号前缀alpha
$ npm version prerelease --preid=alpha
v1.0.0-alpha.0
```
参考资料：

[npm的tag管理](http://cnodejs.org/topic/537b47d1cbcc39634983b739)

[npm-dist-tag](https://docs.npmjs.com/cli/dist-tag)

[npm-version](https://docs.npmjs.com/cli/version)

