import { defineConfig } from 'vitepress'




export default defineConfig({
  title: "Zap docs",
  base: "/zap-documentation/",
  cleanUrls: true,
  themeConfig: {
    search: {
    provider: "local",
    },
    nav: [
      { text: 'Zap docs', link: '/' },
      { text: 'RPC details', link: '/rpc-details' },
      { text: 'eth_ RPC API', link: '/eth-namespace' },
      { text: 'zap_ RPC API', link: '/zap-namespace' },
      { text: 'Wallet initialization', link: '/wallet-init' },

    ],

    sidebar: [
      {
        items: [
          { text: 'Zap docs', link: '/' },
          { text: 'RPC details', link: '/rpc-details' },
          { text: 'eth_ RPC API', link: '/eth-namespace' },
          { text: 'zap_ RPC API', link: '/zap-namespace' },
          { text: 'Wallet initialization', link: '/wallet-init' }
        ]
      }
    ],
    logo: {
      light: "/logo1-re.png",
      dark: "/logo1-re_white.png"
    },
    logoLink: "/",
    siteTitle: false
  },


},

)




/*
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Zap docs",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
*/