// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Software Designs and Algorithms',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/designs-and-algorithms/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  markdown: {
    mermaid: true,
  },

  favicon: 'img/favicon.ico',
  organizationName: 'EPAM',
  projectName: 'docusaurus',
  plugins: [require.resolve('docusaurus-lunr-search')],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: undefined,
          exclude: ['**/hometask/node_modules/**'],
          lastVersion: 'current',
          versions: {
            '1.0.0': {
              label: '1.0.0',
              path: '1.0.0',
              banner: 'none',
            },
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themes: ['@docusaurus/theme-mermaid'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Software Designs and Algorithms',
        logo: {
          alt: 'Software Designs and Algorithms',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://git.epam.com/ld-global-coordinators/js-programs/software-designs-and-algorithms-coursebook',
            label: 'Gitlab',
            position: 'right',
          },
          {
            type: 'doc',
            docId: 'contents',
            label: 'Start learning',
            position: 'right',
          },
          {
            type: 'doc',
            docId: 'Introduction/help',
            label: 'Help',
            position: 'right',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownItemsAfter: [],
            dropdownActiveClassDisabled: true,
          },
        ],
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} EPAM Systems. All Rights Reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      mermaid: {
        theme: { light: 'neutral', dark: 'forest' },
      },
      colorMode: {
        disableSwitch: true
      }
    }),
};

module.exports = config;
