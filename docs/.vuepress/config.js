//主要配置文件 
module.exports = {
    title:'fjq的博客' ,//页面的标题
    head: [ // 注入到当前页面的 HTML <head> 中的标签
         ['link', { rel: 'icon', href: '/spider.jpeg' }], // 增加一个自定义的 favicon(网页标签的图标)
      ],
      themeConfig: {
        logo: '/logo.jpeg',  // 左上角logo
        lastUpdated: '上次更新时间', // 最后一次更新时间(默认获取git提交时间)
        nav:[ // 导航栏配置,有几个导航, 就有几个对象
          {text: '首页', link: '/' },
          {
              text:'Web前端',
              items:[ // 下拉列表选项
                  {text:'JavaScript',link: '/pages/web/js/js中的数组.md'},
                  {text:'vue',link: '/pages/web/vue/路由守卫.md'}
              ]
          },
          {
              text:'面试',
              items:[
                {text:'跨域问题',link: '/pages/interview/跨域问题.md'},
                {text:'深拷贝浅拷贝',link: '/pages/interview/深拷贝浅拷贝.md'},
                {text:'闭包',link: '/pages/interview/闭包.md'},
              ]
          },
          {text:'我的掘金',link:'https://juejin.cn/user/4213756089601240'}    
        ],
        // 跳转到导航对应一级分类中的--左侧(侧边栏)导航
        // 注意: key要跟nav的link路径要匹配
        sidebar:{
            '/pages/web/':[
                {
                    title:'JavaScript',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [ // 每个都是一个侧边栏导航(元素1是上面路径拼接后的文件名, 元素2是左侧导航的名字)
                        ['js/js中的数组.md', '数组类型'],
                        ['js/js中this的指向.md', 'js中this的指向']
                      ] 
                },
                {
                    title:'vue',
                    collapsable: true,
                    sidebarDepth: 1,
                    children:[
                        ['vue/路由守卫.md','路由守卫']
                    ]
                }
            ],
            '/pages/interview/':[
                {
                    title:'面试小知识',
                    collapsable: true,
                    sidebarDepth: 1,
                    children:[
                        ['跨域问题.md','跨域问题'],
                        ['深拷贝浅拷贝.md','深拷贝浅拷贝'],
                        ['闭包.md','闭包'],
                        ['有趣的小问题.md','有趣的小问题'],
                    ]
                    
                }
            ],
            '/pages/course/':[
                {
                    title:'软件教程',
                    collapsable: true,
                    sidebarDepth: 1,
                    children:[
                        ['从0搭建自己的vuepress.md','从0搭建自己的vuepress']
                    ]
                }
            ]
        }
      },
}