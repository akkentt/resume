# 经纪人端微聊小程序

<br/>

## 基本信息

::: tip 简介
针对内部经纪人使用的微聊小程序，主要内嵌在【企业微信】中使用(也支持迁移至【微信】)，目前已上线城市：深圳、广州、香港、集团（除上海）所有城市。
:::
<br/><br/>

## 对应线上应用

**小程序码(所有城市通用)：**  
<a data-fancybox title="qrcode.png" href="/assets/qrcode.jpg" >![qrcode.png](/assets/qrcode.jpg)</a>
<br/><br/>

## GIT 地址

<http://gitlab.centaline.com.cn/centnet-group/centanet/tools/chat-wepy2.0>  
**开发分支：** dev 分支  
**线上分支：** master 分支
<br/><br/>

## 管理后台

**小程序运营后台：** <https://mp.weixin.qq.com/>  
**运营对应账号：** centachats@163.com（密码询 PM）
<br/><br/>

## 对接人员

**前端：** 黄宽  
**Talk API：** 李松松  
<br/><br/>

## 配置相关信息

**api 地址：** <https://talk.centanet.com/im/](https://talk.centanet.com/im/>  
**获取快捷回复配置：** <https://static.centanet.com/wap/config/quickreply.json>  
**获取登录配置：** <https://static.centanet.com/wap/config/cityconfig.json>  
**小程序 appid：** wxced3539c370df72e  
**云信 appKey：** d70fe05fbd6d8abf318c3eaf6d046ead
<br/><br/>

### 项目框架

**小程序框架：** wepy  
**脚手架版本：** @wepy/cli 2.0.0-alpha.28  
**云信 SDK：** v7.9.0  
**UI 框架：** vant weapp 1.6.1
::: warning 注意
由于 wepy 框架的特殊性，UI 框架 vant weapp 已单独提取至项目下 weapp/compnents/vant 文件夹，无须通过 npm 安装引入。
:::
<br/><br/>

### 项目结构

---

具体目录结构,以及对应目录-功能模块参考：

