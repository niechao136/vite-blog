
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '我的博客',
  description: '基于 VitePress 构建的个人博客',
  base: '',

  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '文章', link: '/posts/first-post' },
    ],
    sidebar: [
      {
        text: '博客文章',
        items: [
          { text: '第一篇文章', link: '/posts/first-post' }
        ]
      }
    ]
  }
})
