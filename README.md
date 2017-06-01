# vue-webapp-tree

> A Vue.js template for web app.
> 😁主要是为了偷懒，每次懒得重新配了

## Build Setup

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn run dev

# build for production with minification
yarn run build

# build for production and view the bundle analyzer report
yarn run build --report

# run unit tests
yarn run unit

# run e2e tests
yarn run e2e

# run all tests
yarn test
```

## File List

``` bash
.
├── README.md
├── build
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   ├── webpack.prod.conf.js
│   └── webpack.test.conf.js
├── config
│   ├── dev.env.js
│   ├── index.js(里面存在接口代理配置项，用于本地调试线上接口时的代理)
│   ├── prod.env.js
│   └── test.env.js
├── index.html
├── package.json
├── src
│   ├── App.vue
│   ├── assets(公共样式)
│   │   ├── images
│   │   └── sass
│   ├── components(自己的组件)
│   ├── config(业务配置)
│   │   ├── env.example.js
│   │   └── env.js(业务配置环境变量)
│   ├── main.js
│   ├── router(前端路由)
│   │   └── index.js
│   ├── service(业务相关的逻辑)
│   │   ├── fetch.js
│   │   └── getData.js(接口地址配置)
│   ├── store(前端数据共享)
│   │   ├── action.js
│   │   ├── getters.js
│   │   ├── index.js
│   │   ├── mutation-types.js
│   │   └── mutations.js
│   ├── utils(业务无关的工具库)
│   │   ├── changeTitle.js
│   │   ├── fixTool.js
│   │   ├── localstorage.js
│   │   ├── mathExtends.js
│   │   ├── uaTest.js
│   │   └── valid.js
│   └── view(具体的页面)
│       └── login
├── static
│   ├── img
│   │   ├── 114.png
│   │   └── 32.png
│   └── js
├── test
│   ├── e2e
│   │   ├── custom-assertions
│   │   ├── nightwatch.conf.js
│   │   ├── runner.js
│   │   └── specs
│   └── unit
│       ├── index.js
│       ├── karma.conf.js
│       └── specs
└── yarn.lock
```

