## 前言

脚手架工具 vue 有 vue-cli，react 有 create-react-app，根据选择项来生成新项目模板。但往往这些不够定制化，生成项目之后还需要添加很多配置，离生成即用还有一定的差距，可以通过定制自己的cli工具来进行处理，做一个简单的cli工具，集成自己预设的模板，根据模板来生成，后续只需维护模板的添加和更新。

## package.json

因为是cli工具，需要可以在命令行中执行命令，所以在package.json需要声明，主要的字段是bin，可执行文件，如下即声明：gdpg 为可执行命令，并且去执行 src/index.js

```js
"bin": {
  "gdpg": "src/index.js"
},
```

## 可执行文件

src/index.js里加入，表示是可执行文件

```js
#!/usr/bin/env node
```

## cli相关各种工具库介绍

### [commander](https://www.npmjs.com/package/commander)

commander 的主要作用是命令行带参数，例如

```js
gdpg init -l 
# or
gdpg init --local
```

代码如下：`gdpg -v` 或者 `gdpg --version`就会打印出当前cli的版本，加参数可以通过对接受参数进行定义区分实现相应的功能

```js
program
    .version(pkg.version, '-v, --version')
    .usage('<command> [options]')
    .description('Standard tooling generate dir from templates')

program
    .command('init [name]')
    .description('Create a project')
    .option('-l, --local', 'Create dir from local template')
    .option('-g, --git', 'Create dir from git address')
    .action((name, options) => {
        console.log(name, options.local, options.git)
    })
```

### [inquirer](https://www.npmjs.com/package/inquirer)

inquirer 的主要作用是询问，有input 输入框输入，number 数字输入，confirm yes/no确认，list/rawlist 列表选择（单选），expand展开，checkbox多选，password密码输入，editor在临时文件上启动用户首选编辑器的实例。

> type: (String) Type of the prompt. Defaults: input - Possible values: input, number, confirm, list, rawlist, expand, checkbox, password, editor

询问用户的选择，根据用户选择执行不同操作，生成不同的模板

### [ora](https://www.npmjs.com/package/ora)

相当于命令行终端中的进度条，用它来表示动作的开始和结束，加载中等状态

### [chalk](https://www.npmjs.com/package/chalk)

chalk 即粉笔，在命令行终端中输出彩色的文字\
[![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c0c5b8d187e24219b0665244e72c9efd~tplv-k3u1fbpfcp-zoom-1.image)](https://img2020.cnblogs.com/blog/1207871/202106/1207871-20210602193556678-669558593.png)

### [download-git-repo](https://www.npmjs.com/package/download-git-repo)
从节点下载并提取一个git仓库(GitHub, GitLab, Bitbucket)

### [update-notifier](https://www.npmjs.com/package/update-notifier)

更新通知程序，工具包有更新的话提示

```js
const updateNotifier = require('update-notifier');
const pkg = require('./package.json');

updateNotifier({pkg}).notify();
```

## gdpg-cli 功能示例

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1186ef61b7814907b3e80696871f9841~tplv-k3u1fbpfcp-watermark.image)