::: vue
centanet-tools-chat-2.0
├─ .editorconfig
├─ .gitignore
├─ .prettierrc
├─ .wepycache
├─ .wepyignore
├─ package-lock.json
├─ package.json
├─ project.config.json
├─ src
│ ├─ app.wpy
│ ├─ `common` --公共文件夹
│ │ ├─ `config.js` --全局配置
│ │ ├─ eventHub.js --事件订阅
│ │ ├─ iconfont.less --图标样式文件
│ │ ├─ nim.v7.9.0.js --云信 SDK
│ │ ├─ `public.js` --公共 js 文件
│ │ └─ `style.less` --公共样式文件
│ ├─ components --组件
│ │ └─ vant --vant UI 框架文件夹
│ │ ├─ button
│ │ │ ├─ index.js
│ │ │ ├─ index.json
│ │ │ ├─ index.wxml
│ │ │ └─ index.wxss
│ │ ├─ cell
│ │ │ ├─ index.js
│ │ │ ├─ index.json
│ │ │ ├─ index.wxml
│ │ │ └─ index.wxss
│ │ ├─ cell-group
│ │ │ ├─ index.js
│ │ │ ├─ index.json
│ │ │ ├─ index.wxml
│ │ │ └─ index.wxss
│ │ ├─ common
│ │ │ ├─ color.js
│ │ │ ├─ component.js
│ │ │ ├─ index.wxss
│ │ │ ├─ style
│ │ │ │ ├─ clearfix.wxss
│ │ │ │ ├─ ellipsis.wxss
│ │ │ │ ├─ hairline.wxss
│ │ │ │ ├─ mixins
│ │ │ │ │ ├─ clearfix.wxss
│ │ │ │ │ ├─ ellipsis.wxss
│ │ │ │ │ └─ hairline.wxss
│ │ │ │ ├─ theme.wxss
│ │ │ │ └─ var.wxss
│ │ │ ├─ utils.js
│ │ │ └─ version.js
│ │ ├─ dialog
│ │ │ ├─ dialog.js
│ │ │ ├─ index.js
│ │ │ ├─ index.json
│ │ │ ├─ index.wxml
│ │ │ └─ index.wxss
│ │ ├─ goods-action
│ │ │ ├─ index.js
│ │ │ ├─ index.json
│ │ │ ├─ index.wxml
│ │ │ └─ index.wxss
│ │ ├─ goods-action-button
│ │ │ ├─ index.js
│ │ │ ├─ index.json
│ │ │ ├─ index.wxml
│ │ │ └─ index.wxss
│ │ ├─ icon
│ │ │ ├─ index.js
│ │ │ ├─ index.json
│ │ │ ├─ index.wxml
│ │ │ └─ index.wxss
│ │ ├─ info
│ │ │ ├─ index.js
│ │ │ ├─ index.json
│ │ │ ├─ index.wxml
│ │ │ └─ index.wxss
│ │ ├─ loading
│ │ │ ├─ index.js
│ │ │ ├─ index.json
│ │ │ ├─ index.wxml
│ │ │ └─ index.wxss
│ │ ├─ mixins
│ │ │ ├─ basic.js
│ │ │ ├─ button.js
│ │ │ ├─ link.js
│ │ │ ├─ open-type.js
│ │ │ ├─ page-scroll.js
│ │ │ ├─ touch.js
│ │ │ └─ transition.js
│ │ ├─ overlay
│ │ │ ├─ index.js
│ │ │ ├─ index.json
│ │ │ ├─ index.wxml
│ │ │ └─ index.wxss
│ │ ├─ popup
│ │ │ ├─ index.js
│ │ │ ├─ index.json
│ │ │ ├─ index.wxml
│ │ │ └─ index.wxss
│ │ ├─ transition
│ │ │ ├─ index.js
│ │ │ ├─ index.json
│ │ │ ├─ index.wxml
│ │ │ └─ index.wxss
│ │ └─ wxs
│ │ ├─ add-unit.wxs
│ │ ├─ array.wxs
│ │ ├─ bem.wxs
│ │ ├─ memoize.wxs
│ │ ├─ object.wxs
│ │ └─ utils.wxs
│ ├─ `mixins` --会话详情页和聊天记录页通用方法
│ │ └─ common.js
│ ├─ `pages` --核心页面
│ │ ├─ details.wpy --会话详情页
│ │ ├─ fix.wpy --异常修复功能
│ │ ├─ history.wpy --聊天记录页
│ │ ├─ list.wpy --会话列表页
│ │ ├─ log.wpy --日志记录(多次点击版本号进入此页面)
│ │ ├─ login.wpy --登录授权页
│ │ ├─ my.wpy --个人中心页面
│ │ ├─ setting.wpy --设置页面
│ │ ├─ towechat.wpy --迁移至微信功能
│ │ └─ webview.wpy --嵌套 webview 通用页面
│ ├─ `plugins`
│ │ ├─ axios.js --http 改造插件
│ │ └─ im.js --im 核心功能
│ ├─ `static` --公共静态文件
│ │ └─ img
│ │ ├─ centanet.png
│ │ ├─ fix.png
│ │ ├─ groups.png
│ │ ├─ list.png
│ │ ├─ list*.png
│ │ ├─ logo.png
│ │ ├─ my.png
│ │ ├─ my*.png
│ │ ├─ search.png
│ │ ├─ search\_.png
│ │ ├─ staff.png
│ │ ├─ wechat.png
│ │ └─ xiaomu.png
│ └─ `store` --全局数据状态管理
│ └─ index.js
└─ `wepy.config.js` --wepy 框架配置文件

:::

## 注意事项

### 1.异常监控与事件上报

---

为便于报障排查问题，所有可能导致连接断开、微聊无法使用的场景下， 代码中都做了异常监控与日志上报。  
日志上报使用微信官方提供的“实时日志”记录功能。  
错误状态码整理如下  
| 错误码 | 错误释义 |
| ------ | -------- |
|无|日志记录中无状态码，则为主动上报，连续多次点击【我的】=>【版本号】,将<br>跳转日志记录页，并主动提交日志|
|102|SDK 断开连接时触发，具体原因将记录并输出，一般为网络超时、token 失效、<br>其他端登录被踢等|
|103|获取列表失败时触发，一般为拉取会话列表超时，或执行拉取列表方法时，连<br>接已为断开状态|
|104|清理未读消息时失败，多为列表字段异常，导致读取写入失败|
|105|会话列表组装失败，云端会话列表和本地会话列表合并时，抛出此异常|
|108|SDK 回调异常，SDK 触发任意错误，触发此方法，具体原因将记录并输出|

