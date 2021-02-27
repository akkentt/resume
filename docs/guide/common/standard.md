# 中原地产官网前端规范

## 命名规范  
<br />

### 1.文件名称、URL，和路径有关的命名统一使用小写
---
部分系统对大小写敏感，例如大小写混写的文件，在windows下正常访问，在linux下会找不到文件。  
另外，域名统一小写有利于SEO优化(搜索引擎对URL的大小写是敏感的)  
<br />
<br />






### 2.变量定义统一使用驼峰命名法
---
根据google以及各大前端框架推行的命名标准，javascript变量名统一使用小驼峰式命名法，即首字母小写，后续单词大写；类名则统一使用大驼峰命名法。  
从后端取参数，则严格遵循后端规则，采用大驼峰式命名法，以便于区分自定义字段与后端返回字段。  
css统一使用全小写，并且-为分隔符。
```javascript
// js命名示例：
let studentSex="男";
let userName="张三";
```


```html
<!-- css引入命名示例，并带上控件简写或功能简称 -->
<button class="btn-primary"></button>
<nav class="nav-list"></nav>
```

<br />服务端参数示例：<br />
<a data-fancybox title="stand-1.png" href="/assets/stand-1.png" >![stand-1.png](/assets/stand-1.png)</a>
<br />
<br />







### 3.不使用除【_】和【-】以外的特殊字符
---
从规范的角度讲，js中应使用小驼峰分隔，css中小写，中划线【-】分隔，而中文相关，则使用下划线【_】分隔。<br />
<br />
<br />






### 4.命名简洁，不使用无意义变量名称，减少拼音命名的方式。
---
aa、bb、num1、num2等无意义的变量名称造成项目可读性变差，难以维护。<br />拼音容易产生歧义，常用的变量使用英文命名，而较为复杂 或特殊行业的词汇，可使用拼音代替。<br />

```javascript
//错误示范1：命名啰嗦
let createUserName ="张三";

//错误示范2:无意义命名
let aa="张三";
let bb="20";
let num1=20;
let num2=30;

//错误示范3:常用词汇使用拼音
let mingCheng=""

//正确写法
let userName="张三";
```
<br>

**反面教材示例:**  
使用拼音命名、arr1 arr2等无意义变量名、命名啰嗦、中英文数字混写、大小写混乱
<a data-fancybox title="stand-2.png" href="/assets/stand-2.png" >![stand-2.png](/assets/stand-2.png)</a>
<br>
<br>

---








## 资源引用规范

<br />

### 1.图标类使优先级font/svg > base64/css sprites > png/jpg
---
单色图标建议使用font形式引入，兼容性强，多色图标则建议使用svg。单个小图标，数量较少时，可以直接使用base64在css中通过背景图引入，其次才考虑直接使用png/jpg等<br />
<br />
<br />




### 2.使用相对路径，外部域名不声明连接协议名称
---
本地引用文件禁止填写绝对路径，若引用的为外部连接，应去掉头部协议名称，浏览器会自动根据当前根域名协议名称补充至url。<br />

```html

<!--本地资源引用-->
<img src="./../vue/img/blank-er.png">

<!-- 外部域名资源引用 -->
<img src="//static.centanet.com/vue/img/blank-er.png">

```

<br />
<br />




### 3.涉及官网房源的图片只允许使用以下10中尺寸
---
早期官网图片因尺寸可随意生成问题导致图片服务器被攻击而宕机，后续调整为只支持固定10种格式，在开发过程中，应根据使用场景选择对应的图片尺寸。

|  70x50  | 120x90  | 180x130 | 230x165 | 300x210  |
| :-----: | :-----: | :-----: | :-----: | :------: |
| 360x260 | 450x320 | 600x420 | 800x560 | 1000x700 |



### 4.根据访问环境，房源图应优先使用webp
---
webp采用了新的压缩方式，使得图片在原有的基础上占用的空间更小，节省宽带的同时提升客户端页面访问速度。<br />实际使用中，需判断设备是否支持webp，在支持的情况下，需在图片url后手动拼接【?x-oss-process=image/format,webp】后缀。CDN会自动将带有此标识的图片返回webp格式。<br />
<br />




### 5.图片类资源引用时src禁止取空值
---
任何场景下，尤其是做图片懒加载时，src属性必须有默认值，在低版本的IE和火狐浏览器中，img标签src属性为空时，会导致整个网页被重复载入。对于空的src， 这部分浏览器会认为这是一个缺省值，并自动将src补充为当前的路径再一次载入，将其内容作为图像二进制内容并试图展示。




### 6.慎用onerror监控图片加载
---
当图片加载出错时，往往使用onerror事件可以将错误的图片替换成默认图，但某些情况下资源迁移或其他原因导致默认图也无法加载时，会产生死循环，浏览器会无限循环触发onerror里的方法，导致页面卡死。onerror设置上限次数, 超过一定次数则清空onerror事件不再触发。


