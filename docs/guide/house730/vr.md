# HOUSE730 VR看房
<br/>

## 基本信息
::: tip 简介
HOUSE730项目VR看房模块 , 响应式站点 , APP、PC/M站均使用此套应用
:::
<br/><br/>

## 对应线上应用

**线上地址：**   
**二手房源VR：**<https://vr.house730.com/?lang=hk&pid=2226922&skip=1>     
**新房VR：**<https://vr.house730.com/newprop/estate.html?lang=hk&vrid=5967&eid=368>  
**香港中原定制：**<https://vr.house730.com/hk.html?vid=hong_d1427c1c-fba1-414c-93d9-66de672cd7c3&staff=0&ruler=0&area=0&unit=0>  
**matterport-VR数据：**<https://vr.house730.com/?lang=hk&pid=2084011&skip=1https://www.o8tv.com/index.php/vod/play/id/iUOCCS/sid/1/nid/1.html>
<br/><br/>

## GIT地址
<http://gitlab.centaline.com.cn/centnet-group/house730/tools/vr-3.0>
**开发分支：** 3.0分支  
**线上分支：** master分支
<br/><br/>

## 对接人员

**前端：** 黄宽  
**API：** 周辉   
**APP-VR带看：** 刘辉(Android)、付月月(IOS)
<br/><br/>


## 线上部署服务器

::: warning
涉及服务器发布的文件,必须214/218 两台服务器同步更新
:::

**依赖环境：** IIS+URL重写模块(需额外安装)  
**IIS应用名：** vr.house730.com  
**端口号：** 9088  
**程序目录：** C:\webroot\house730-VR  
**服务器IP：**  10.29.205.214  、10.29.205.218  
(服务器登录账号密码询仝胜乐、李涛)
<br/>




## 项目框架

**脚手架版本：** vue-cli 2  
**Vue版本：** 2.5.x    
**UI框架：** 部分使用Vant, 其他为原生实现
<br/>




## 项目结构

::: warning 注意
本项目基于VR供应商提供的SDK和源代码二次开发，为避免代码耦合，非必要时，所有扩展的功能均在【\src\components\house730】文件夹下新增和修改，减少改动其他文件
:::
具体目录结构,以及对应目录-功能模块参考：