几个最新的初始化预设模板可用，eslint、prettier、husky、commitlint、vue-router/react-router-dom、axios等等都已预设

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d791d4fb2651401790afd35f728aa37c~tplv-k3u1fbpfcp-watermark.image)
### 目录结构
```js
gdpg-cli
├── LICENSE
├── README.md
├── dir.md
├── example.png
├── generators
│   ├── react17
│   ├── vue2
│   ├── vue3
│   ├── vue3_ts
│   └── vue3_vite
├── lib
│   ├── generator.js
│   ├── index.js
│   └── log.js
├── package.json
└── yarn.lock
```
package.json
```js
{
  "name": "gdpg-cli",
  "version": "1.0.0",
  "license": "MIT",
  "main": "lib/index.js",
  "bin": {
    "gpdg": "lib/index.js"
  },
  "files": [
    "lib"
  ],
  "dependencies": {
    "chalk": "^4.1.1",
    "commander": "^7.2.0",
    "download-git-repo": "^3.0.2",
    "fs-extra": "^10.0.0",
    "inquirer": "^7.3.3",
    "log-symbols": "^2.2.0",
    "ora": "^5.4.0",
    "update-notifier": "^5.1.0"
  },
  "scripts": {
    "lint": "eslint --fix",
    "prettier": "prettier --write lib",
    "release": "standard-version"
  },
  "devDependencies": {
    "@commitlint/cli": "^12.1.1",
    "@commitlint/config-conventional": "^12.1.1",
    "eslint": "^7.26.0",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-prettier": "^3.4.0",
    "husky": "^4.3.7",
    "lint-staged": "^10.5.3",
    "prettier": "^2.3.0",
    "standard-version": "^9.3.0"
  },
  "engines": {
    "node": ">=10.12"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -e $HUSKY_GIT_PARAMS"
    }
  },
  "commitlint": {
    "extends": [
      "@commitlint/config-conventional"
    ]
  },
  "lint-staged": {
    "*.{js}": [
      "prettier --write",
      "eslint --fix",
      "git add"
    ]
  }
}
```
lib/generator.js
```js
const inquirer = require('inquirer')
const fsExtra = require('fs-extra')
const download = require('download-git-repo')
const ora = require('ora')
const log = require('./log')
// const path = require('path')

/**
 * 三种方式可选 1. 预设  2. 从 git 下载  3. 从本地 clone
 * gdpgGenerator 从预设中选择模板
 * gitGenerator 从 git 下载模板
 * localGenerator 从本地下载模板
 */

/**
 * @param {*} prompt 询问选项
 * @param {*} action 询问后的执行函数
 */
const generator = (prompt, action) => {
    inquirer
        .prompt(prompt)
        .then((answers) => {
            action(answers)
        })
        .catch((error) => {
            if (error.isTtyError) {
                log.error(`Prompt couldn't be rendered in the current environment`)
            } else {
                log.error(error)
            }
        })
}

const spinner = ora('Download from template...')

const successInfo = (name) => {
    spinner.succeed()
    console.log(
        `
        ▄████ ▓█████▄  ██▓███    ▄████     ▄████▄   ██▓     ██▓
        ██▒ ▀█▒▒██▀ ██▌▓██░  ██▒ ██▒ ▀█▒   ▒██▀ ▀█  ▓██▒    ▓██▒
        ▒██░▄▄▄░░██   █▌▓██░ ██▓▒▒██░▄▄▄░   ▒▓█    ▄ ▒██░    ▒██▒
        ░▓█  ██▓░▓█▄   ▌▒██▄█▓▒ ▒░▓█  ██▓   ▒▓▓▄ ▄██▒▒██░    ░██░
        ░▒▓███▀▒░▒████▓ ▒██▒ ░  ░░▒▓███▀▒   ▒ ▓███▀ ░░██████▒░██░
        ░▒   ▒  ▒▒▓  ▒ ▒▓▒░ ░  ░ ░▒   ▒    ░ ░▒ ▒  ░░ ▒░▓  ░░▓  
        ░   ░  ░ ▒  ▒ ░▒ ░       ░   ░      ░  ▒   ░ ░ ▒  ░ ▒ ░
        ░ ░   ░  ░ ░  ░ ░░       ░ ░   ░    ░          ░ ░    ▒ ░
            ░    ░                   ░    ░ ░          ░  ░ ░  
                ░                          ░                                                                                                                                                              
    `
    )
    log.success(`🎉  Successfully created project ${name}.`)
    log.success('👉  Get started with the following commands:\n')
    log.bash(`cd ${name}`)
    log.bash(`yarn install`)
}

const GDPG_PROMPTS = [{
    name: 'version',
    message: 'Select version',
    type: 'list',
    choices: [{
            name: 'Vue 2 + Javascript + Less',
            value: 'vue2'
        },
        {
            name: 'Vue 3 + Javascript + Less',
            value: 'vue3'
        },
        {
            name: 'Vue 3 + Typescript + Sass + ElementPlus',
            value: 'vue3_ts'
        },
        {
            name: 'Vue 3 + Typescript + Sass + ElementPlus + Vite',
            value: 'vue3_vite'
        },
        {
            name: 'React 17 + Javascript + Less + Antd',
            value: 'react17'
        }
    ]
}]

