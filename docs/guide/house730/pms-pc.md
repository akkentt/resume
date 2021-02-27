# HOUSE730 PMS PC 站点

## 基本信息

::: tip 简介
HOUSE730 管理后台
提供给香港代理公司以及入驻了中原的企业(中原、利嘉阁)使用
本项目使用繁体字
主要功能：管理员工、组别、分行以及发布、管理楼盘、购买金币等功能

:::
<br/>

## 线上地址

**线上地址：** <http://uatpms.house730.com.cn>  
**uat 地址：** <http://uatpms.house730.com.cn>  
<br/>

## GIT 地址

<http://gitlab.centaline.com.cn/centnet-group/house730/web/pms-website>
<br/>
<br/>
**个人分支：** dev-名字缩写分支
<br/>
**uat 分支：** 由个人提交到 dev 分支,由同事帮更新到 uat 环境
<br/>
**线上分支：** master 分支

## 接口地址

<http://uatpmsapi.house730.com.cn/swagger/index.html>
<br/>
**接口对接同事：** 赵闹闹

## 产品原型以及 UI 地址

<https://svn.centaline.com.cn/svn/house730/pms/PMS_WEB/>
<br/>
**接口对接同事：** 侯振峰

## 项目结构

具体目录结构,以及对应目录-功能模块参考：

::: vue
pms-website
├─ .browserslistrc
├─ .gitignore
├─ .prettierrc
├─ README.md
├─ babel.config.js
│ ├─ index
├─ common ---公共文件夹
│ ├─ css ---公共文件夹 css
│ │ └─ common.css
│ ├─ js ---公共文件夹-公共 js、过滤器、插件等等
│ │ ├─ \_conf.js ---webpack 环境变量
│ │ └─ filter.js ---时间过滤器
│ └─ `public.js` ---核心文件 (公共方法、接口定义)
├─ iis
│ └─ web.config
├─ package-lock.json ---包版本文件
├─ package.json ---包描述文件
├─ public
│ ├─ favicon.ico
│ └─ index.html
├─ `src` --- 源码
│ ├─ App.vue ---根组件
│ ├─ assets ---图片资源
│ │ ├─ Logo2.svg
│ │ ├─ Logowhite.svg
│ │ ├─ PMS-bg.jpg
│ │ ├─ QRCodeLogo.png
│ │ ├─ app-store-badge-us-black.png
│ │ ├─ app-ui.png
│ │ ├─ chinabank.jpg
│ │ ├─ default-avatar.svg
│ │ ├─ diamond-icon.svg
│ │ ├─ gold-icon.svg
│ │ ├─ google-play-badge-us.png
│ │ ├─ hangsengbank.jpg
│ │ ├─ house-bg.png
│ │ ├─ hsbc_logo.png
│ │ ├─ icon.png
│ │ ├─ login-bgc.jpg
│ │ ├─ logo.png
│ │ ├─ logo.svg
│ │ ├─ none_img.png
│ │ ├─ pms730-logo.png
│ │ ├─ star.png
│ │ └─ user-default.png
│ ├─ components
│ │ ├─ AvatarCropper
│ │ │ └─ index.vue
│ │ ├─ OwnInput
│ │ │ └─ index.vue
│ │ ├─ Pagination
│ │ │ └─ index.vue
│ │ ├─ Progress
│ │ │ └─ Progress.vue
│ │ ├─ menu.vue
│ │ └─ selectImg.vue
│ ├─ `main.js` ---入口文件
│ ├─ router ---路由配置
│ │ └─ index.js
│ ├─ store ---vuex
│ │ └─ index.js
│ ├─ utils
│ │ └─ scroll-to.js
│ └─ views
│ ├─ Home.vue ---主页
│ ├─ Login.vue ---登录页
│ ├─ SelectRole.vue ---选择登录角色
│ ├─ app_download ---app 下载
│ │ ├─ QRCodeDownload.vue ---扫二维码下载
│ │ └─ index.vue
│ ├─ charges ---帮助中心-收费标准
│ │ └─ index.vue
│ ├─ coin ---金币管理-金币管理
│ │ ├─ components
│ │ │ ├─ asideBar.vue
│ │ │ └─ headerLink.vue
│ │ ├─ index.vue
│ │ ├─ manage
│ │ │ ├─ organization.vue
│ │ │ └─ personal.vue
│ │ ├─ mixins
│ │ │ ├─ calcAsideHeight.js
│ │ │ └─ index.js
│ │ ├─ orderDetail.vue
│ │ ├─ orderPay.vue
│ │ ├─ payment.vue
│ │ ├─ record
│ │ │ ├─ detail.vue
│ │ │ ├─ organization.vue
│ │ │ └─ personal.vue
│ │ └─ record.vue
│ ├─ company ---业务设置-公司资料
│ │ └─ index.vue
│ ├─ department ---业务设置-分行管理
│ │ ├─ addDepartment.vue
│ │ └─ index.vue
│ ├─ help_center ---帮助中心-功能介绍
│ │ └─ features.vue
│ ├─ homepage ---首页
│ │ ├─ contentinfo_item
│ │ │ └─ index.vue
│ │ ├─ index.vue
│ │ ├─ menu_card
│ │ │ └─ index.vue
│ │ └─ property_info
│ │ └─ index.vue
│ ├─ journal ---业务设置-操作日志
│ │ └─ index.vue
│ ├─ message ---消息中心
│ │ └─ index.vue
│ ├─ order ---订单管理-订单管理
│ │ └─ index.vue
│ ├─ org_manage ---业务设置-组织管理
│ │ ├─ components
│ │ │ ├─ asideBar.vue
│ │ │ └─ icon-svg.vue
│ │ ├─ create.vue
│ │ ├─ index.vue
│ │ └─ update.vue
│ ├─ personal-center ---修改密码
│ │ ├─ change-password
│ │ │ └─ index.vue
│ │ └─ index.vue
│ ├─ `property` ---楼盘管理
│ │ ├─ agent.vue ---楼盘代理人
│ │ ├─ agentProperty.vue ---代理楼盘列表
│ │ ├─ draftbox.vue ---草稿箱
│ │ ├─ index.vue ---楼盘管理首页
│ │ ├─ messages.vue ---留言管理
│ │ └─ `post` --- 刊登楼盘
│ │ ├─ index.less ---样式
│ │ ├─ index.vue ---html 结构
│ │ └─ postCore.js ---js 逻辑
│ ├─ role ---业务设置角色
│ │ ├─ add-or-edit.vue ---添加角色
│ │ └─ index.vue ---權限管理
│ ├─ setting
│ │ └─ index.vue
│ ├─ staffing --- 业务设置-员工管理
│ │ ├─ components
│ │ │ └─ detail.vue
│ │ ├─ create.vue ---新增员工
│ │ ├─ edit.vue ---编辑员工
│ │ ├─ index.vue ---员工管理首页
│ │ └─ transfer.vue ---转移(员工楼盘转移或员工组织转移)
│ ├─ `template` ---开发用基本模板
│ │ └─ index.vue
│ └─ terms ---楼盘管理-放盘条款
│ └─ index.vue
├─ vue.config.js ---webpack 打包配置
└─ yarn.lock
:::

