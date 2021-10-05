const moment = require('moment');

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
          moment.locale(lang)
          return moment(timestamp).fromNow()
        }
      }
    ],
    [
      '@vssue/vuepress-plugin-vssue',
      {
        platform: 'github',
        owner: 'jinhang87',
        repo: 'vuepress-2.x-demo',
        clientId: '1f48214cdd89cfeff3f3',
        clientSecret: 'd02dd04b51e3e7519000bab12caa2d56c559fc86',
      }
    ]
  ],
}