::: vue
Source_house730_20200608
├─ .babelrc
├─ .gitignore
├─ .postcssrc.js
├─ .prettierrc
├─ .vscode
│  └─ settings.json
├─ build
│  ├─ build.js
│  ├─ check-versions.js
│  ├─ cssPathResolver.js
│  ├─ utils.js
│  ├─ vue-loader.conf.js
│  ├─ webpack.base.conf.js
│  ├─ webpack.dev.conf.js
│  └─ webpack.prod.conf.js
├─ config
│  ├─ dev.env.js
│  ├─ index.js
│  ├─ prod.env.js
│  ├─ sdk.versions.js
│  └─ test.env.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ README.md
├─ src
│  ├─ App.vue
│  ├─ assets
│  │  ├─ css
│  │  │  ├─ anchor.css
│  │  │  ├─ editor.css
│  │  │  ├─ icon.css
│  │  │  └─ index.css
│  │  ├─ fonts
│  │  │  ├─ icomoon.eot
│  │  │  ├─ icomoon.svg
│  │  │  ├─ icomoon.ttf
│  │  │  └─ icomoon.woff
│  │  └─ textures
│  │     ├─ controlTip.phone.png
│  │     ├─ controlTip.png
│  │     ├─ controlTip2D.phone.png
│  │     ├─ controlTip3D.phone.png
│  │     ├─ controlTip3D.png
│  │     ├─ hand.png
│  │     ├─ sector.png
│  │     └─ vrTip.png
│  ├─ components
│  │  ├─ biguiyuan
│  │  │  ├─ guided-tour-menu
│  │  │  │  ├─ assets
│  │  │  │  │  └─ textures
│  │  │  │  │     ├─ exit.svg
│  │  │  │  │     ├─ guild.svg
│  │  │  │  │     ├─ phone.svg
│  │  │  │  │     ├─ up.svg
│  │  │  │  │     └─ user.svg
│  │  │  │  ├─ guidedTourMenu.js
│  │  │  │  └─ GuidedTourMenu.vue
│  │  │  ├─ menu-controller
│  │  │  │  ├─ menuController.js
│  │  │  │  └─ MenuController.vue
│  │  │  ├─ post-phone
│  │  │  │  ├─ Post-Phone.vue
│  │  │  │  └─ postPhone.js
│  │  │  └─ tour-exit-mask
│  │  │     ├─ tourExitMask.js
│  │  │     └─ TourExitMask.vue
│  │  ├─ common
│  │  │  ├─ common-alert
│  │  │  │  ├─ commonAlert.js
│  │  │  │  └─ CommonAlert.vue
│  │  │  ├─ common-mask
│  │  │  │  ├─ commonMask.js
│  │  │  │  └─ CommonMask.vue
│  │  │  ├─ floor-plan-choose
│  │  │  │  ├─ floorPlanChoose.js
│  │  │  │  └─ FloorPlanChoose.vue
│  │  │  ├─ floor-switch
│  │  │  │  ├─ floorSwitch.js
│  │  │  │  └─ FloorSwitch.vue
│  │  │  └─ thumbnail-controller
│  │  │     ├─ thumbnailController.js
│  │  │     └─ ThumbnailController.vue
│  │  ├─ decoration
│  │  │  ├─ index.js
│  │  │  ├─ style-controller
│  │  │  │  ├─ FullDecoModeNav.vue
│  │  │  │  ├─ IcoStyleController.vue
│  │  │  │  ├─ index.js
│  │  │  │  └─ StyleController.vue
│  │  │  ├─ style-menu
│  │  │  │  ├─ index.js
│  │  │  │  └─ StyleMenu.vue
│  │  │  ├─ style-selector
│  │  │  │  ├─ index.js
│  │  │  │  └─ StyleSelector.vue
│  │  │  └─ to-decoration-button
│  │  │     ├─ index.js
│  │  │     └─ ToDecorationButton.vue
│  │  ├─ dialog
│  │  │  ├─ assets
│  │  │  │  └─ textures
│  │  │  │     └─ looking.png
│  │  │  ├─ floor-change-dialog
│  │  │  │  ├─ FloorChangeDialog.vue
│  │  │  │  └─ index.js
│  │  │  ├─ index.js
│  │  │  └─ room-change-dialog
│  │  │     ├─ index.js
│  │  │     └─ RoomChangeDialog.vue
│  │  ├─ guided-tour
│  │  │  ├─ ask-phone-number
│  │  │  │  ├─ AskPhoneNumber.vue
│  │  │  │  └─ GivePhoneNumberEnsurePanel.vue
│  │  │  ├─ floor-plan-choose
│  │  │  │  └─ FloorPlanChoose.vue
│  │  │  ├─ guided-tour-menu
│  │  │  │  ├─ guidedTourMenu.js
│  │  │  │  └─ GuidedTourMenu.vue
│  │  │  ├─ index.js
│  │  │  ├─ post-phone
│  │  │  │  ├─ postPhone.js
│  │  │  │  └─ PostPhone.vue
│  │  │  ├─ tour-exit-mask
│  │  │  │  ├─ tourExitMask.js
│  │  │  │  └─ TourExitMask.vue
│  │  │  └─ vertical-button
│  │  │     ├─ verticalButton.js
│  │  │     └─ VerticalButton.vue
│  │  ├─ `house730`   --house730二次开发主要目录
│  │  │  ├─ `assets`  --资源文件
│  │  │  │  ├─ `common.js` --API配置文件、语言、价格等通用配置
│  │  │  │  ├─ houseInfoPanel.css --由旧版VR移植的样式文件
│  │  │  │  ├─ images --二次开发增加的图标文件
│  │  │  │  │  ├─ back.svg
│  │  │  │  │  ├─ chat.svg
│  │  │  │  │  ├─ full.png
│  │  │  │  │  ├─ head-staff.svg
│  │  │  │  │  ├─ head-user.svg
│  │  │  │  │  ├─ house730.png
│  │  │  │  │  ├─ ico-message.png
│  │  │  │  │  ├─ ico-phone.png
│  │  │  │  │  ├─ ico-whatsapp.png
│  │  │  │  │  ├─ share.svg
│  │  │  │  │  ├─ twocode.jpg
│  │  │  │  │  ├─ vrchat.svg
│  │  │  │  │  └─ whatsapp.svg
│  │  │  │  ├─ index.css
│  │  │  │  └─ `language.js`  --语言包
│  │  │  ├─ `components` --组件子文件夹
│  │  │  │  ├─ down-app.vue --下载APP弹层组件
│  │  │  │  ├─ `header.vue`  --核心组件，由head导航延伸，后续所有功能均在此组件中
│  │  │  │  └─ mark.vue --免责声明组件
│  │  │  └─ index.js
│  │  ├─ house730.zip
│  │  ├─ PanoDIY
│  │  │  ├─ DIYStyleController.vue
│  │  │  ├─ KFButtomDialog.vue
│  │  │  ├─ KFList.vue
│  │  │  ├─ KFOldButton.vue
│  │  │  ├─ KFScreen.vue
│  │  │  ├─ KFSideHolder.vue
│  │  │  ├─ PanoDIYButtonGroup.vue
│  │  │  ├─ PanoFurnitureList.vue
│  │  │  └─ PanoMyDesignDialog.vue
│  │  ├─ panoDIY-mode
│  │  │  ├─ design-panel
│  │  │  │  ├─ DesignController.vue
│  │  │  │  └─ index.js
│  │  │  └─ index.js
│  │  ├─ salesOffice
│  │  │  ├─ bottom-tool-bar
│  │  │  │  ├─ bottomToolBar.js
│  │  │  │  └─ BottomToolBar.vue
│  │  │  ├─ close
│  │  │  │  ├─ close.js
│  │  │  │  └─ Close.vue
│  │  │  ├─ common-alert
│  │  │  │  ├─ commonAlert.js
│  │  │  │  └─ CommonAlert.vue
│  │  │  ├─ common-mask
│  │  │  │  ├─ commonMask.js
│  │  │  │  └─ CommonMask.vue
│  │  │  ├─ floor-plan-choose
│  │  │  │  ├─ floorPlanChoose.js
│  │  │  │  └─ FloorPlanChoose.vue
│  │  │  ├─ floor-plan-choose-big
│  │  │  │  ├─ floorPlanChooseBig.js
│  │  │  │  └─ floorPlanChooseBig.vue
│  │  │  ├─ house-title
│  │  │  │  ├─ houseTitle.js
│  │  │  │  └─ HouseTitle.vue
│  │  │  ├─ img-name
│  │  │  │  ├─ imgName.js
│  │  │  │  └─ ImgName.vue
│  │  │  ├─ img-name-v2.0
│  │  │  │  ├─ imgName.js
│  │  │  │  └─ ImgName.vue
│  │  │  ├─ project-introduction
│  │  │  │  ├─ projectIntroduction.js
│  │  │  │  └─ ProjectIntroduction.vue
│  │  │  ├─ sales-office
│  │  │  │  ├─ salesOffice.js
│  │  │  │  └─ SalesOffice.vue
│  │  │  ├─ singleImg
│  │  │  │  ├─ singleImg.js
│  │  │  │  └─ SingleImg.vue
│  │  │  ├─ static
│  │  │  │  └─ img
│  │  │  │     ├─ logo.png
│  │  │  │     ├─ logoCircle.png
│  │  │  │     ├─ logo_qingchuiwan_long.jpeg
│  │  │  │     ├─ logo_qingchuiwan_long.png
│  │  │  │     ├─ music.svg
│  │  │  │     ├─ musicActive.svg
│  │  │  │     ├─ ruler.svg
│  │  │  │     ├─ rulerActive.svg
│  │  │  │     ├─ share.svg
│  │  │  │     └─ vr.svg
│  │  │  ├─ svg-name
│  │  │  │  ├─ svgName.js
│  │  │  │  └─ SvgName.vue
│  │  │  ├─ thumbnail-Controller
│  │  │  │  ├─ thumbnailController.js
│  │  │  │  └─ ThumbnailController.vue
│  │  │  └─ vertical-button
│  │  │     ├─ verticalButton.js
│  │  │     └─ VerticalButton.vue
│  │  ├─ single-mode
│  │  │  ├─ decoration-button
│  │  │  │  ├─ DecorationButton.vue
│  │  │  │  └─ index.js
│  │  │  └─ index.js
│  │  └─ standard
│  │     ├─ anchor
│  │     │  ├─ AnchorClickedPanel.vue
│  │     │  ├─ AnchorForm.vue
│  │     │  ├─ index.js
│  │     │  └─ LoginForm.vue
│  │     ├─ buttom-panel
│  │     │  ├─ BottomToolBar.vue
│  │     │  ├─ BottomToolBarPC.vue
│  │     │  ├─ BottomToolBarPhone.vue
│  │     │  └─ index.js
│  │     ├─ confirm-panels
│  │     │  ├─ screenShootConfirmPanel.vue
│  │     │  └─ screenShootOperate.vue
│  │     ├─ control-tip
│  │     │  ├─ BlackBackGroundPanel.vue
│  │     │  ├─ CompareModeTopBar.vue
│  │     │  ├─ ControlTip.vue
│  │     │  ├─ ControlTip2D.vue
│  │     │  ├─ ControlTip3D.vue
│  │     │  ├─ HouseInfo.vue
│  │     │  ├─ HouseName.vue
│  │     │  ├─ HouseName.vue.orig
│  │     │  ├─ index.js
│  │     │  └─ VRStartTip.vue
│  │     ├─ encrypted-data
│  │     │  └─ EnterPassword.vue
│  │     ├─ exit
│  │     │  └─ Exit.vue
│  │     ├─ floor-switch
│  │     │  ├─ DefaultFloorSwitch.vue
│  │     │  └─ index.js
│  │     ├─ godview-panel
│  │     │  ├─ GodViewPanel.vue
│  │     │  ├─ hand.png
│  │     │  └─ index.js
│  │     ├─ house-title
│  │     │  ├─ HouseTitle.vue
│  │     │  └─ index.js
│  │     ├─ index.js
│  │     ├─ loading
│  │     │  ├─ GlobalLoading.vue
│  │     │  ├─ index.js
│  │     │  └─ RoomLoading.vue
│  │     ├─ logo
│  │     │  ├─ index.js
│  │     │  └─ Logo.vue
│  │     ├─ map-box
│  │     │  ├─ index.js
│  │     │  └─ MapBox.vue
│  │     ├─ menu-group
│  │     │  ├─ BrokerInfo.vue
│  │     │  ├─ index.js
│  │     │  └─ MenuController.vue
│  │     ├─ module-switch
│  │     │  ├─ ButtonGroup.vue
│  │     │  ├─ ButtonGroup.vue.orig
│  │     │  └─ index.js
│  │     ├─ mosaic-panels
│  │     │  ├─ index.js
│  │     │  └─ MosaicPanel.vue
│  │     ├─ music
│  │     │  └─ backgroundMusic.vue
│  │     ├─ nav
│  │     │  ├─ EnterDecoPage.vue
│  │     │  ├─ index.js
│  │     │  └─ NavTop.vue
│  │     ├─ PopOver
│  │     │  ├─ FloorChangePopOver.vue
│  │     │  ├─ PopOver.vue
│  │     │  └─ RoomChangePopOver.vue
│  │     ├─ rights-panel
│  │     │  ├─ index.js
│  │     │  └─ RightsPanel.vue
│  │     ├─ scene-switch
│  │     │  ├─ Compass.vue
│  │     │  ├─ DefaultSceneSwitch.vue
│  │     │  ├─ DIYSceneSwitch.vue
│  │     │  ├─ index.js
│  │     │  └─ RoomArea.vue
│  │     ├─ slogan
│  │     │  ├─ index.js
│  │     │  └─ Slogan.vue
│  │     ├─ thumbnail-group
│  │     │  ├─ index.js
│  │     │  └─ ThumbnailController.vue
│  │     ├─ zoom-in
│  │     │  ├─ index.js
│  │     │  └─ ZoomIn.vue
│  │     └─ zoom-out
│  │        ├─ index.js
│  │        └─ ZoomOut.vue
│  ├─ config.js
│  ├─ constrant.js
│  ├─ fetcher.js
│  ├─ i18n
│  │  ├─ en-US
│  │  │  ├─ bottomToolsTips.js
│  │  │  ├─ buttonGroupTips.js
│  │  │  ├─ buttons.js
│  │  │  ├─ controlTip.js
│  │  │  ├─ editor.js
│  │  │  ├─ errorMsg.js
│  │  │  ├─ floorChangeTips.js
│  │  │  ├─ guidedTour.js
│  │  │  ├─ index.js
│  │  │  ├─ measurement.js
│  │  │  ├─ message.js
│  │  │  ├─ mosaicNames.js
│  │  │  ├─ rights.js
│  │  │  ├─ singleMode.js
│  │  │  └─ styles.js
│  │  ├─ index.js
│  │  ├─ ja
│  │  │  ├─ bottomToolsTips.js
│  │  │  ├─ buttonGroupTips.js
│  │  │  ├─ buttons.js
│  │  │  ├─ controlTip.js
│  │  │  ├─ editor.js
│  │  │  ├─ errorMsg.js
│  │  │  ├─ floorChangeTips.js
│  │  │  ├─ guidedTour.js
│  │  │  ├─ index.js
│  │  │  ├─ measurement.js
│  │  │  ├─ message.js
│  │  │  ├─ mosaicNames.js
│  │  │  ├─ rights.js
│  │  │  └─ singleMode.js
│  │  ├─ zh-CN
│  │  │  ├─ bottomToolsTips.js
│  │  │  ├─ buttonGroupTips.js
│  │  │  ├─ buttons.js
│  │  │  ├─ controlTip.js
│  │  │  ├─ editor.js
│  │  │  ├─ errorMsg.js
│  │  │  ├─ floorChangeTips.js
│  │  │  ├─ guidedTour.js
│  │  │  ├─ index.js
│  │  │  ├─ measurement.js
│  │  │  ├─ message.js
│  │  │  ├─ mosaicNames.js
│  │  │  ├─ rights.js
│  │  │  ├─ singleMode.js
│  │  │  └─ styles.js
│  │  ├─ zh-HK
│  │  │  ├─ bottomToolsTips.js
│  │  │  ├─ buttonGroupTips.js
│  │  │  ├─ buttons.js
│  │  │  ├─ controlTip.js
│  │  │  ├─ editor.js
│  │  │  ├─ errorMsg.js
│  │  │  ├─ floorChangeTips.js
│  │  │  ├─ guidedTour.js
│  │  │  ├─ index.js
│  │  │  ├─ measurement.js
│  │  │  ├─ message.js
│  │  │  ├─ mosaicNames.js
│  │  │  ├─ rights.js
│  │  │  ├─ singleMode.js
│  │  │  └─ styles.js
│  │  └─ zh-TW
│  │     ├─ bottomToolsTips.js
│  │     ├─ buttonGroupTips.js
│  │     ├─ buttons.js
│  │     ├─ controlTip.js
│  │     ├─ editor.js
│  │     ├─ errorMsg.js
│  │     ├─ floorChangeTips.js
│  │     ├─ guidedTour.js
│  │     ├─ index.js
│  │     ├─ measurement.js
│  │     ├─ message.js
│  │     ├─ mosaicNames.js
│  │     ├─ rights.js
│  │     ├─ singleMode.js
│  │     └─ styles.js
│  ├─ main.js
│  ├─ mixins
│  │  ├─ computed.js
│  │  ├─ data.js
│  │  ├─ decoration.js
│  │  ├─ dismiss.js
│  │  ├─ floorChange.js
│  │  ├─ guidedTour.js
│  │  ├─ initial.js
│  │  ├─ initial.js.orig
│  │  ├─ locale.js
│  │  ├─ methods.js
│  │  └─ singlemode.js
│  ├─ models
│  │  ├─ Button.js
│  │  ├─ Style.js
│  │  └─ Thumbnail.js
│  ├─ resource.js
│  ├─ resource.js.orig
│  ├─ router.js
│  ├─ store
│  │  ├─ index.js
│  │  └─ index.js.orig
│  ├─ view
│  │  ├─ godView
│  │  │  ├─ biguiyuanGodView
│  │  │  │  ├─ godView.js
│  │  │  │  └─ GodView.vue
│  │  │  └─ GodView.vue
│  │  ├─ GodView.vue
│  │  ├─ index.js
│  │  ├─ PanoDIYDesign.vue
│  │  ├─ PanoDIYMode.vue
│  │  ├─ PanoDIYResult.vue
│  │  ├─ panoView
│  │  │  ├─ biguiyuanTour
│  │  │  │  ├─ tourPano.js
│  │  │  │  └─ TourPano.vue
│  │  │  ├─ biguiyuanVr
│  │  │  │  ├─ vrPano.js
│  │  │  │  └─ VrPano.vue
│  │  │  ├─ PanoView.vue
│  │  │  └─ salesOffice
│  │  │     ├─ salesOffice.js
│  │  │     └─ SalesOffice.vue
│  │  ├─ PanoView.vue
│  │  ├─ PanoView.vue.orig
│  │  └─ SingleMode.vue
│  └─ weixinShare.js
└─ static
   ├─ .gitkeep
   ├─ css
   │  ├─ jquery.flipster.css
   │  ├─ jquery.loading.css
   │  └─ theme.css
   ├─ i18n
   │  ├─ index.json
   │  └─ nameDict.json
   ├─ js
   │  ├─ common
   │  │  ├─ aes.min.js
   │  │  ├─ browser-polyfill.min.js
   │  │  ├─ canvas-to-blob.min.js
   │  │  ├─ clipper.min.js
   │  │  ├─ detector.min.js
   │  │  ├─ EMedia_sdk-dev.js
   │  │  ├─ EMedia_x1v1.js
   │  │  ├─ linq.min.js
   │  │  ├─ loader.js
   │  │  ├─ md5.js
   │  │  ├─ pako.min.js
   │  │  ├─ poly2tri.min.js
   │  │  ├─ stats.min.js
   │  │  ├─ three.js
   │  │  ├─ three@113.min.js
   │  │  ├─ webimSDK3.0.6.js
   │  │  └─ webimSDK3.1.4.js
   │  ├─ config.js
   │  ├─ jquery
   │  │  ├─ jquery.1.9.1.min.js
   │  │  ├─ jquery.flipster.min.js
   │  │  ├─ jquery.tmpl.js
   │  │  └─ swiper.min.js
   │  └─ `sdk`   --核心SDK库 由123提供更新后手动替换
   │     ├─ decoeditor@2020022401.min.js
   │     ├─ decoeditor@2020022401.min.js.map
   │     ├─ guidedtour@2020051501.min.js
   │     ├─ guidedtour@2020051501.min.js.map
   │     ├─ houseeditor@2020051501.min.js
   │     ├─ houseeditor@2020051501.min.js.map
   │     ├─ houseviewer@2020051501.min.js
   │     ├─ houseviewer@2020051501.min.js.map
   │     ├─ vrcore@2020051501.min.js
   │     └─ vrcore@2020051501.min.js.map
   ├─ logo.png
   ├─ logo@32x32.png
   ├─ logo@64x64 - 副本.png
   ├─ logo@64x64.png
   ├─ mock
   │  ├─ 0001
   │  │  └─ brokerInfo.json
   │  ├─ 8144b7ff-491d-42b9-80d2-ed83d3a4711b
   │  │  └─ houseInfo.json
   │  ├─ caojl_ff0c0e1a-001a-48cf-bf67-2ffe3a159886
   │  ├─ grc123_cf239838-8faa-4fb5-a672-43424dc02235
   │  │  └─ houseInfo.json
   │  ├─ WL17339914574_3640d16f-57df-440e-90e4-4fe3ec630b1a
   │  │  └─ houseInfo.json
   │  └─ WoAiWoJia-690362_2e175864-2a84-4268-a5d6-7913e7be4dea
   │     └─ houseInfo.json
   ├─ textures  --常用图标等资源文件
   │  ├─ anchor
   │  │  ├─ anchor.png
   │  │  ├─ anchorOutScene.png
   │  │  ├─ anchor_hover.png
   │  │  └─ hotSpotOutScene.png
   │  ├─ animation
   │  │  ├─ aarow_welcome_slice.png
   │  │  ├─ arrow.png
   │  │  ├─ arrow_new.png
   │  │  ├─ circle.png
   │  │  ├─ circle_sequence.png
   │  │  ├─ circular.png
   │  │  ├─ circular_new.png
   │  │  └─ navAnchor.png
   │  ├─ back.svg
   │  ├─ bottomLogo.png
   │  ├─ bottomLogo_ja.png
   │  ├─ broke404.png
   │  ├─ checkProfile.png
   │  ├─ circle.png
   │  ├─ close.png
   │  ├─ close.svg
   │  ├─ compass.png
   │  ├─ compass_2d.png
   │  ├─ decoration
   │  │  ├─ afterDecoration.png
   │  │  ├─ Chinese-active.svg
   │  │  ├─ Chinese.svg
   │  │  ├─ decorating.png
   │  │  ├─ decoration-failure.png
   │  │  ├─ decoration-success.png
   │  │  ├─ decoration-upload.png
   │  │  ├─ decoration.png
   │  │  ├─ European-active.svg
   │  │  ├─ European.svg
   │  │  ├─ exitFullScreen.png
   │  │  ├─ fullScreen.png
   │  │  ├─ Japanese-active.svg
   │  │  ├─ Japanese.svg
   │  │  ├─ Modern-active.svg
   │  │  ├─ Modern.svg
   │  │  ├─ Simple-active.svg
   │  │  └─ Simple.svg
   │  ├─ disclaimer.png
   │  ├─ disclaimer.svg
   │  ├─ editor
   │  │  ├─ addAnchor.svg
   │  │  ├─ addMosaic.svg
   │  │  ├─ arrow.png
   │  │  ├─ captureVideo.png
   │  │  ├─ delete.png
   │  │  ├─ screenShot.svg
   │  │  ├─ upload.png
   │  │  ├─ zoomIn.png
   │  │  └─ zoomOut.png
   │  ├─ entranceHotspot.png
   │  ├─ exit.svg
   │  ├─ flod.svg
   │  ├─ hand.png
   │  ├─ hotspot
   │  │  ├─ beamBase.png
   │  │  ├─ entranceArrow.mtl
   │  │  ├─ entranceArrow.obj
   │  │  ├─ feet.png
   │  │  ├─ light.png
   │  │  └─ ren.obj
   │  ├─ hotSpotClicked.png
   │  ├─ hotSpotPoint_HighLight.png
   │  ├─ hotSpotPoint_small.png
   │  ├─ hotSpotStatic.png
   │  ├─ label_room_bg@2x.png
   │  ├─ logo-en.png
   │  ├─ logo-en.svg
   │  ├─ logo.gif
   │  ├─ logo.png
   │  ├─ logo_ja.gif
   │  ├─ measure
   │  │  ├─ addCube.png
   │  │  ├─ measureDelete.png
   │  │  ├─ measureGrid.png
   │  │  ├─ measureGridEnd.png
   │  │  ├─ measureLine.png
   │  │  ├─ measureLineEnd.png
   │  │  ├─ measureWall.png
   │  │  └─ measureWallEnd.png
   │  ├─ normal
   │  │  ├─ back.png
   │  │  ├─ downloadButton.svg
   │  │  ├─ enlargeButton.png
   │  │  ├─ exit.png
   │  │  ├─ feet.png
   │  │  ├─ metre.png
   │  │  ├─ musicButton.svg
   │  │  ├─ musicOn.svg
   │  │  ├─ narrowButton.png
   │  │  ├─ playButton.svg
   │  │  ├─ playOn.svg
   │  │  ├─ rightsButton.svg
   │  │  ├─ rightsOn.svg
   │  │  ├─ rulerButton.svg
   │  │  ├─ rulerOn.svg
   │  │  ├─ share.png
   │  │  ├─ shareButton.png
   │  │  ├─ vrButton.svg
   │  │  └─ vrOn.svg
   │  ├─ northIndicator.png
   │  ├─ panoDIY
   │  │  ├─ change.png
   │  │  ├─ change.svg
   │  │  ├─ choosed.svg
   │  │  ├─ close.svg
   │  │  ├─ close_normal.png
   │  │  ├─ close_small.png
   │  │  ├─ decorate_normal.png
   │  │  ├─ decorate_normal.svg
   │  │  ├─ decorate_small.png
   │  │  ├─ decorate_small.svg
   │  │  ├─ DecorationLoading.png
   │  │  ├─ delete_normal.png
   │  │  ├─ delete_normal.svg
   │  │  ├─ delete_small.png
   │  │  ├─ delete_small.svg
   │  │  ├─ designhouse_normal.png
   │  │  ├─ designhouse_normal.svg
   │  │  ├─ designhouse_small.png
   │  │  ├─ designhouse_small.svg
   │  │  ├─ diy.svg
   │  │  ├─ down.svg
   │  │  ├─ down_normal.png
   │  │  ├─ down_small.png
   │  │  ├─ edit_normal.png
   │  │  ├─ edit_normal.svg
   │  │  ├─ edit_small.png
   │  │  ├─ edit_small.svg
   │  │  ├─ goods.svg
   │  │  ├─ goods_normal.png
   │  │  ├─ goods_small.png
   │  │  ├─ nofurniture.svg
   │  │  ├─ nofurniture_120x120.png
   │  │  ├─ nofurniture_180X180.png
   │  │  ├─ nofurniture_60x60.png
   │  │  ├─ picture_normal.png
   │  │  ├─ picture_small.png
   │  │  ├─ right_normal.png
   │  │  ├─ right_normal.svg
   │  │  ├─ right_small.png
   │  │  ├─ right_small.svg
   │  │  ├─ solution_normal.png
   │  │  ├─ solution_normal.svg
   │  │  ├─ solution_small.png
   │  │  ├─ solution_small.svg
   │  │  ├─ stateempty.svg
   │  │  ├─ stateempty_normal.png
   │  │  ├─ stateempty_small.png
   │  │  ├─ up_normal.png
   │  │  ├─ up_normal.svg
   │  │  ├─ up_small.png
   │  │  └─ up_small.svg
   │  ├─ panoLogo
   │  │  ├─ logo.png
   │  │  ├─ pc_compass@3x.png
   │  │  ├─ pc_compass_empty@3x.png
   │  │  ├─ pc_compass_empty_no_direction@3x.png
   │  │  └─ pc_compass_no_direction@3x.png
   │  ├─ qrcode.png
   │  ├─ record
   │  │  ├─ pause.png
   │  │  ├─ play.png
   │  │  ├─ record.png
   │  │  └─ stop.png
   │  ├─ roamArrow.svg
   │  ├─ roomHotspot.png
   │  ├─ salesOffice
   │  │  └─ img
   │  │     ├─ logo.png
   │  │     ├─ logoCircle.png
   │  │     ├─ logo_qingchuiwan_long.jpeg
   │  │     ├─ logo_qingchuiwan_long.png
   │  │     ├─ music.svg
   │  │     ├─ musicActive.svg
   │  │     ├─ ruler.svg
   │  │     ├─ rulerActive.svg
   │  │     ├─ share.svg
   │  │     └─ vr.svg
   │  ├─ search.png
   │  ├─ sector.png
   │  ├─ share.png
   │  ├─ slogan-in-pano.png
   │  ├─ slogan.png
   │  ├─ star.png
   │  ├─ starBorder.png
   │  ├─ StaticAIIntroduce.png
   │  ├─ telephonePC.png
   │  ├─ triangle.png
   │  ├─ vrhouseui
   │  │  ├─ bottom-panel
   │  │  │  ├─ AIIntroduce.png
   │  │  │  ├─ bottomLogo.png
   │  │  │  ├─ brokerComicPhoto.png
   │  │  │  ├─ checkProfile.png
   │  │  │  ├─ exit.png
   │  │  │  ├─ exitVR.png
   │  │  │  ├─ exitVR.svg
   │  │  │  ├─ floorChange.svg
   │  │  │  ├─ floorChange2.svg
   │  │  │  ├─ house.png
   │  │  │  ├─ qrcode.png
   │  │  │  ├─ roomChange.svg
   │  │  │  ├─ roomChange2.svg
   │  │  │  ├─ StaticAIIntroduce.png
   │  │  │  ├─ telephone.png
   │  │  │  ├─ telephonePC.png
   │  │  │  ├─ vrLook.svg
   │  │  │  ├─ weChatPC.png
   │  │  │  └─ weChatPhone.png
   │  │  ├─ control-tip
   │  │  │  ├─ afterDecoration.png
   │  │  │  ├─ beforeDecoation.png
   │  │  │  ├─ close.png
   │  │  │  ├─ unfold.png
   │  │  │  └─ vrImage.png
   │  │  ├─ guided-tour
   │  │  │  ├─ exit.svg
   │  │  │  ├─ guild.svg
   │  │  │  ├─ phone.png
   │  │  │  ├─ phone.svg
   │  │  │  ├─ up.svg
   │  │  │  └─ user.png
   │  │  ├─ menu-group
   │  │  │  ├─ star.png
   │  │  │  ├─ starBorder.png
   │  │  │  └─ telePhone.png
   │  │  ├─ pop-over
   │  │  │  └─ looking.svg
   │  │  └─ scene-switch
   │  │     ├─ 2DImage.png
   │  │     ├─ 2DImageSelected.png
   │  │     ├─ 3DImage.png
   │  │     └─ 3DImageSelected.png
   │  ├─ vrImage.png
   │  ├─ waterMark.png
   │  └─ weixin.png
   └─ version.ui.json