---


<br />

## HTML规范

<br />

### 1.使用代码格式化工具，风格统一
---
推荐安装vetur、prettier 代码风格管理工具，统一缩进风格，提升代码可读性<br />
<br />
<br />

### 2.编码统一使用utf-8
---
编写html前，应在meta标签中统一声明编码格式。例如
```html
<meta charset="utf-8">
```

<br />
<br />

### 3.使用语义化标签
---
语义化标签除了让代码结构更清晰，增强可读性以外，同时也有利于SEO，方便搜索引擎爬虫更好的理解网页结构。<br />

```html
<header>头部</header>

<nav>导航栏</nav>

<section>区块（有语义化的div）</section>

<main>主要区域</main>

<artical>主要内容</artical>

<aside>侧边栏</aside>

<footer>底部</footer>
```

<br />
<br />

### 4.禁止在html代码中写行内样式、内嵌js等
---
通常情况下，css样式应提取至单独的css文件并用过link标签引用，js文件也应提取至单独的文件通过script标签引用。<br />js、 css混写不利于项目维护，除了结构混乱降低可读性以外，这部分页面通常也不会被CDN缓存，增大文档体积，影响访问速度。<br />
<br />



### 5.禁止使用table布局
---
table布局兼容性强，容易上手，但标签结构多，尤其是嵌套布局（table嵌套table）情况下，无法维护，若出现布局变更，需要大量调整。同时table布局也不利于搜索引擎爬虫理解网页结构，不利于SEO。<br />
<br />


### 6.PC端应让浏览器默认以极速模式加载
---
国内大多数浏览器均使用兼容模式(IE)与极速模式(webkit)运行，应该meta标签中进行声明，让浏览器默认以极速模式加载<br />

```html
 <!-- 针对360浏览器，默认以极速模式运行 -->
<meta name="renderer" content="webkit">

<!-- 如果在IE中打开，默认使用最高标准渲染，如果安装了Chrome Frame框架，则使用chrome内核渲染 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">  
```

<br />




### 7.禁止使用iframe布局
---
iframe除了会阻塞页面加载，导致页面访问速度降低以外，搜索引擎也无法直接收录iframe里嵌套的内容，不利于SEO。其他情况下，也应尽量减少使用iframe标签


---

<br><br>


## CSS规范


### 1.样式文件分类
---
将公共样式、皮肤型样式、特殊型样式应分离开，按需引用。  
负责整体布局，盒子模型、组件相关的公共样式，放在单独的css文件。需统一风格的按钮、输入框等相关的，也可以放入公共样式。若有换肤功能需抽离出来放置单独的css文件中。   
<br />
<br />

### 2.使用class选择器，放弃id选择器
---
在优先级上，id选择器更高，但效率上，id和class并无实质性区别，id在一个页面中的唯一性导致了如果以id为选择器来写css，就无法重用。
<br />
<br />

### 3.不在css中引入额外字体
---
css中字体声明应统一使用微软雅黑，并使用英文'Microsoft YaHei'声明。加载其他字体除了会导致整个网页重绘降低速度以外，还会引起不必要的字体版权问题(开源图标字体引用除外)。  
<br />
<br />

### 4.尽量避免使用!important
---
!important会打乱原始的选择器优先级，声明了!important的属性优先级会提至最高，除去某些特殊的场景，尽量不要使用，滥用!important此会导致后期维护困难。  
<br />
<br />

### 5.避免使用css-hack
---
需要添加css-hack时，应尽可能考虑能否使用其他方式解决，通常情况下，都能使用其他手段解决。hack会导致维护成本的增加。<br />


---

<br />
<br />

## JS规范

<br />

### 1.使用严格模式
---
编写代码前，应在代码或方法体进行以下声明，告诉浏览器以严格模式执行javascript代码，使用严格模式可以避免代码执行过程中产生不必要的问题。<br />

```javascript
(function(){
  'use strict';

  // 编写代码..

}());
```

<br />

### 2.减少全局变量的使用
---
在代码执行过程中，命名空间污染可能产生不可预知的问题，条件允许情况下可使用es6的块级作用域，或使用立即执行函数(IIFE)构造私有变量，也可避免全局空间污染。

### 3.使用===代替==比较操作符
---
javascript弱类型语言的特征，使得所有类型的数据可以直接进行比较，在条件判断中，直接使用==操作符，某些场景下会导致程序进入错误的判断，而===为精确的比较操作符，不存在隐式转换，应使用===避免这一问题，<br />

```javascript
//使用==导致错误判断场景
console.log(0=='0');  //true
console.log(''==false); //true
console.log(null==undefined); //true
```

