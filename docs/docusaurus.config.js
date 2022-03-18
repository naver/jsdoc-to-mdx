const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const remarkBreak = require("remark-breaks");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'jsdoc-to-mdx',
  tagline: 'jsdoc to mdx API document generator, powered with Docusaurus and jsdoc-to-markdown',
  url: 'https://naver.github.io',
  baseUrl: '/jsdoc-to-mdx/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'NAVER', // Usually your GitHub org/user name.
  projectName: 'jsdoc-to-mdx', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/naver/jsdoc-to-mdx/edit/main/docs/docs/',
          remarkPlugins: [remarkBreak],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/naver/jsdoc-to-mdx/edit/main/docs/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'logo',
          src: 'img/jsdoc2mdx.svg'
        },
        items: [
          {
            type: "doc",
            docId: "installation",
            label: "Tutorial",
            position: "left"
          },
          {
            type: "doc",
            docId: "api/DummyClass",
            label: "Demo",
            position: "left"
          },
          {
            type: 'localeDropdown',
            position: 'right'
          },
          {
            href: 'https://github.com/naver/jsdoc-to-mdx',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/naver/jsdoc-to-mdx'
              },
              {
                label: 'Issues',
                href: 'https://github.com/naver/jsdoc-to-mdx/issues'
              },
              {
                label: 'Naver Open Source',
                href: 'https://naver.github.io/'
              }
            ],
          },
        ],
        logo: {
          alt: 'jsdoc2mdx',
          src: 'img/jsdoc2mdx_white.svg',
          href: 'https://github.com/naver/jsdoc-to-mdx'
        },
        copyright: `Copyright © ${new Date().getFullYear()} NAVER, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

    i18n: {
      defaultLocale: "en",
      locales: ["en", "ko"]
    }
});
