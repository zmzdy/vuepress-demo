# 从0搭建自己的vuepress
## 简介
**Vuepress**是一个靠vue驱动的静态网页生成器, 可以把.md文件内容按照导航分类成对应的html网页, 一般可以用来开发技术文档和博客网站  
[vuepress中文文档](https://www.vuepress.cn/)  
> 建议你有vuecli等vue基础再来使用此文档  

## 目录搭建
coding之前，建议大家先了解markdown语法，为之后的文档撰写做铺垫：[md基础语法](https://juejin.cn/post/7020722270263836703)
1. 全局安装vuepress模块
```js
npm i vuepress -g 
```
2. 创建项目目录(并且进入此目录)
```js
mkdir vuepress-demo && cd vuepress-demo
```
3. 初始化项目目录的npm环境
```js
npm init -y
```
生成了package.json文件, 加入下面配置到此文件中添加启动命令
```js
"scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
}
```
4. 创建目录结构  
附上：方便了解更多附上官网详细目录结构---[官网推荐目录结构](https://www.vuepress.cn/guide/directory-structure.html)
```js
vuepress-demo //工程根目录
├─docs //博客目录
|  ├─README.md //博客首页的配置文件
|  ├─.vuepress //用于存放全局的配置、组件、静态资源等
|  |     ├─config.js //配置文件的入口文件
|  |     ├─public //静态资源目录
|  |     |   └logo.png //logo图片
|  ├─pages //.md文件存放的位置
|  |     ├─node //根据内容对.md文件进行分类管理   
├─package.json
```
> 其中有后缀名的为文件，无后缀名的为文件夹

## 博客首页
**vuepress**默认的主题提供了一个首页（Homepage）的布局 (用于 这个网站的主页)。想要使用它，需要在你的根级`README.md`指定`home:true`使用  
在/vuepress-demo/README.md写入内容
```js
---
home: true // 开启首页
heroImage: /logo.png // 首页logo
heroText: 乐在其中 // 主标题
tagline: null // 副标题
actionText: 快速拥有同款 → // 主页按钮文字 (如果不要主页按钮这两行可以注释掉)
actionLink: /pages/course/personalBlog.md // 点击按钮跳转路径(page为/开始)
features: // 底部简介
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```
> 注：你可以将相应的内容设置为null来禁用标题和副标题。

配置完成后，通过`npm run dev`启动查看首页效果:

![home](./images/home.png)
## 配置config.js
```js
module.exports = {
    title:'fjq的博客' ,//页面的标题
    head: [ // 注入到当前页面的 HTML <head> 中的标签
         ['link', { rel: 'icon', href: '/spider.jpeg' }], // 增加一个自定义的 favicon(网页标签的图标)
      ],
      themeConfig: {
        logo: '/logo.jpeg',  // 左上角logo
        nav:[ // 导航栏配置,有几个导航, 就有几个对象
          {text: '首页', link: '/' },
          {
              text:'Web前端',
              items:[ // 下拉列表选项
                  {text:'JavaScript',link: '/pages/web/js/js中的数组.md'},
              ]
          }      
        ],
        // 跳转到导航对应一级分类中的--左侧(侧边栏)导航
        // 注意: key要跟nav的link路径要匹配
        sidebar:{
            '/pages/web/js/':[
                {
                    title:'js基础知识',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [ // 每个都是一个侧边栏导航(元素1是上面路径拼接后的文件名, 元素2是左侧导航的名字)
                        ['js中的数组.md', 'js中的数组'],
                        ['js中this的指向.md', 'js中this的指向']
                      ] 
                }
            ]
        }
      },
      
      markdown: {
        lineNumbers: true, // 是否在每个代码块的左侧显示行号
      }
}
```
展示效果：
重新启动项目,访问http://localhost:8080即可查看博客项目网页
![jspage](./images/js_page.png)

注意: 修改配置和目录结构等, 不会热更新, 只会热更新.md文档里的内容  
注意: 如果报错, 请检查浏览器控制台报错信息  
你一可以通过git获取以上产物---[以上产物-git地址](https://gitee.com/zdydmv/vuepress-demo.git)