:::

<br/><br/>

## 注意事项

### node_modules安装
---
程序中部分node_modules模块由SDK供应商提供，无法直接通过`npm install`安装。  
故程序从git仓库克隆后，直接解压根目录下压缩文件【node_modules】即可

<br/><br/>





### 旧版VR路径兼容问题
---
由于旧版VR采用原始html编写，存在多个页面。新版VR重构后采用单页面形式，所有模块功能整合至`index.html`一个页面，但仍需兼容多种URL。
具体路径如下：  
* **二手房：** `/`  (默认为根目录)   
* **新房：** `/newprop/estate.html`  (只兼容路径，实际代码和根目录下`index.html`一致)   
* **香港中原定制：** `/hk.html`   (只兼容路径，实际代码和根目录下`index.html`一致)   

<br/><br/>

### 香港中原定制版VR
---
针对香港中原方定制的页面，主要对VR进行了功能精简，支持通过参数隐藏部分页面组件（重构后的VR版本已将此页面整合到index.html，目前所有VR页面都已支持下列参数，但理论只有香港中原会使用到）

**线上环境引用URL示例：**   
<https://vr.house730.com/hk.html?vid=hong_d1427c1c-fba1-414c-93d9-66de672cd7c3&staff=0&ruler=0&area=0&unit=0>   
**UAT环境引用URL示例）：**   
<https://esf.centanet.com/hk.html?vid=hong_d1427c1c-fba1-414c-93d9-66de672cd7c3&staff=0&ruler=0&area=0&unit=0>   

