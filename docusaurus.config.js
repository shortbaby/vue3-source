/*
 * @Author: bingwen
 * @Date: 2020-10-10 23:18:38
 * @LastEditors: bingwen
 * @LastEditTime: 2020-10-18 17:12:45
 * @Description: 
 * @FilePath: /vue3.0/vue3-source/docusaurus.config.js
 */
module.exports = {
  title: '前端训练营',
  tagline: '',
  url: 'https://shortbaby.github.io',
  baseUrl: '/vue3-source/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'shortbaby', // Usually your GitHub org/user name.
  projectName: 'vue3-source', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '前端训练营',
      logo: {
        alt: '秉文前端训练营',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'vue3 源码解密',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://shortbaby.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '解读系列',
          items: [
            {
              label: 'vue3',
              to: 'docs/',
            }
          ],
        },
        {
          title: '前端框架',
          items: [
            {
              label: 'vue3-next',
              href: 'https://vue3js.cn/docs/zh/',
            },
            {
              label: 'React',
              href: 'https://react.docschina.org/',
            }
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/shortbaby',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Bingwen FrontEnd Learning. All rights reserved`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
