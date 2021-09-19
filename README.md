# vue-app3

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### vue-cli 4
- 1.要全局安装：yarn global add @vue/cli
- 2.创建一个新项目：vue create projectName(里边可自选配置)
- 2.1: 通过ui界面化来创建一个项目：vue ui
- 与vue-cli 3 没有很大的区别
- 没有vue.config.js要自己创建
  - vue.config.js 是一个可选的配置文件，如果项目的 (和 package.json 同级的) 根目录中存在这个文件，那么它会被 @vue/cli-service 自动加载。
  - 你也可以使用 package.json 中的 vue 字段，但是注意这种写法需要你严格遵照 JSON 的格式来写
- 默认有babel配置，
