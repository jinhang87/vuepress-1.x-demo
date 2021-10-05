const moment = require('moment');
moment.locale('zh-cn')

module.exports = {
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    lastUpdated: '更新时间',
    contributorsText: '作者',
    toggleDarkMode: '白天/夜间模式'
  },

  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          const moment = require('moment')
          // moment.locale(lang)
          moment.locale('zh-cn') //不支持多语言
          return `${moment(timestamp).format('LLLL')} (${moment(timestamp).fromNow()})`
        }
      }
    ],
    [
      '@vssue/vuepress-plugin-vssue',
      {
        platform: 'github',
        owner: 'jinhang87',
        repo: 'vuepress-1.x-demo',
        clientId: '8410d65aa67481b0725b',
        clientSecret: '3c6385cdaaf39f17fca8ab0e0d242d6dd06da9eb',
      }
    ]
  ],
}