const downLoadUrl = 'direct:https://github.com/xxx/gdpg-cli/archive/refs/heads/master.zip'

const downLoadFromZip = (dir, name) => {
    download(downLoadUrl, name, {
        map: file => {
            file.path = file.path.replace(`generators/${dir}/`, '')
            return file;
        },
        filter: file => {
            return file.path.indexOf(`generators/${dir}/`) > -1
        }
    }, (err) => {
        if (err) {
            spinner.fail()
            log.error(err)
        } else {
            successInfo(name)
        }
    })
}

const gdpgGenerator = (name) => {
    generator(GDPG_PROMPTS, (answers) => {
        spinner.start()
        downLoadFromZip(answers.version, name)
    })
}

const GIT_PROMPTS = [{
    name: 'version',
    message: 'Enter git address',
    type: 'input',
    name: 'git'
}]

const gitGenerator = (name) => {
    generator(GIT_PROMPTS, (answers) => {
        spinner.start()
        download(`direct:${answers.git.trim()}`, name, {
            clone: true
        }, (err) => {
            if (err) {
                spinner.fail()
                log.error(err)
            } else {
                successInfo(name)
            }
        })
    })
}

const LOCAL_PROMPTS = [{
    name: 'version',
    message: 'Enter local address',
    type: 'input',
    name: 'path'
}]

const localGenerator = (name) => {
    generator(LOCAL_PROMPTS, (answers) => {
        spinner.start()
        fsExtra.copy(answers.path.trim(), `./${name}`, (err) => {
            if (err) {
                spinner.fail()
                log.error(err)
                return
            }
            successInfo(name)
        })
    })
}

module.exports = {
    gdpgGenerator,
    gitGenerator,
    localGenerator
}
```
lib/index.js
```js
#!/usr/bin/env node
const program = require('commander')
const pkg = require('../package.json')
const updateNotifier = require('update-notifier')
const log = require('./log')
const fs = require('fs')
updateNotifier({ pkg }).notify({ isGlobal: true })
const { gdpgGenerator, gitGenerator, localGenerator } = require('./generator')

/**
 * program 命令询问和帮助，如果没有输入任何参数则输出帮助查看命令
 */

program
    .version(pkg.version, '-v, --version')
    .usage('<command> [options]')
    .description('Standard tooling generate dir from templates')

program
    .command('init [name]')
    .description('Create a project')
    .option('-l, --local', 'Create dir from local template')
    .option('-g, --git', 'Create dir from git address')
    .action((name, options) => {
        if (!name) return log.error('Please input your project name')
        // 判断本地目录是否已经存在
        if (fs.existsSync(name)) return log.error('Project name already exist')
        if (options.git) {
            gitGenerator(name)
        } else if (options.local) {
            localGenerator(name)
        } else {
            gdpgGenerator(name)
        }
    })

program.parse(process.argv)

const commandName = program.args.length
if (!commandName) {
    program.help()
}
```
lib/log.js
```js
const chalk = require('chalk')
const logSymbols = require('log-symbols')

module.exports = {
    success: (text) => console.log(logSymbols.success, chalk.green(text)),
    info: (text) => console.log(logSymbols.info, chalk.blue(text)),
    bash: (text) => console.log(chalk.cyan(`$ ${text}`)),
    warning: (text) => console.log(logSymbols.warning, chalk.yellow(text)),
    error: (text) => console.log(logSymbols.error, chalk.red(text))
}
```
### 安装

```js
npm i -g gdpg-cli
# or
yarn global add gdpg-cli
```

### 查看版本

```js
gdpg -v
# or 
gdpg --version
```

### 查看帮助

```js
gdpg -h
# or 
gdpg --help
```

### 1. 从预设模板中拉取生成项目

```js
gdpg init <project-name>
```

### 2. 从git下载模板生成项目
```js
gdpg init -g <project-name>
# or
gdpg init --git <project-name>
```

### 3. 从本地文件夹下载生成项目

```js
gdpg init -l <project-name>
# or
gdpg init --local <project-name>
```