::: warning 注意
vid为VR数据包的原始VID，目前主要使用此参数。若传pid，则先查询house730对应的楼盘信息，再查询VR。
当传vid时，不支持显示经纪人信息（无法通过楼盘查询经纪人）
:::
#### 具体URL参数说明： 
| **参数名称** | **释义**             | **是否必传** | **默认值** | **备注**                                     |
| ------------ | -------------------- | ------------ | ---------- | -------------------------------------------- |
| vid          | 原始vrid             | 是           | 无         | 和pid两者需必传一个                          |
| pid          | house730中对应楼盘id | 是           | 无         | 和vid两者需必传一个                          |
| lang         | 页面展示语言         | 否           | hk         | 繁体:hk  简体:cn 英文:en                     |
| play         | 是否显示自动播放按钮 | 否           | 1          | 默认显示 传0不显示                           |
| ruler        | 是否显示标尺按钮     | 否           | 1          | 默认显示 传0不显示                           |
| unit         | 是否显示单位转换按钮 | 否           | 1          | 默认显示 传0不显示                           |
| staff        | 是否显示默认经纪人   | 否           | 1          | 读取house730中经纪人<br> 默认显示，传0不显示 |
| logo         | 是否显示水印logo     | 否           | 1          | 默认显示 传0不显示                           |
| area         | 是否显示面积信息     | 否           | 1          | 默认显示 传0不显示                           |

