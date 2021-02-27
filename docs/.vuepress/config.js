module.exports = {
  base:"/resume/",
  title:"akkentt",
  lang:"zh-CN",
  dest:"dist",
  head:[
    ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js' }],
    ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.js' }],
    ['link', { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.css' }]
  ],
  themeConfig: {
    smoothScroll: true,
    displayAllHeaders: false, // 默认值：false
    navbar:false,
    nav:false,b: [
      {
        text: '中原官网指南',
        link: '/guide/centanet/webapp.html'
      },
      {
        text: 'HOUSE730指南',
        link: '/guide/house730/webapp.html'
      },
      {
        text: '工具类指南',
        link: '/guide/centanet/tools-cal.html'
      },
      {
        text: '官网前端规范',
        link: '/guide/common/standard.html'
      },
    ],
    sidebar: false,a:{
      "/guide/": [
        {
          title: "概览",
          collapsable: false,
          sidebarDepth: 1,
          children: ["index/"],
        },
        {
          title: "中原官网-移动站",
          collapsable: false,
          sidebarDepth: 3,
          children: ["centanet/webapp"],
        },
        {
          title: "中原官网-用户中心",
          collapsable: false,
          sidebarDepth: 3,
          children: ["centanet/passport"],
        },
        {
          title: "中原官网-微聊小程序端",
          collapsable: false,
          sidebarDepth: 3,
          children: ["centanet/chat-mp"],
        },
        {
          title: "中原官网-工具类",
          collapsable: false,
          sidebarDepth: 3,
          children: ["centanet/tools-cal","centanet/tools-entrust","centanet/tools-history","centanet/tools-vr","centanet/tools-iqtheme",],
        },
        // {
        //   title: "中原官网-微聊WEB端",
        //   collapsable: true,
        //   sidebarDepth: 3,
        //   children: ["centanet/chat-web"],
        // },
        {
          title: "HOUSE730-官网移动站",
          collapsable: false,
          sidebarDepth: 3,
          children: ["house730/webapp"],
        },
        {
          title: "HOUSE730-用户中心",
          collapsable: false,
          sidebarDepth: 3,
          children: ["house730/passport"],
        },
        {
          title: "730PMS-PC站",
          collapsable: false,
          sidebarDepth: 3,
          children: ["house730/pms-pc"],
        },

        {
          title: "730PMS-M站",
          collapsable: false,
          sidebarDepth: 3,
          children: ["house730/pms-m"],
        },
        {
          title: "HOUSE730-VR看房",
          collapsable: false,
          sidebarDepth: 3,
          children: ["house730/vr"],
        },
        {
          title: "官网前端规范",
          collapsable: false,
          sidebarDepth: 3,
          children: ["common/standard"],
        },
      ],
    },
  },
  plugins: [
    ['container', {
      type: 'vue',
      before: '<pre class="vue-container"><code>',
      after: '</code></pre>'
    }],
  ],
  markdown: {
    lineNumbers: false,
  },
};
