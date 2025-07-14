import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "卡西米尔唱片机使用文档",
  description: "bilibili直播用点歌机",
  srcDir: './docs',
  // markdown: {
  //   config(md) {
  //     const defaultCodeInline = md.renderer.rules.code_inline!
  //     md.renderer.rules.code_inline = (tokens, idx, options, env, self) => {
  //       tokens[idx].attrSet('v-pre', '')
  //       return defaultCodeInline(tokens, idx, options, env, self)
  //     }
  //   }
  // },
  sitemap: {
    hostname: 'https://wiki.biliaudiobot.com'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/AynaLivePlayer/AynaLivePlayer' }
    ],
    // 编辑链接
    editLink: {
      pattern: 'https://github.com/AynaLivePlayer/wiki/edit/main/docs/:path',
      text: '在GitHub编辑此页'
    },
    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-Present Aynakeya'
    },
    // 搜索
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '没有找到结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    },
    // 导航栏配置
    nav: [
      { text: '用户手册', link: '/user/getting-started/', activeMatch: '/user/'},
      // { 
      //   text: '开发者手册', 
      //   items: [
      //     { text: 'API文档', link: '/6-development/api/websocket' },
      //     { text: '贡献指南', link: '/6-development/contributing' }
      //   ]
      // },
      { text: '附录', link: '/appendix/changelog', activeMatch: '/appendix/' },
    ],

    // 侧边栏
    sidebar: {
      '/user': [
        {
          text: '快速入门',
          collapsed: true,
          items: [
            { text: '简介', link: '/user/getting-started/' },
            { text: '安装与升级', link: '/user/getting-started/installation' },
            { text: '视频教程', link: '/user/getting-started/video' },
            // { text: '首次配置', link: '/started/configuration' },
            // { text: '界面导览', link: '/started/interface' }
          ]
        },
        {
          text: '核心功能',
          collapsed: true,
          items: [
            { text: '歌源支持', link: '/user/features/source.md' },
            { text: '歌曲播放', link: '/user/features/player' },
            { text: '点歌功能', link: '/user/features/diange' },
            { text: '直播间连接', link: '/user/features/liveroom' },
            { text: '闲置歌单', link: '/user/features/playlist' }
          ]
        },
        {
          text: '信息展示',
          collapsed: true,
          items: [
            { text: '文本输出', link: '/user/features/textinfo' },
            { text: '网页输出', link: '/user/features/webinfo' }
          ]
        },
        {
          text: '其他功能',
          collapsed: true,
          items: [
            { text: '自动切歌(歌曲时长控制)', link: '/user/features/auto-skip' },
            { text: '黑名单管理', link: '/user/features/blacklist' },
            { text: '切歌命令', link: '/user/features/danmu/playnext' },
            { text: '音量命令', link: '/user/features/danmu/volume' }
          ]
        },
        {
          text: '教程',
          collapsed: true,
          items: [
            { text: '歌曲源登陆', link: '/user/tutorials/source_login' },
          ]
        },
        {
          text: '问题排查',
          collapsed: true,
          items: [
            { text: '常见问题', link: '/user/troubleshooting/faq' },
            { text: '文本输出', link: '/user/troubleshooting/textinfo' },
            { text: '网页输出', link: '/user/troubleshooting/webinfo' },
            { text: '其他', link: '/user/troubleshooting/other' },
          ]
        },
        {
          text: '其他',
          collapsed: true,
          items: [
            { text: '配置文件', link: '/user/others/config' },
          ]
        }
      ],
      '/appendix/': [
        {
          text: '更新日志',
          link: '/appendix/changelog'
        },
        {
          text: '收支一览',
          link: '/appendix/money'
        },
        {
          text: '效果展示',
          link: '/appendix/user_show'
        },
        {
          text: '相关链接',
          link: '/appendix/links'
        }
      ]
    }
  }
})