### 2.小程序后台日志查询

---

**路径：** 【开发】=>【开发管理】=>【运维中心】=>【实时日志】  
访问以上路径 即可查询每天上报的日志  
<a data-fancybox title="" href="/assets/log-1.jpg">![](/assets/log-1.jpg)</a>
<a data-fancybox title="" href="/assets/log-2.jpg">![](/assets/log-2.jpg)</a>

<br>

### 3.新消息提醒逻辑

---

当产生新消息时，列表页将展示小圆点提醒经纪人未读消息，考虑性能原因，部分条件下的会话将自动设置为已读。具体规则&参考代码：

- 1. 没有正在进行中的会话,针对会话 id 写入小圆点提醒。
- 2. 有正在进行中的会话,但非当前 id,也写入小圆点提醒(正在对话中的会话不写入提醒)。
- 3. 超过 3 天会话不写更新状态 默认已读,不写入小圆点提醒。
- 4. 若为退群消息，无条件标记为已读，不写入小圆点提醒
- 5. 用户点击进入【我的】页面时，开始检测本地消息，搜寻 3 天以上的会话，设置为已读。

```javascript
// 路径：/src/store/index.js
//写入新消息提醒列表，tipList数组为专门本地存放已读/未读消息的数组
function setTipList(state, { list, chatId, type, stamp }) {
  try {
    //定义会话的最迟提醒时间（超过3天会话不写更新状态 默认已读）
    const date = +new Date() - 259200000
    //console.log('更新新消息提醒列表', state, list, chatId);
    const tipList = pub.simpleCopy(state.tipList) //浅拷贝小圆点列表
    //只处理7天内的会话,3天后的会话默认已读 不处理
    if (stamp && date < stamp) {
      if (
        type === 'add' &&
        chatId &&
        (!state.currentSession ||
          (state.currentSession && state.currentSession.chatId != chatId))
      )
        tipList[chatId] = { state: true, stamp: stamp }
      else if (type === 'del') tipList[chatId] = { state: false, stamp: stamp }
    } else if (type === 'list') {
      //来自于列表 循环对比消息，若为退群消息，无条件标记为已读，不写入小圆点提醒
      list.forEach((e) => {
        if (
          e.chatId &&
          tipList[e.chatId] == undefined &&
          date < e.stamp &&
          e.lastMsg.indexOf('退出了群聊') == -1
        ) {
          tipList[e.chatId] = { state: true, stamp: e.stamp }
        }
      })
    } else {
      //条件都不满足,超过3天的会话 自动设置为已读
      delete tipList[chatId]
    }
    //组装完成，开始写入已读列表
    state.tipList = tipList
    wx.setStorage({ key: 'tipList', data: tipList })
  } catch (error) {
    //异常捕获， 组装是失败时，上报日志至微信小程序后台
    var log = wx.getRealtimeLogManager ? wx.getRealtimeLogManager() : null
    if (log) {
      wx.removeStorage({ key: 'tipList' }) //清空用户信息列表
      log.info('———————tipList组装失败105———————')
      log.info(state.tipList)
      log.info(wx.getStorageSync('userInfo'))
      log.error(error)
    }
  }
}
```

<br>

### 4.更新会话头像和群 ID 逻辑

---

并非所有消息都会携带会话 ID 与头像，客户消息和系统消息必定携带，经纪人小程序端、IOS 端必定携带，Android 经纪人端不携带。  
因此应优先从消息体中获取以上字段，若获取不到，则降级处理，从云信端批量获取群资料，合并写入本地内存中。具体规则参考代码：