<br/>

## 代码逻辑梳理

### 刊登楼盘

#### url 参数以及规则介绍

let base = http://localhost:8803 <br/>
复制楼盘：base/property/post?propertyId=971565&type=copy&rentalType=1 <br/>
修改楼盘：base/property/post?propertyId=971565&type=edit&pageIndex=1 <br/>
续期楼盘：base/property/post?propertyId=971565&type=2&pageIndex=1 <br/>
立即付款：base/property/post?propertyId=971563&type=1&pageIndex=1 <br/>
刊登楼盘：base/property/post?rentalType=1 <br/>

#### url 参数解析：

**rentalType:** 1 售 2 租 <br/>
**propertyId:** 楼盘 id(复制修改续期付款需要通过楼盘 id 获取楼盘信息) <br/>
**type:** copy 复制 edit 修改 2 续期 1 付款 post 刊登(默认值不传递) <br/>
**pageIndex** : 从第几页进入到当前页面 帮列表页记录的值,修改楼盘后跳转到对应页数<br/><br/>

::: tip

#### 刊登楼盘分两种情况

1.普通用户 2.中原利嘉阁用户 <br/>
区别：对应展示的放盘界面不同<br/>
1）中原利嘉阁的 **住宅和工商厦类型** 可以通过搜索物业编或销售机会编号来查询楼盘<br/>
2）中原利嘉阁刊登的时候可以选择图片和上传图片（普通用户只允许手动上传图片）<br/>
3）中原账户只能选择一个代理人,且必须是当前的放盘人<br/>
**区分当前用户是中原还是利嘉阁的标识**：接口 GetCompanyCofig==>companyCategory 字段<br/>
**companyCategory ： 1 中原 2 利嘉阁 3 普通用户**
:::
<br/> 1.普通用户<br/>
<a data-fancybox title="pms_普通用户.png" href="/assets/pms_普通用户.png" >![pms_普通用户.png](/assets/pms_普通用户.png)</a> <br/> <br/>2.中原利嘉阁用户住宅（通过物業編號：propertyNo）<br/>
<a data-fancybox title="pms_住宅.png" href="/assets/pms_住宅.png" >![pms_住宅.png](/assets/pms_住宅.png)</a><br/>
<br/>3.中原利嘉阁用户工商厦（通过銷售機會編號 ：categoryNo）<br/>
<a data-fancybox title="pms_工商.png" href="/assets/pms_工商.png" >![pms_工商厦.png](/assets/pms_工商.png)</a><br/>

#### 关于配置项
