import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'solidx.js',
  tagline: 'A New Way of 3D Programming',
  favicon: 'img/logo2.png',

  // Set the production url of your site here
  url: 'https://solidx.cloud',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/solidx-website/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'solidx-js', // Usually your GitHub org/user name.
  projectName: 'solidx.js', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: { sidebarPath: './sidebars.ts' },
        blog: { showReadingTime: true },
        theme: { customCss: './src/css/custom.css' },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social.jpg',
    navbar: {
      title: 'solidx.js',
      logo: { alt: 'Logo', src: 'img/logo.png' },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'component',
          position: 'left',
          label: '组件',
        },
        {
          href: 'https://github.com/solidx-js/solidx.js',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      // links: [
      //   {
      //     title: '文档',
      //     items: [{ label: '组件', to: '/component' }],
      //   },
      //   // {
      //   //   title: '社区',
      //   //   items: [
      //   //     {
      //   //       label: 'Stack Overflow',
      //   //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //   //     },
      //   //     {
      //   //       label: 'Discord',
      //   //       href: 'https://discordapp.com/invite/docusaurus',
      //   //     },
      //   //     {
      //   //       label: 'Twitter',
      //   //       href: 'https://twitter.com/docusaurus',
      //   //     },
      //   //   ],
      //   // },
      //   {
      //     title: '更多',
      //     items: [
      //       { label: '博客', to: '/blog' },
      //       { label: 'GitHub', href: 'https://github.com/solidx-js/solidx.js' },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} solidx.js <br> Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
