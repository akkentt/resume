# 中原找房官网(用户中心)  
<br/>

## 基本信息
::: tip 简介
中原官网用户中心 , 响应式站点 ,  除【香港】【澳门】【上海】外 , 所有城市官网用户中心PC/M站均使用此套应用
:::
<br/><br/>

## 对应线上应用

**线上地址：**   
不区分城市  [https://passport.centanet.com/](https://passport.centanet.com/)   
<br/><br/>

## GIT地址
[http://gitlab.centaline.com.cn/centnet-group/centanet/web/passport-webapp](http://gitlab.centaline.com.cn/centnet-group/centanet/web/passport-webapp)  
**开发分支：** 2.0分支  
**线上分支：** master分支
<br/><br/>

## 对接人员
**前端：** 陈圆  
**Passport API：** 白金强、钟金龙   
**二手房服务API：** 白金强、钟金龙   
**新房服务API：** 邹渊  
<br/><br/>


## 线上部署服务器
::: warning
涉及服务器发布的文件,必须107、108 两台服务器同步更新
:::

**依赖环境：** IIS+URL重写模块(需额外安装)  
**IIS应用名：** Passport  
**端口号：** 801  
**程序目录：** D:\webroot\Passport_Vue_2.0  
**服务器IP：**  10.4.18.107  、10.4.18.108
<br/>




## 项目框架
::: tip 注意
注：用户中心早期使用频率较低，在重构该站点时，被作为Nuxt SSR（Vue服务端渲染）的试水项目，实质上此类性质的站点无须考虑SEO，故后续版本迭代 逐步剔除了所有的服务端相关代码，目前虽仍旧使用SSR框架，后续功能迭代时，应和传统SPA应用一致，只编写客户端执行的代码。
:::
**脚手架版本：** @nuxt/cli v2.8.1   
**Nuxt版本：** 2.13.0     
**UI框架：** 部分使用Vant, 其他为原生实现
<br/>




## 项目结构
具体目录结构,以及对应目录-功能模块参考：   
核心模块&文件参考高亮标记
::: vue
centanet-passport-2.0
├─ .editorconfig   --编辑器配置统一
├─ .prettierrc   --代码格式化插件配置
├─ app.html   --入口页模板
├─ assets    --资源文件
│  ├─ css
│  │  ├─ base.css
│  │  ├─ minix.scss
│  │  ├─ myalert.scss
│  │  └─ usercenter.css
│  ├─ images
│  │  ├─ 160X120.png
│  │  ├─ 400phone.png
│  │  ├─ activity.png
│  │  ├─ app.jpg
│  │  ├─ arr-down.png
│  │  ├─ arr-up.png
│  │  ├─ chart.png
│  │  ├─ check.png
│  │  ├─ check_disabled.png
│  │  ├─ check_on.png
│  │  ├─ ...
│  └─ js
│     ├─ `apis.js`  --API相关配置
│     ├─ config.js --城市相关配置
│     ├─ filter.js  --过滤器
│     ├─ `getData.js`   --部分页面调用API封装方法
│     └─ `public.js`  --全局公共方法
├─ cityinfo.js  --所有城市配置文件(暂未使用)
├─ `components`   --通用组件
│  ├─ appraise.vue
│  ├─ call400.vue
│  ├─ call401.vue
│  ├─ care-ershoufang.vue
│  ├─ care-huodong.vue
│  ├─ care-jingjiren.vue
│  ├─ care-xiaoqu.vue
│  ├─ care-xinfang.vue
│  ├─ care-zufang.vue
│  ├─ downApp.vue
│  ├─ entrust_comments.vue
│  ├─ entrust_community_info.vue
│  ├─ entrust_contract.vue
│  ├─ entrust_house_info.vue
│  ├─ entrust_house_price.vue
│  ├─ entrust_improve_exposure.vue
│  ├─ entrust_pricing.vue
│  ├─ entrust_progress.vue
│  ├─ entrust_stop.vue
│  ├─ Foots.vue
│  ├─ Headers.vue
│  ├─ jingJiRenCheck.vue
│  ├─ login-password.vue
│  ├─ LoginFoots.vue
│  ├─ Menu.vue
│  ├─ message-house.vue
│  ├─ message-system.vue
│  ├─ pdf.vue
│  ├─ searchHistoryItem.vue
│  ├─ transactionItem.vue
│  ├─ userinfo-modifypwd.vue
│  └─ userinfo-setpwd.vue
├─ `layouts`   --页面布局组件
│  ├─ default.vue
│  ├─ error.vue
│  ├─ evaluation.vue
│  ├─ login.vue
│  ├─ null.vue
│  └─ README.md
├─ middleware  --中间件(已废弃)
│  ├─ checkUser.js
│  └─ README.md
├─ `nuxt.config.js`  --核心配置文件
├─ package-lock.json
├─ package.json
├─ `pages`    --页面组件
│  ├─ activity.vue
│  ├─ care  --我的关注页面组件
│  │  ├─ ershoufang.vue
│  │  ├─ huodong.vue
│  │  ├─ jingjiren.vue
│  │  ├─ xiaoqu.vue
│  │  ├─ xinfang.vue
│  │  └─ zufang.vue
│  ├─ contract.vue  
│  ├─ entrust.vue
│  ├─ evaluation.vue
│  ├─ findpassword.vue
│  ├─ index.vue
│  ├─ login.vue
│  ├─ loginthird.vue  --第三方登录(已废弃)
│  ├─ msglist.vue
│  ├─ opinion.vue
│  ├─ README.md
│  ├─ reserve.vue
│  ├─ reserved.vue
│  ├─ searchHistory.vue
│  ├─ seehouse.vue
│  ├─ top.vue
│  ├─ transaction.vue
│  └─ userinfo.vue
├─ `plugins`   --公共插件百度统计、表单验证等
│  ├─ baidu_hm.js
│  ├─ vant.js
│  ├─ vee-validate.js
│  ├─ vue-lazyload.js
│  └─ vue-notifications.js
├─ README.md
├─ `static`  --静态文件(不会被编译至项目中)
│  ├─ 1.pdf
│  ├─ base.css
│  ├─ favicon.ico
│  ├─ images
│  │  ├─ 160X120.png
│  │  ├─ 404@2x.png
│  │  ├─ 404@3x.png
│  │  ├─ app.jpg
│  │  ├─ arr-down.png
│  │  ├─ arr-up.png
│  │  ├─ chart.png
│  │  ├─ check.png
│  │  ├─ check_disabled.png
│  │  ├─ ...
│  └─ md5.js
└─ `store`   --Vuex全局状态管理相关
   ├─ action.js
   ├─ care
   │  ├─ action.js
   │  ├─ getters.js
   │  ├─ index.js
   │  └─ mutations.js
   ├─ getters.js
   ├─ index.js
   ├─ module.js
   ├─ mutations.js
   ├─ searchHistory
   │  ├─ action.js
   │  ├─ getters.js
   │  ├─ index.js
   │  └─ mutations.js
   └─ yuyue
      ├─ action.js
      ├─ getters.js
      ├─ index.js
      └─ mutations.js

:::


<br><br>



## 发版流程




### 构建生产包
在程序目录执行cmd命令`npm run build` 构建生产包,输出示例,出现打包文件明细 ,且无错误输出 则构建成功
构建文件路径： `项目根目录/dist/`
```shell
E:\git-new\centanet-passport-2.0>npm run build

> centanet-passport@1.0.0 build E:\git-new\centanet-passport-2.0
> nuxt build
 WARN  vendor has been deprecated due to webpack4 optimization                                                17:16:34

i Production build                                                                                            17:16:36
i Bundling only for client side                                                                               17:16:36
i Target: static                                                                                              17:16:36
√ Builder initialized                                                                                         17:16:36
√ Nuxt files generated                                                                                        17:16:36

 WARN  Browserslist: caniuse-lite is outdated. Please run:                                                    17:16:36
npx browserslist@latest --update-db


√ Client
  Compiled successfully in 24.10s
Hash: 8e751d194427db07aa2f
Version: webpack 4.43.0
Time: 24104ms
Built at: 2021-01-13 17:17:02
                                  Asset      Size  Chunks                                Chunk Names
         ../server/client.manifest.json  48.5 KiB          [emitted]
         09a0b65396d5a2c94232.worker.js   825 KiB          [emitted] [immutable]  [big]
                               LICENSES  1.74 KiB          [emitted]
                         app.c00e03d.js   148 KiB       1  [emitted] [immutable]         app
                 commons/app.1e7b06f.js   179 KiB       2  [emitted] [immutable]         commons/app
commons/contract~transaction.70d1180.js  21.8 KiB       0  [emitted] [immutable]         commons/contract~transaction
                img/160X120.22d7ba3.png   123 KiB          [emitted]
               img/400phone.3ab6466.png  15.9 KiB          [emitted]
               img/activity.28fedb7.png    35 KiB          [emitted]
                    img/app.b8b7887.jpg  8.48 KiB          [emitted]
               img/closebtn.dbae414.png   1.5 KiB          [emitted]
         img/defaultUserImg.1fef962.jpg  3.83 KiB          [emitted]
               img/download.fbf5694.png  4.12 KiB          [emitted]
                   img/icon.551539f.png  11.2 KiB          [emitted]
   img/jignjiren-zhuangjian.b314549.png  2.77 KiB          [emitted]
                   img/logo.36d7219.png  17.4 KiB          [emitted]
               img/min-logo.a948274.png   5.3 KiB          [emitted]
                 img/msg_mu.c65ce17.png  64.9 KiB          [emitted]
                   img/pcbg.340aef4.jpg   117 KiB          [emitted]
                img/phonebg.15b9d1d.jpg  96.4 KiB          [emitted]
                 img/police.d0289dc.png  18.8 KiB          [emitted]
                     img/qq.fd6ff54.png  1.38 KiB          [emitted]
               img/seehouse.d6028d0.png  31.8 KiB          [emitted]
                 img/spaceC.da85bbe.png  30.9 KiB          [emitted]
                  img/weibo.72b7a9a.png  1.84 KiB          [emitted]
                  img/weixi.f25ef5c.png  1.76 KiB          [emitted]
              pages/activity.ca3113c.js     6 KiB       3  [emitted] [immutable]         pages/activity
       pages/care/ershoufang.df18b6f.js  7.93 KiB       4  [emitted] [immutable]         pages/care/ershoufang
          pages/care/huodong.bd6a88f.js   7.6 KiB       5  [emitted] [immutable]         pages/care/huodong
        pages/care/jingjiren.ac15c99.js  17.9 KiB       6  [emitted] [immutable]         pages/care/jingjiren
           pages/care/xiaoqu.85fa99d.js  8.41 KiB       7  [emitted] [immutable]         pages/care/xiaoqu
          pages/care/xinfang.8e55c53.js  7.72 KiB       8  [emitted] [immutable]         pages/care/xinfang
           pages/care/zufang.7be4be7.js  7.61 KiB       9  [emitted] [immutable]         pages/care/zufang
              pages/contract.635006a.js  7.33 KiB      10  [emitted] [immutable]         pages/contract
               pages/entrust.d5688dc.js   116 KiB      11  [emitted] [immutable]         pages/entrust
            pages/evaluation.85e457e.js  16.1 KiB      12  [emitted] [immutable]         pages/evaluation
          pages/findpassword.d5db42c.js  7.81 KiB      13  [emitted] [immutable]         pages/findpassword
                 pages/index.1c24876.js  5.94 KiB      14  [emitted] [immutable]         pages/index
                 pages/login.221bc8a.js  12.8 KiB      15  [emitted] [immutable]         pages/login
            pages/loginthird.d7b818d.js  2.64 KiB      16  [emitted] [immutable]         pages/loginthird
               pages/msglist.9f8d82e.js  32.6 KiB      17  [emitted] [immutable]         pages/msglist
               pages/opinion.8151c67.js  3.74 KiB      18  [emitted] [immutable]         pages/opinion
               pages/reserve.eaec546.js  23.6 KiB      19  [emitted] [immutable]         pages/reserve
              pages/reserved.9da246f.js   8.8 KiB      20  [emitted] [immutable]         pages/reserved
         pages/searchHistory.99f85ad.js  7.24 KiB      21  [emitted] [immutable]         pages/searchHistory
              pages/seehouse.fba0cf5.js  15.2 KiB      22  [emitted] [immutable]         pages/seehouse
                   pages/top.33ac64e.js  4.64 KiB      23  [emitted] [immutable]         pages/top
           pages/transaction.99255bf.js  31.3 KiB      24  [emitted] [immutable]         pages/transaction
              pages/userinfo.29dd21d.js  17.8 KiB      25  [emitted] [immutable]         pages/userinfo
                     runtime.00ded41.js  3.18 KiB      26  [emitted] [immutable]         runtime
                 vendors~app.73ecad6.js  97.7 KiB      27  [emitted] [immutable]         vendors~app
      vendors~pages/contract.26e386d.js   479 KiB      28  [emitted] [immutable]  [big]  vendors~pages/contract
   vendors~pages/transaction.e99f0a0.js  87.5 KiB      29  [emitted] [immutable]         vendors~pages/transaction
 + 1 hidden asset
Entrypoint app = runtime.00ded41.js commons/app.1e7b06f.js vendors~app.73ecad6.js app.c00e03d.js  
```





---

### 生产环境部署
将构建好的文件，路径：`项目根目录/dist`下的所有文件 拷贝至107、108服务器的的`D:\webroot\Passport_Vue_2.0`文件夹即可,自动生效