```javascript
// 路径：/src/store/index.js
//逻辑：优先从会话最后一条消息中取群头像和群ID,若没有取到(从安卓端发出的消息,不带扩展字段,无法取到),
//则创建promise批量从云信获取群资料,再合并数组,写入会话列表
function setSessionList(context, list) {
  let type = 'list'
  //判断消息类型，若为对象则是单条会话，转为数组，若为多条会话的数组则不处理。
  if (list.constructor === Object) {
    list = [list]
    type = 'object'
  }
  let promiseList = []
  //遍历所有会话，若没有【有效/无效标记】【头像】【会话ID】三个字段中的任意一个，创建promise批量从云信获取
  list.forEach((e, i) => {
    if ((e.invalid !== true && e.invalid !== false) || !e.chatId || !e.head)
      promiseList.push(wepy.$im.getTeam(e.id))
    else promiseList.push(Promise.resolve({ error: -100, res: e }))
  })
  Promise.all(promiseList).then((res) => {
    //遍历批量获取的接口，开始合并组装云端&本地会话的扩展字段，写入内存
    res.forEach((e, i) => {
      if (!e.error && e.error != -100) {
        let custom = {}
        try {
          custom = JSON.parse(e.res.serverCustom)
        } catch (error) {}
        list[i].isDel = custom.IsClosured || custom.Invalid
        list[i].chatName = custom.ChatId
          ? custom.ChatName || '官网聊天会话'
          : '官网会话聊天'
        list[i].chatId = custom.ChatId
        list[i].head =
          custom.OwnerIcon ||
          'https://static.centanet.com/wap/img/chat/groups.png'
      }
    })
    //合并组装完成后写入Vuex中，多条会话直接向下拼接，单条会话则置于列表顶部
    context.commit('setTipList', { list, type: 'list' })
    type = 'list'
      ? context.commit('pushSessionList', list)
      : context.commit('unshiftSessionList', list[0])
  })
}
```

<br><br>

## 扩展功能

### 1.用户轨迹

---

数据来自官网，展示用户历史浏览的房源和店铺记录。  
**跳转 URL 规则：**  
 https://esf.centanet.com/tools/viewhistory/?userid=`用户编号`  
**跳转 URL 示例：**  
 <http://esf.centanet.com/tools/viewhistory/?userid=U121516283>

<br>

### 2.发送房源

---

用于向客户推送房源，内嵌官网 m 站经纪人店铺页，chatmode=1 为固定参数，  
经纪人店铺页识别到此参数时，将只展示发送房源相关参数。  
**跳转 URL 规则：**  
https://wap.centanet.com/tj/jingjiren/esf-`经纪人工号`/?chatmode=1  
**跳转 URL 示例：**  
<https://wap.centanet.com/tj/jingjiren/esf-tj19020017/?chatmode=1>

<br>

### 3.邀请经纪人进群

---

用于邀请同事加入会话的功能。  
**跳转 URL 规则：**  
https://esf.centanet.com/tools/chat/invite.html?k=333&userid=`经纪人完整工号`&chatid=`会话chatid`  
**跳转 URL 示例：**  
<https://esf.centanet.com/tools/chat/invite.html?userid=s_024_guanliyuan1&chatid=chat545124815>

<br>

### 4.激活历史会话

---

用于新旧版微聊过渡期间，找回旧版微聊会话的功能。也用于查询旧版会话中的聊天记录。  
**跳转 URL 规则：**  
https://esf.centanet.com/tools/chat/activate.html?userid=`经纪人完整工号`  
**跳转 URL 示例：**  
<https://esf.centanet.com/tools/chat/activate.html?userid=s_024_guanliyuan1>

<br><br>

## 发版流程

### 构建生产包

::: tip 提示
构建打包时，建议退出微信开发者工具，防止文件占用部分文件生成失败。
:::

---

在程序目录执行 cmd 命令`npm run build` 构建生产包,输出示例,出现`build finished`相关提示,且无错误输出 则构建成功  
构建文件路径： `项目根目录/weapp/`

```shell


E:\git-new\centanet-tools-chat-2.0>npm run build

> chat@0.0.2 build E:\git-new\centanet-tools-chat-2.0
> cross-env NODE_ENV=production ./node_modules/.bin/wepy build --no-cache

[17:27:23] info build app start...
[17:27:27] info app building App
[17:27:27] info component building components
[17:27:27] info component building components
[17:27:27] info component building components
[17:27:27] info component building components
[17:27:27] info vendor building vendor
[17:27:27] info assets building assets
[17:27:27] info build finished

E:\git-new\centanet-tools-chat-2.0>
```

---

### 提交审核并发布

---

- 根据上一步构建好生产包以后，生成的`weapp`文件夹即为小程序包，在开发者工具右上角提交体验版， 并在小程序后台提交审核即可
