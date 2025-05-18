import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: '@eonova/utils',
  description: 'Some common tool functions',
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  lastUpdated: true,
  ignoreDeadLinks: 'localhostLinks',

  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: '快速上手', link: '/guide/introduction', activeMatch: '/guide/' },
      { 
        text: '工具函数', 
        items: [
          { text: '数组工具', link: '/guide/array/flattenArray' },
          { text: '日期工具', link: '/guide/date/getQuarter' },
          { text: '字符串工具', link: '/guide/string/capitalizeFirstLetter' }
        ] 
      },
    ],
  
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '简介', link: '/guide/introduction' },
            { text: '快速起步', link: '/guide/start' },
            { text: '所有函数', link: '/guide/all-in-one' },
          ],
        },
        {
          text: '函数',
          items: [
            {
              text: '数组工具',
              items: [
                { text: 'flattenArray（扁平化数组）', link: '/guide/array/flattenArray', },
                { text: 'getArrayMax（获取最大值）', link: '/guide/array/getArrayMax' },
                { text: 'mergeArr（合并数组）', link: '/guide/array/mergeArr' },
                { text: 'quickSort（快速排序）', link: '/guide/array/quickSort' }
              ]
            },
            {
              text: '日期工具',
              items: [
                { text: 'getQuarter（获取季度）', link: '/guide/date/getQuarter' },
                { text: 'getDayOfWeek（获取星期）', link: '/guide/date/getDayOfWeek' }
              ]
            },
            {
              text: '字符串工具',
              items: [
                { text: 'capitalizeFirstLetter（首字母大写）', link: '/guide/string/capitalizeFirstLetter' },
                { text: 'trimAll（全量去空格）', link: '/guide/string/trimAll' }
              ]
            }
          ]
        }
      ],
    },
    outline: [2, 3],

    footer: {
      message: 'Released under the MIT License.',
      copyright:
        'Copyright © 2025 <a href="https://github.com/eonova/utils">@eonova/utils</a>'
    },

    editLink: {
      pattern: 'https://github.com/eonova/utils/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    lastUpdated: {
      text: '本页更新时间',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/eonova/utils' }]
  }
})
