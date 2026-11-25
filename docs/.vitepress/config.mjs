import { defineConfig } from 'vitepress'

// GitHub Pages 项目站点的路径前缀。
// 仓库名如果是 <username>.github.io，改成 '/'
// 仓库名如果是 weipay-in-transit，保持 '/weipay-in-transit/'
const base = '/weipay-in-transit/'

export default defineConfig({
  base,
  title: 'WeiPay in Transit',
  description: '以写促学：WeiPay 的设计与 Liam 的支付认知，都在途中',
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '概念边界', link: '/concepts/' },
      { text: '决策记录', link: '/decisions/' },
      { text: '事故复盘', link: '/incidents/' },
      { text: '跨域连接', link: '/connections/' }
    ],

    sidebar: [
      {
        text: '概念边界',
        items: [
          { text: '授权 / 请款 / 清算 / 结算', link: '/concepts/auth-capture-clearing-settlement' },
          { text: '四种「退钱」的区别', link: '/concepts/refund-reversal-chargeback-dispute' },
          { text: '预授权期限：7天 / 71天 / 无限期', link: '/concepts/preauth-validity' }
        ]
      },
      {
        text: '决策记录',
        items: [
          { text: '为什么用 PaymentIntent 而非 Checkout Session', link: '/decisions/paymentintent-vs-checkout' },
          { text: '幂等键设在哪一层', link: '/decisions/idempotency-key-layer' },
          { text: '对账差异的处理优先级', link: '/decisions/reconciliation-priority' }
        ]
      },
      {
        text: '事故复盘',
        items: [
          { text: '（待写：挑一个真实踩过的坑）', link: '/incidents/' }
        ]
      },
      {
        text: '跨域连接',
        items: [
          { text: '从一次 Stripe 调用到银行间清算', link: '/connections/stripe-to-interbank' },
          { text: 'T+1 的 T 到底是谁的 T', link: '/connections/what-is-t-plus-1' }
        ]
      }
    ],

    search: {
      provider: 'local'
    },

    outline: {
      level: [2, 3],
      label: '本页目录'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    footer: {
      message: '用写作倒逼思考',
      copyright: 'Copyright © 2026 Liam'
    }
  }
})