<br/><br/>

### matterport-VR房源
---
部分VR数据来源于香港中原matterport合作方。因此当从API中取到的vrid包含matterport时，则停止加载123看房的SDK，直接在当前页面创建iframe
标签，铺满整屏并加载对应url。

<br><br>

## 发布测试环境流程

### 修改API连接地址
可通过修改`src/compents/house730/assets/common.js`路径下_api变量切换uat、prd环境的API地址   
默认规则：访问url中包含`vr.house730(线上生产域名)`时,请求生产环境API，其他场景下请求UAT环境API
```javascript
let _api = location.href.indexOf('vr.house730')==-1 ? '//uatapi.house730.com.cn/' : 'https://api.house730.com/';
```
<br/><br/>

### 构建测试包(生产环境通用)
在程序目录执行cmd命令`npm run build` 构建生产包,输出示例,出现打包文件明细 ,且无错误输出 则构建成功
构建文件路径： `项目根目录/dist/`
```shell
608> npm run build

> vrhouseweb@1.0.0 build E:\git-new\house730-vr-2.0\js\UI\VRHouseViewer\Source_house730_20200608
> node build/build.js

E:\git-new\house730-vr-2.0\js\UI\VRHouseViewer\Source_house730_20200608\dist
| building for production...Browserslist: caniuse-lite is outdated. Please run:
npx browserslist@latest --update-db
Browserslist: caniuse-lite is outdated. Please run:
npx browserslist@latest --update-db
Hash: 65b942dae8ec917136be
Version: webpack 3.12.0
Time: 15403ms
                                                                           Asset       Size  Chunks                    Chunk Names
                                                static/fonts/icomoon.d58efa7.eot    11.6 kB          [emitted]
                                               static/fonts/icomoon.17be273.woff    11.5 kB          [emitted]
                                                  static/img/icomoon.7a38a8f.svg    40.4 kB          [emitted]
                                                static/fonts/icomoon.e113ffb.ttf    11.5 kB          [emitted]
                                                 static/img/house730.99926c3.png    10.2 kB          [emitted]
                             static/css/app.9fbcd2c53c8d5f74fe997aaa5f2eaf7c.css     157 kB       1  [emitted]         app
                                                                      index.html    3.58 kB          [emitted]
                                                       static/textures/close.svg    1.77 kB          [emitted]
                                                  static/css/jquery.flipster.css     9.3 kB          [emitted]
                                                   static/css/jquery.loading.css  480 bytes          [emitted]
                                                     static/js/common/aes.min.js    13.4 kB          [emitted]
                                                            static/css/theme.css    2.96 kB          [emitted]
                                          static/js/common/canvas-to-blob.min.js    1.43 kB          [emitted]
                                                 static/js/common/clipper.min.js     103 kB          [emitted]
                                                static/js/common/detector.min.js    2.92 kB          [emitted]
                                                          static/i18n/index.json    2.75 kB          [emitted]
                                                       static/i18n/nameDict.json    4.36 kB          [emitted]
                                                    static/js/common/linq.min.js    34.7 kB          [emitted]
                                                         static/js/common/md5.js    12.8 kB          [emitted]
                                                    static/js/common/pako.min.js      46 kB          [emitted]
                                                    ......


  Build complete.

  Tip: built files are meant to be served over an HTTP server.
  Opening index.html over file:// won't work.

PS E:\git-new\house730-vr-2.0\js\UI\VRHouseViewer\Source_house730_20200608>
```
<br/><br/>

### 测试环境部署
将构建好的文件，路径：`项目根目录/dist`下的所有文件 拷贝至28、45服务器的的`D:\WebRoot\empty`文件夹即可,自动生效




<br/><br/>

## 发布生产环境流程




### 构建生产包(同测试环境)
和测试环境构建步骤一致，在程序目录执行cmd命令`npm run build` 构建生产包,输出示例,出现打包文件明细 ,且无错误输出 则构建成功
构建文件路径： `项目根目录/dist/`


---

### 生产环境部署
将构建好的文件，路径：`项目根目录/dist`下的所有文件 拷贝至214、218服务器的的`C:\webroot\house730-VR`文件夹即可,自动生效