<br />

### 4.语句以分号结尾
---
由于浏览器的容错机制，代码结尾处不使用分号结尾并不会抛出异常，这是由于javascript有自动插入分号的机制(ASI)，某些场景下会引起一些奇怪的bug产生，另外这种不规范的写法会在代码加密 或压缩时，产生大量问题。即使主流的代码压缩插件帮我们做了处理，日常编写中应养成加分号的习惯。<br />

```javascript
//错误代码示例（理想结果：返回a+b的值）
return 
a + b

//浏览器ASI机制处理后
return;
a + b;

//代码被分为两个语句执行，return终止执行，a+b并不会执行

```

<br />

### 5.不在循环体内定义变量
---
循环内定义变量时，单次循环结束GC会回收该变量的分配的内存，下一轮循环又重新分配内存空间，数据较多时影响性能，虽然部分语言(例如java)在编译时已经做了这方面的优化，但平时开发过程中应该养成一个良好的习惯。

### 6.避免在mv*框架构建的项目中引入jquery
---
大多数mv*框架使用了虚拟dom，不需要用户做dom操作，使用jquery修改页面的值一般情况下并不会在mv*框架的数据容器中更新，为了引起不必要的问题，不建议引入jquery或其他同类型的库。

### 7.将重复的方法进行封装
---
尽可能的提升代码可复用性，将重复的方法进行封装除了后续改动方便以外，减小代码体积、方便同意管理，有利于提升网站访问速度。

### 8.尽可能减少对dom的操作和访问
---
在网页应用中，前端代码的性能瓶颈大多集中在DOM操作上。 在开发过程中，应尽量减少对DOM节点的读写。<br />
<br />
<br />
<br />


---


<br />
<br />

## vue相关规范


### 1.组件命名遵循规范
---
1. 有意义的名词、简短、具有可读性 <br />2. 以小写开头，采用短横线分割命名，或者以单词大写开头(PascalCase) 命名，组件名应该以高级别的单词开头，以描述性的修饰词结尾。  <br />3. 公共组件命名以公司名称简拼为命名空间(app-xx.vue)  <br />4. 文件夹命名主要以功能模块代表命名<br />

```javascript
//错误写法
Vue.component('header', {
  // ...
})

export default {
  name: 'Header',
  // ...
}


//正确写法
Vue.component('app-header', {
  // ...
})


export default {
  name: 'AppHeader',
  // ...
}
```

<br />
<br />
<br />

### 2.组件的 data 必须是一个函数。
---
当在组件中使用 data 属性的时候 (除了 new Vue 外的任何地方)，它的值必须是返回一个对象的函数，因为当 data 的值是一个对象时，它会在这个组件的所有实例之间共享。<br />1. 使用 data 里的变量时请先在 data 里面初始化  <br />2. 不命名多余数据  <br />3. 表单数据请包裹一层 form <br />

```javascript
//错误写法
export default {
  data: {
    foo: 'bar'
  }
}


//正确写法
new Vue({
  data() {
   	return {
   		foo: 'bar',
      formName{
          userName:'',
          checkVal:''
      }
  }
})
```

<br />
<br />

### 3.为v-for设置键值
---
v-for语句必须配合key使用，添加了key的循环代码块，能在渲染数据时，将DOM的变动率降到最低，从而提高页面加载速度。<br />

```html
<!--错误写法-->
<ul>
  <li v-for="todo in todos">
    {{ todo.text }}
  </li>
</ul>


<!--正确写法-->
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```

<br />
<br />

### 4.避免 v-if 和 v-for 用在一起
---
当 Vue 处理指令时，v-for 比 v-if 具有更高的优先级，某些场景下一小部分数据的修改会导致整个列表被遍历，页面渲染效率低下。<br />

```html
<!--错误写法-->
<ul>
  <li v-for="user in users" v-if="user.isActive" :key="user.id">
    {{ user.name }}
  </li>
</ul>
 
<ul>
  <li v-for="user in users" v-if="shouldShowUsers" :key="user.id">
    {{ user.name }}
  </li>
</ul>
  


 <!--正确写法-->
<ul>
  <li v-for="user in activeUsers":key="user.id">
    {{ user.name }}
  </li>
</ul>
 
<ul v-if="shouldShowUsers">
  <li v-for="user in users" :key="user.id">
    {{ user.name }}
  </li>
 </ul>
```

<br />

### 5.Prop定义应该尽量详尽
---
细致的 prop 定义有两个好处：<br />1.它们写明了组件的 API，所以很容易看懂组件的用法；<br />2.在开发环境下，如果向一个组件提供格式不正确的 prop，Vue 将会告警，以帮助你捕获潜在的错误来源。

