# 中原找房官网(移动站)  
<br/>

## 基本信息
::: tip 简介
中原官网移动端站点,面向外网客户, 除【香港】【澳门】【上海】外,所有城市官网移动站均使用此套应用
:::
<br/><br/>

### 对应线上应用
---
**深圳：**   <https://m.sz.centanet.com/>   
**广州：**   <https://m.gz.centanet.com/>   
**深圳海外：**  <https://m.sz.centanet.com/szworld/>    
**天津：**   <https://wap.centanet.com/tj/>   
**北京：**   <https://wap.centanet.com/bj/>  
除深圳、 广州、 深圳海外以m.xx.centanet.com格式域名外， 其他城市URL规则均与天津、成都等相同 。 
另外，北京新房将跟进上线独立部署版本，暂定URL：<https://wap.centanet.com/bjxf/>

::: warning 注意
在配置时，所有城市简拼均为城市首字母，但也有部分例外，具体如下：  
哈尔滨 简称 【hrb】  
赣州 简称【ganzhou】  
杭州 简称【zj】  
深圳海外 简称【szworld】  
北京新房 简称【bjxf】 
:::
<br/><br/>

### GIT地址
---
[http://gitlab.centaline.com.cn/centnet-group/centanet/web/webapp/](http://gitlab.centaline.com.cn/centnet-group/centanet/web/webapp/)  
**开发分支：** 3.0分支  
**线上分支：** master分支  
<br/><br/>

### 对接人员
---
**后端API：** 白金强(二手房)、钟金龙(二手房)、邹渊(新房)、王传林(passport)  
**前端：** 陈圆(项目主负责人)、王冰华、何宇菲
<br/><br/>


### 测试环境
---
**服务器IP：** 10.58.8.33  
**依赖环境：** IIS+URL重写模块(需额外安装)  
**IIS应用名：** vue_wap开头对应的三个应用   
**端口号：**   集团：5566、 广州：5567、  深圳：5568   
**程序目录：** D:\WebRoot\vue  
<br/>
<br/>

### 线上部署服务器
---
#### 【集团】+【广州】城市
::: warning
涉及服务器发布的文件,必须77、 78、 161三台服务器同步更新
:::

**依赖环境：** IIS+URL重写模块(需额外安装)  
**IIS应用名：** wap.centanet.com  
**端口号：** 83  
**程序目录：** D:\waproot\Vue_Mobile  
**服务器IP：**
* 10.4.18.77  
* 10.4.18.78  
* 10.4.18.161  
<br/>

#### 【深圳】城市
::: warning
涉及服务器发布的文件,必须30、31两台服务器同步更新
:::

**依赖环境：** IIS+URL重写模块(需额外安装)  
**IIS应用名：** m.centanet.com  
**端口号：** 8077   
**程序目录：** D:\webroot\Vue_mobile   
**服务器IP：**  
* 10.6.252.30
* 10.6.252.31  
<br/>

### 静态资源服务器
---
wap站整站除(index.html),所有资源均放置阿里云OSS   

**测试环境路径：** `oss://static-centanet-com/wap/main-test/`   
**生产环境路径：** `oss://static-centanet-com/wap/main/`  

具体OSS登录授权账号 见附件  
<br/>




### 项目框架
---
::: warning
注：后续版本迭代将陆续废除Muse-UI ,全部切换为Vant  故日常开发中,避免再继续使用Muse-UI
:::
**脚手架版本：** vue-cli3.0  
**Vue版本：** vue 2.6  
**UI设计标准：** Material Design  
**UI框架：** Muse-UI、Vant  
<br/>




## 项目结构

具体目录结构,以及对应目录-功能模块参考：
核心模块&文件参考高亮标记
::: vue 
centanet-webapp-3.0     
├─ .babelrc       ---babel编译配置
├─ .eslintrc.js   ---ESlint语法检查配置
├─ .prettierrc    ---代码格式化 美化配置
├─ common   ---公共文件夹
│  ├─ css   ---公共文件夹-css
│  │  ├─ base.css
│  │  ├─ base.min.css
│  │  ├─ ...
│  ├─ font   ---公共文件夹-字体
│  │  ├─ icon.css
│  │  ├─ ...
│  ├─ img    ---公共文件夹-图片
│  │  ├─ avatar.jpg
│  │  ├─ blank-dui.png
│  │  ├─ blank-er.png
│  │  ├─ ....
│  └─ js    ---公共文件夹-公共js、过滤器、插件等等
│     ├─ filter.js   ---vue过滤器
│     ├─ getMapData.js
│     ├─ promise.min.js   ---promise库 解决部分低端安卓机不支持promise的问题
│     ├─ `public.js`  ---核心公共js文件 大多数公共逻辑在此文件
│     ├─ slide.js  ---轮播图插件
│     ├─ svg-chart.js  ---图表插件
│     └─ _conf.js
├─ package-lock.json 
├─ package.json
├─ `public`  ---开放目录 放置打包后生成的文件
│  ├─ config.js
│  ├─ favicon.ico
│  ├─ index.html
│  └─ `template`  ---存放各个城市index.html模板文件
├─ README.md
├─ `src` ---wap站各个模块核心代码
│  ├─ App.vue
│  ├─ assets  ---资源文件
│  │  ├─ agency_header.png
│  │  ├─ blank-er.png
│  │  ├─ chat_icon.png
│  │  ├─ dingweibackground.png
│  │  ├─ ditie.png
│  │  ├─ ...
│  │  ├─ xf-detail  --深圳新房改版资源文件
│  │  │  ├─ activity-bgc.png
│  │  │  ├─ ans-bc.png
│  │  │  ├─ calc-icon.png
│  │  │  ├─ car-bgc.png
│  │  │  ├─ ...
│  │  ├─ xf_list.png
│  │  ├─ xuexiao.png
│  │  ├─ yinhang.png
│  │  └─ yiyuan.png
│  ├─ `components`  --vue组件
│  │  ├─ `filter`   --房源筛选相关组件
│  │  │  ├─ ershoufang.vue
│  │  │  ├─ xiaoqu.vue
│  │  │  ├─ xinfang.vue
│  │  │  └─ xinfang_list.vue
│  │  ├─ `house`   --户型详情组件
│  │  │  └─ houseTypeDetail.vue
│  │  ├─ `list`    --房源列表相关组件(经纪人店铺页等)
│  │  │  ├─ ershoufang.vue
│  │  │  ├─ xinfang.vue
│  │  │  ├─ xuexiao-xf.vue
│  │  │  └─ zufang.vue
│  │  ├─ `map`    --地图找房相关组件
│  │  │  ├─ mapListEsf.vue
│  │  │  ├─ mapListXf.vue
│  │  │  └─ mapListZf.vue
│  │  ├─ `tools `  --其他页面通用组件
│  │  │  ├─ attentionModel.vue
│  │  │  ├─ bottom-btn.vue
│  │  │  ├─ call400.vue
│  │  │  ├─ chart.vue
│  │  │  ├─ chart_trend.vue
│  │  │  ├─ chatModal.vue
│  │  │  ├─ cm-broker.vue
│  │  │  ├─ contact.vue
│  │  │  ├─ contact_xinfang.vue
│  │  │  ├─ copyright copy.vue
│  │  │  ├─ copyright.vue
│  │  │  ├─ doughnut.vue
│  │  │  ├─ downApp.vue
│  │  │  ├─ downAppDetail.vue
│  │  │  ├─ headers.vue
│  │  │  ├─ hotdata.vue
│  │  │  ├─ interest.vue
│  │  │  ├─ slide.vue
│  │  │  ├─ slideact.vue
│  │  │  ├─ slide_big.vue
│  │  │  ├─ slide_big_xinfang.vue
│  │  │  ├─ slide_video.vue
│  │  │  └─ toast.vue
│  │  └─ trading.vue
│  ├─ `main.js`     ---项目启动入口js文件
│  ├─ `router.js`   ---vue router声明文件
│  └─ `views`     ---页面级别组件
│     ├─ `details`  ---详情页相关页面
│     │  ├─ ershoufang.vue
│     │  ├─ guwen.vue
│     │  ├─ huxing.vue
│     │  ├─ jingjiren.vue
│     │  ├─ mendian.vue
│     │  ├─ prop-ablum.vue
│     │  ├─ xiaoqu.vue
│     │  ├─ xinfang copy.vue
│     │  ├─ xinfang.vue
│     │  ├─ xuexiao-esf.vue
│     │  ├─ xuexiao-xf.vue
│     │  ├─ zixun.vue
│     │  └─ zufang.vue
│     ├─ index.vue --wap官网主页
│     ├─ `list`  --列表相关页面
│     │  ├─ compared.vue  --房源对比
│     │  ├─ contrast.vue
│     │  ├─ ershoufang.vue
│     │  ├─ jingjiren.vue
│     │  ├─ mendian.vue
│     │  ├─ ques-ans.vue
│     │  ├─ xiaoqu.vue
│     │  ├─ xinfang.vue
│     │  ├─ xuexiao.vue  --学校找房 暂停维护状态
│     │  ├─ zixun copy.vue
│     │  ├─ zixun.vue
│     │  └─ zufang.vue
│     ├─ search.vue --房源搜索页
│     └─ `tools` --通用工具类页面(成交、走势、街景、活动等)
│        ├─ activityApply.vue
│        ├─ activityIndex.vue
│        ├─ agentCard.vue
│        ├─ agreement.vue
│        ├─ call400info.vue
│        ├─ contrast.vue
│        ├─ estatevideo.vue
│        ├─ guide.vue
│        ├─ guideComment.vue
│        ├─ guide_xinfang.vue
│        ├─ map.baidu.vue
│        ├─ mapSearch.vue  --地图找房
│        ├─ more.vue
│        ├─ panoramic.vue
│        ├─ post400.vue
│        ├─ salesold.vue
│        ├─ seehouserecord.vue
│        ├─ sz_xiaoqu_details.vue
│        ├─ sz_xiaoqu_esf.vue
│        ├─ vista.vue
│        ├─ xfDeal.vue
│        ├─ xiaoqu_esf-zf.vue
│        └─ xinfang_more.vue
├─ `vue.config.js` --vue配置文件
└─ yarn.lock
:::



---

## 新增城市配置

**新增城市配置文件**  
路径：`项目根目录/public/template/`下新增模板文件`index.html`,可从改目录下其他城市拷贝  
并修改`index.html`文件中的配置,只要为修改`windows.configs`配置, 参考如下：  
```html
<!DOCTYPE html><html lang=en><head><title>手机中原地产网</title><meta charset=utf-8><meta name=viewport content="initial-scale=1,user-scalable=no"><meta content=二手房信息,二手房,二手房价格,二手房出售,中原房产网 name=Keywords><meta content=中原房产网为您提供最新最真实的楼盘信息,以及权威的房价走势分析、最全面的附近新楼盘,可以让您随时随地了解房价,是最好的专业房产网站,买房租房可联系中原。 name=Description><meta http-equiv=x-dns-prefetch-control content=on><link rel=manifest href=//static.centanet.com/vue/manifest.json><link href=//at.alicdn.com/t/font_1599043_lbpq3bs9uq.css rel=stylesheet type=text/css><script src=//static.centanet.com/wap/js/vue.min.js></script></script><link rel=dns-prefetch href=//pic.centanet.com><link rel=dns-prefetch href=//static.centanet.com><link rel=dns-prefetch href=//passport.centanet.com><link rel=dns-prefetch href=//mobileapi.centanet.com><link rel=stylesheet href=//static.centanet.com/wap/css/muse-ui.css><link rel=dns-prefetch href=//img0bj.centainfo.com><script>

   window.configs = {
      CityName: '北京',  //城市中文名
      Code: '010',  //城市code
      City: 'bj',  //城市简拼
      py: 'beijing', //城市全拼
      webp: '', //webp默认配置(通常无须配置)
      chat:true,//是否开启微聊
      openwebp: true, //是否启用webp
      onlyxf: false, //是否为纯新房城市
      wxAppId: 'wx8cd61b2bd7bc7020', //配置微信分享相关appid
      wxApi: 'https://mobileapi.centanet.com/v6/java/json/reply/WeChatJsApiTicket', //微信分享api
      wxImg: 'https://wap.centanet.com/images/wxshare.png',//微信分享默认图
    };


if (location.href.indexOf("bd_vid") > -1) {
    sessionStorage.setItem("bd_track_vidurl", location.href);var track_id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
          v = c == 'x' ? r : r & 0x3 | 0x8;return v.toString(16);
    });sessionStorage.setItem("bd_track_userid", track_id);
  };
</script><style>html,body{width:100%;height:100%;margin:0;padding:0}.loading{margin:0;padding:0;width:100%;height:100%;position:absolute;display:flex;z-index:999999;text-align:center;justify-content:center;align-items:center}.spinner{width:150px;text-align:center;margin:auto;margin-top:20px}.spinner>div{width:20px;height:20px;background-color:#ff3050;border-radius:100%;display:inline-block;-webkit-animation:bouncedelay 1.4s infinite ease-in-out;animation:bouncedelay 1.4s infinite ease-in-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}.spinner .bounce1{-webkit-animation-delay:-0.32s;animation-delay:-0.32s}.spinner .bounce2{-webkit-animation-delay:-0.16s;animation-delay:-0.16s}@-webkit-keyframes bouncedelay{0%,80%,100%{-webkit-transform:scale(0.0)}40%{-webkit-transform:scale(1.0)}}@keyframes bouncedelay{0%,80%,100%{transform:scale(0.0);-webkit-transform:scale(0.0)}40%{transform:scale(1.0);-webkit-transform:scale(1.0)}}.slogn{width:40%;margin:auto;max-width:230px}.loadbox{width:100%}</style><link href=//static.centanet.com/wap/main/css/app.css rel=preload as=style><link href=//static.centanet.com/wap/main/js/app.js rel=preload as=script><link href=//static.centanet.com/wap/main/js/chunk-vendors.js rel=preload as=script><link href=//static.centanet.com/wap/main/css/app.css rel=stylesheet></head><body><div class=loading><div class=loadbox><img class=slogn src="data:image/png;base64,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" alt=""><div class=spinner><div class=bounce1></div><div class=bounce2></div><div class=bounce3></div></div></div></div><div id=app></div><script src=//static.centanet.com/wap/main/js/chunk-vendors.js></script><script src=//static.centanet.com/wap/main/js/app.js></script></body></html>
```

<br><br>

## 发布测试环境流程


### 构建测试包
::: tip 提示
整站所有静态资源、JS逻辑文件均托管至OSS上，因此日常迭代发布测试环境，直接将构建好的测试包上传至OSS上即可，无须登录10.58.8.33服务器，若涉及修改配置和新城市部署，则需要登录服务器上操作
:::
在程序目录执行cmd命令`npm run test` 构建生产包,输出示例,出现打包文件明细 ,且无错误输出 则构建成功
构建文件路径： `项目根目录/dist/test/``
```shell
E:\git-new\centanet-webapp-3.1>npm run test

> centanet@0.1.0 prd E:\git-new\centanet-webapp-3.1
> cross-env VUE_APP_TYPE=prd  vue-cli-service build

当前构建环境： prd

File                                      Size             Gzipped
  fei\js\jquery-1.8.3.min.js
  dist\prd\js\chunk-core.js                 602.50 KiB       161.15 KiB
  dist\prd\js\chunk-vendors.js              351.80 KiB       102.29 KiB
  dist\prd\js\chunk-common.js               324.36 KiB       100.53 KiB
  dist\prd\js\chunk-common~chunk-core.js    208.07 KiB       61.02 KiB
  dist\prd\js\app.js                        56.35 KiB        15.15 KiB
  dist\prd\js\chunk-ab315798.js             46.12 KiB        26.73 KiB
  dist\prd\js\chunk-c95dd0f6.js             20.75 KiB        6.77 KiB
  dist\prd\js\chunk-dc4ed7f2.js             6.44 KiB         4.13 KiB
  dist\prd\config.js                        5.74 KiB         1.25 KiB
  dist\prd\js\chunk-499e7cc5.js             4.08 KiB         1.76 KiB
  dist\prd\css\chunk-core.css               265.81 KiB       49.68 KiB
  dist\prd\css\chunk-common.css             177.83 KiB       44.42 KiB
  dist\prd\css\chunk-vendors.css            151.08 KiB       23.74 KiB
  dist\prd\css\app.css                      29.70 KiB        6.48 KiB
  dist\prd\css\chunk-c95dd0f6.css           5.14 KiB         1.25 KiB
  dist\prd\css\chunk-dc4ed7f2.css           1.50 KiB         0.58 KiB
  dist\prd\css\chunk-499e7cc5.css           1.43 KiB         0.47 KiB

  Images and other types of assets omitted.

 DONE  Build complete. The dist\prd directory is ready to be deployed.
 INFO  Check out deployment instructions at https://cli.vuejs.org/guide/deployment.html
```
---

<br><br>


### 测试环境发布&部署
---
基本操作部分和线上发布一致，服务器地址和配置有部分差异，具体如下：

**测试服务器IP：** 10.58.8.33  
**静态文件上传OSS路径：** `oss://static-centanet-com/wap/main-test/`   
**项目路径：** `D:\WebRoot\vue`  
::: warning 注意
测试环境新增城市时，需要手动将该城市模板文件index.html中的/main/替换为/main-test/，保证访问的静态文件为对应的测试环境OSS路径
:::

<br><br>

## 发布生产环境流程


### 构建生产包
---
::: tip 提示
整站所有静态资源、JS逻辑文件均托管至OSS上，因此日常迭代发布生产环境，直接将构建好的生产包上传至OSS上即可，无须登录10.4.18.xx服务器，若涉及修改配置和新城市部署，则需要登录服务器上操作
:::

在程序目录执行cmd命令`npm run prd` 构建生产包,输出示例,出现打包文件明细 ,且无错误输出 则构建成功
构建文件路径： `项目根目录/dist/prd/`**`
```shell
E:\git-new\centanet-webapp-3.1>npm run  prd

> centanet@0.1.0 prd E:\git-new\centanet-webapp-3.1
> cross-env VUE_APP_TYPE=prd  vue-cli-service build

当前构建环境： prd

File                                      Size             Gzipped
  fei\js\jquery-1.8.3.min.js
  dist\prd\js\chunk-core.js                 602.50 KiB       161.15 KiB
  dist\prd\js\chunk-vendors.js              351.80 KiB       102.29 KiB
  dist\prd\js\chunk-common.js               324.36 KiB       100.53 KiB
  dist\prd\js\chunk-common~chunk-core.js    208.07 KiB       61.02 KiB
  dist\prd\js\app.js                        56.35 KiB        15.15 KiB
  dist\prd\js\chunk-ab315798.js             46.12 KiB        26.73 KiB
  dist\prd\js\chunk-c95dd0f6.js             20.75 KiB        6.77 KiB
  dist\prd\js\chunk-dc4ed7f2.js             6.44 KiB         4.13 KiB
  dist\prd\config.js                        5.74 KiB         1.25 KiB
  dist\prd\js\chunk-499e7cc5.js             4.08 KiB         1.76 KiB
  dist\prd\css\chunk-core.css               265.81 KiB       49.68 KiB
  dist\prd\css\chunk-common.css             177.83 KiB       44.42 KiB
  dist\prd\css\chunk-vendors.css            151.08 KiB       23.74 KiB
  dist\prd\css\app.css                      29.70 KiB        6.48 KiB
  dist\prd\css\chunk-c95dd0f6.css           5.14 KiB         1.25 KiB
  dist\prd\css\chunk-dc4ed7f2.css           1.50 KiB         0.58 KiB
  dist\prd\css\chunk-499e7cc5.css           1.43 KiB         0.47 KiB

  Images and other types of assets omitted.

 DONE  Build complete. The dist\prd directory is ready to be deployed.
 INFO  Check out deployment instructions at https://cli.vuejs.org/guide/deployment.html
```




<br><br>



### 针对已上线城市部署
---
(日常迭代维护发版时,使用此方式)  
**1.更新静态文件至阿里云OSS**  
除`index.html`和`web.config`文件以外,其他所有文件均托管至阿里云OSS, 只需将上方打包好的文件拷贝至OSS以下目录即可。  
将  `项目根目录/dist/prd/`  文件夹下的 `css、img、js` 三个目录 拷贝至 阿里云  `oss://house730-static/m/main/` 目录下  




**2.更新CDN（防止静态文件缓存）**  
阿里云CDN管理后台地址：[https://cdn.console.aliyun.com/overview](https://cdn.console.aliyun.com/overview)  (账号密码向PM索取),
登录后按一下操作刷新CDN  
`刷新预热`=>`刷新缓存`=>刷新类型选择 `[目录]`=> URL输入[https://static.centanet.com/wap/main/](https://static.centanet.com/wap/main/) 提交即可  
一般会立即生效, 重新打开官网,清除本地缓存并验证发布的内容是否生效。   

<a data-fancybox title="" href="/assets/oss.png">![](/assets/oss.png)</a>





<br><br>




### 针对新城市开通上线
---
(旧城市迁移新服务器时也使用此方式)
::: tip
因官网Vue项目均使用history模式, 必须配置路由重写功能才能访问。服务器上首次部署此类应用, 需做URL重写模块相关的配置,具具体操作最如下：
:::

**1.安装微软官方提供的IIS URL Write模块**  
下载地址：[https://www.iis.net/downloads/microsoft/url-rewrite](https://www.iis.net/downloads/microsoft/url-rewrite)
<br/><br/>


**2.创建对应城市文件夹,目录名称一般以城市简拼**  
例如：`D:\waproot\Vue_Mobile\bj`
<br/><br/>

**3.拷贝创建好的index.htm模板文件值对应城市文件夹**  
将  `项目根目录/public/template/bj/index.html` 文件拷贝至
服务器的  `D:\waproot\Vue_Mobile\bj`  文件夹
<br/><br/>

**4.创建web.config配置文件,配置以下内容,放入对应城市文件夹**  
由于商铺写字楼应用也部署该应用下,需要在规则里排除商铺和写字楼
```csharp
<match url="^((?!gongshangpu|xiezilou).)*$" />
```
设置规则应用目录,即新增的城市对应的路径,例如北京做如下配置：
```csharp
<action type="Rewrite" url="/bj/" />
```


完整配置如下：
```csharp {7,12}
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="Handle History Mode and custom 404/500" stopProcessing="true">
            <match url="^((?!gongshangpu|xiezilou).)*$" />
            <conditions logicalGrouping="MatchAll">
                        <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
                        <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
            </conditions>
          <action type="Rewrite" url="/bj/" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>
```
::: tip
完成以上操作后,剩余步骤与【已上线城市部署】一致。
:::

