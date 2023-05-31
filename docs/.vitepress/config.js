import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "LG-note",
  description: "A VitePress Site",
  base:'/blog/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '笔记', link: '/HTML/index.md' }
    ],
    smoothScroll: true,
    outlineTitle: 'In hac pagina',
    logo: 'https://api.iconify.design/logos:android-icon.svg?color=%23e0fffb',
    sidebar: getSidebar(),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/LYWsssr/blog' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  }
})
function getSidebar() {
  return [
    {
      text: '前端',
      items: [
        {
          text: 'HTML',
          collapsible: true,
          items: [
            { text: 'HTML基础', link: '/HTML/index.md', },
            { text: 'HTML进阶', link: '/HTML/advanced.md', },
            { text: 'CSS基础', link: '/CSS/' },
            { text: 'CSS进阶', link: '/CSS/advanced' },
            { text: 'Javascript基础', link: '/Javascript/' },
            { text: 'Javascript进阶', link: '/Javascript/advanced' },
            { text: '进阶', link: '/Javascript/nightmare' },
          ]
        },
        {
          text: 'Vue',
          items: [
            { text: 'Vue基础', link: '/Vue/' },
            { text: 'Vue进阶', link: '/Vue/advanced' },
          ]
        },
        // {
        //   text: '浏览器',
        //   items: [
        //     { text: '浏览器基础', link: '/Vue/' },
        //     { text: '浏览器进阶', link: '/Vue/advanced' },
        //     { text: '网络基础', link: '/Network/' },
        //     { text: '网络进阶', link: '/Network/advanced' },
        //     { text: '安全基础', link: '/Security/' },
        //     { text: '安全进阶', link: '/Security/advanced' },
        //   ]
        // },
        {
          text: 'webpack',
          items: [
            { text: 'webpack', link: '/Webpack/' }
          ]
        },
      ],
    },


  ]
}