```javascript
//错误写法
props: ['status']


//正确写法
props: {
  status: {
    type: String,
    required: true,
    validator: function (value) {
      return [
        'syncing',
        'synced',
        'version-conflict',
        'error'
      ].indexOf(value) !== -1
    }
  }
}
```


### 6.为组件样式设置作用域
---
对于应用来说，顶级 App 组件和布局组件中的样式可以是全局的，但是其它所有组件都应该是有作用域的。
```html
<!--错误写法-->
<template>
  <button class="btn btn-close">X</button>
</template>

<style>
.btn-close {
  background-color: red;
}
</style>



<!--推荐写法-->
<template>
  <button class="button button-close">X</button>
</template>

<!-- 使用 `scoped` 特性 -->
<style scoped>
.button {
  border: none;
  border-radius: 2px;
}

.button-close {
  background-color: red;
}
</style>

```

<br />
<br />

### 7.私有属性名规范
---
在插件、混入等扩展中始终为自定义的私有属性使用 $_ 前缀。并附带一个命名空间以回避和其它作者的冲突 (比如 $_yourPluginName_)。

```javascript
//错误写法
var myGreatMixin = {
  // ...
  methods: {
    update: function () {
      // ...
    }
  }
}

//正确写法
var myGreatMixin = {
  // ...
  methods: {
    $_myGreatMixin_update: function () {
      // ...
    }
  }
}
```

<br />
<br />
<br />


---


<br />

## 通用规范


### 1.必要的参数做本地配置
---
与APP不同的是，网页有且只能有一个版本的存在，在兼顾灵活性的同时，应考虑网站加载速度，例如接口请求地址、城市配置等长期固定的内容，可采取本地配置的方式部署，尽可能减小首屏加载时间。<br />偏业务性质的参数，则应由api配置服务统一管理，例如是否显示房评、是否开启举报入口、首页菜单入口等等应做到灵活配置。<br />
<br />
<br />

### 2.对静态资源文件做版本控制
---
官网大多数对外域名均接入了CDN，版本迭代时尤其是静态文件，应做好版本控制，防止紧急情况下bug修复时，客户端无法短时间内生效的问题。<br />
<br />
<br />

### 3.代码做好容错处理，养成良好的编程习惯
---
从服务端取数据时，应判断状态码(例如:ResultNo)再做进一步操作，取索引前应判断长度再做后续操作，避免出现特殊数据时页面崩溃。<br />
<br />
<br />

### 4.项目部署上线前，注释所有输出和调试信息
---
线上项目禁止出现alert()、console.log()、debugger等调试语句，影响用户体验，少部分浏览器不支持console.log会导致页面抛异常。<br />
<br />
<br />

### 5.禁止违规使用非授权字体
---
官网项目中。声明font-family统一使用"Microsoft YaHei"，禁止引用除图标文件以外的其他字体。涉及图片、logo中展示的文字，则应使用以下已购买版权字体：

| 方正兰亭超细黑简体 |    方正书宋简体    | 方正兰亭粗黑简体 |   方正正大黑简体    |
| :----------------: | :----------------: | :--------------: | :-----------------: |
|   方正兰亭黑简体   |    方正卡通简体    |  方正兰亭宋简体  |   方正特雅宋简体    |
| 方正兰亭圆简体_准  |    方正稚艺简体    |   方正正黑简体   |  方正硬笔行书简体   |
|     正粗倩简体     |  方正松风行书繁体  |   方正尚酷简体   |  方正汉真广标简体   |
|    方正黑体简体    | 方正苏新诗柳楷简体 |   方正格体简体   | 万正字迹-叶根友特简 |
|    方正仿宋简体    |    方正综艺_GBK    |                  |                     |

详情：<br />
<a data-fancybox title="stand-3.png" href="/assets/stand-3.png" >![stand-3.png](/assets/stand-3.png)</a>
<br />

### 8.URL统一小写并使用"/"结尾
---
以"/"结尾的域名更利于SEO，web服务器解析也更快，<br />

```
http://www.centanet.com/abc
服务器解析步骤：
1.搜索是否有abc文件存在，有则解析返回；
2.文件不存在，将abc视为目录处理，并返回abc目录下默认文件；

http://www.centanet.com/abc/
服务器解析步骤：
1.访问abc目录并返回默认文件。

搜索引擎爬取此url时同理，更快的解析有利于SEO收录。
```

<br />

### 9.第三方网站资源引用，需要进行报备
---
由于部分线下门店的网络防火墙限制，对第三方网站的连接屏蔽，导致页面加载出错等等，尤其是对内的项目，使用第三方资源前应报备。另一方面，滥用第三方插件、库等等，影响网站访问速度，使用前需进行报备，由负责人评估后再确定是否使用。

### 
