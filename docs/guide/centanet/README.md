# 【官网】官网前端-项目简介


### 1.官网移动站
目前共上线26个城市,除香港、澳门、上海三个城市以外,其他官网均由集团维护。<br />**部署域名：**<br />广州：https://m.gz.centanet.com <br />深圳：https://m.sz.centanet.com<br />其他城市：https://wap.centanet.com/tj/(后接城市简拼)

**使用的技术：**

前端框架：Vue全家桶<br />UI库：Muse-UI(基于谷歌Material Design设计标准开发的 UI框架)<br />http库：axios


### 2.官网用户中心
所有城市共用一套(除香港、澳门、上海)<br />**部署****域名：**<br />https://passpoet.centanet.com

**使用的技术：**<br />前端框架：Nuxt.js(基于Vue.js的服务端框架)<br />UI组件：layer<br />http库：axios

### 3.小程序微聊/PC端微聊
提供给经纪人和客户之间在线聊天咨询的软件<br />经纪人小程序端框架：mpvue<br />客户pc端框架：angular.js


### 4.其他工具类
**部署****域名：**<br />https://esf.centanet.com/tools/+模块名称

**包含项目：**<br />房贷计算器、在线委托、用户轨迹、二手房新房VR看房、大湾区活动页、在线签约等子程序



### 5.官网移动站SEO程序
原官网移动站程序改造成nuxt.js框架服务端渲染, 搜索引擎爬虫特征的UA访问时 指向此程序。


### 6.House730官网
类似于大陆地区的安居客、房天下的在线找房平台,仅供香港地区使用。<br />**部署域名：**<br />https://m.house730.com/

**使用的技术：**<br />前端框架：Nuxt.js<br />UI库：Vant（有赞开源的一款基于Vue.js的移动端UI框架）<br />http库：axios
### 
### 7.House730用户中心
提供给用户发布、管理房源、房源收藏、留言,以及账户充值等功能。<br />**部署域名：**<br />https://m.house730.com/my/

**使用的技术：**<br />前端框架：Vue全家桶<br />UI库：Vant（有赞开源的一款基于Vue.js的移动端UI框架）<br />http库：axios


### 8.House730-PMS移动站
提供给外部代理公司使用,用于发布、管理盘源的系统(后期将逐步停止维护,主体迁移至app端)。<br />**部署域名：**<br />https://pms.house730.com/m/

**使用的技术：**<br />前端框架：Vue全家桶<br />UI库：Vant（有赞开源的一款基于Vue.js的移动端UI框架）<br />http库：axios


### 8.House730-PMS-PC站
提供给外部代理公司使用,用于发布、管理盘源的系统。<br />**部署域名：**<br />https://pms.house730.com/

**使用的技术：**<br />前端框架：Vue全家桶<br />UI库：Elemet-UI(饿了么开源的一款基于vue.js的桌面UI框架)<br />http库：axios


### 9.房友圈部分H5页面
针对中小中介提供的房源代理分佣平台

---


## 2.涉及API服务

#### 1.二手房核心服务
进对内访问, 官网二手房服务,包含租房、小区、经纪人等以及其他通用功能（成交等）, 大部分数据源都来自于核心服务提供, 前端人员不直接调用此接口。

#### 2.二手房mobileapi服务
基于二手房核心服务的封装,提供对外访问,功能属于核心服务的子集,部分敏感接口未开放。<br />深圳：[https://apisz.centanet.com/](https://apisz.centanet.com/lion/java/json/reply/)[v6](https://mobileapi.centanet.com/v6/java/json/reply/)[/java/json/reply/](https://apisz.centanet.com/lion/java/json/reply/)<br />其他城市：[https://mobileapi.centanet.com/v6/java/json/reply/](https://mobileapi.centanet.com/v6/java/json/reply/)

#### 3.新房服务
新房相关服务接口<br />深圳：[https://apisz.centanet.com/lion/java/json/reply/](https://apisz.centanet.com/lion/java/json/reply/)<br />其他城市：[https://mobileapi.centanet.com/lion/java/json/reply/](https://mobileapi.centanet.com/lion/java/json/reply/)

#### 4.公共服务（bizcom）
400电话、微聊等相关公共服务<br />全国：[https://mobileapi.centanet.com/bizcom/json/reply/](https://mobileapi.centanet.com/bizcom/json/reply/)

#### 5.用户中心服务（passport）
用户相关服务,例如用户进行房源收藏、预约看房、接收消息通知等<br />全国：[https://mobileapi.centanet.com/passport/v6/json/reply/](https://mobileapi.centanet.com/passport/v6/json/reply/)


---

## 3.服务调用通用规则
**所有请求需在参数里添加cityen 和 platform参数。**<br />cityen：城市简拼,例如"bj"、"sz",便于服务端区分来自哪个城市的业务请求<br />platform：接口调用平台,移动端统一"wap"








