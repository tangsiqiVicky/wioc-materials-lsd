## wioc-materials-lsd
- wioc-materials-lsd基于vue构建开发的组件库，提供一套更优的前端解决方案



## 更新日志


## 开发
> 无法正常预览项目效果时，请先检查是否正常安装依赖，再查看启动服务是否存在报错 使用内部组件库需要重新配置

```bash
# 第一步
npm i -g cnpm --registry=https://registry.npm.taobao.org

# 第二步
cnpm install

# 启动服务
cnpm run dev
```


## 发布
> 构建生成的资源文件保存在wioc-materials-lsd/lib目录下，可通过config/index.js目录文件修改相关配置信息

```gulp打包模式，暂时不用
# 构建生产环境(默认)
npm run build

# 构建测试环境
npm run build --qa

# 构建验收环境
npm run build --uat

# 构建生产环境
npm run build --prod

- 构建生成后，发布需要上传哪些文件？
> ioc-pa-xh-h5/dist目录下：180307（静态资源，由当前日期动态生成文件夹名）、config（配置文件）、index.html

- 构建生成后，如何动态配置CDN静态资源？
> 修改ioc-pa-xh-h5/dist/config/index.js目录文件中window.SITE_CONFIG.cdnUrl = '静态资源cdn地址' + window.SITE_CONFIG.staticFileName

- 构建生成后，如何动态切换新旧版本？
> 修改ioc-pa-xh-h5/dist/config/index.js目录文件中window.SITE_CONFIG.staticFileName = '180307（静态资源文件夹名称）'

# 单独安装视频依赖的包
cnpm install vue-video-player --save
#npm install --save videojs-contrib-hls
cnpm install jquery --save       #安装jquery依赖

```


## Webpack打包发布
``` bash
生产环境输出
npm run prod

开发环境输出
npm run dev
npm start

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

#正式发布
npm run build

#上传组件包

```bash
# 第一步 配置地址
npm config set registry https://repo.wioc.cn/repository/npm-hosted/

# 第二步 登陆账户 输入用户名、密码、邮箱
npm login

# 第三步 上传 需要更新package.json version版本号
npm publish

```

#调试开发
npm run dev

#引用组件库
```bash
# 第一步
npm config set registry https://repo.wioc.cn/repository/npm-public/

# 第二步
npm install

# 启动服务
npm run dev
```
