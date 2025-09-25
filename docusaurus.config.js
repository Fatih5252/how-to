// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'How to?',
  tagline: 'How to project i think',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://howto.scnx-changelog.de',

  baseUrl: '/',

  organizationName: 'fatih5252',
  projectName: 'how-to',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          editUrl: ({ locale, docPath }) => {
            if (locale === 'de') {
              return `https://github.com/fatih5252/how-to/tree/main/i18n/de/docusaurus-plugin-content-docs/current/${docPath}`;
            }
            return `https://github.com/fatih5252/how-to/tree/main/docs/${docPath}`;
          },
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: ({ blogDirPath, blogPath, permalink }) => {
            return `https://github.com/fatih5252/how-to/tree/main/${blogDirPath}/${blogPath}`;
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'How to?',
        logo: {
          alt: 'My Site Logo',
          src: 'img/favicon.ico',
        },
        items: [
          {
            label: 'Intro',
            to: '/docs/intro',
            position: 'left',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/fatih5252/how-to',
            label: 'GitHub',
            className: 'navbar-item-github',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'How to?',
            items: [
              {
                label: 'Disclaimer',
                to: '/user/disclaimer',
              },
              {
                label: 'Privacy',
                to: '/user/privacy',
              },
              {
                label: 'Old Project',
                href: 'https://old.scnx-changelog.de'
              }
            ],
          },
          {
            title: 'Useful Links',
            items: [
              {
                label: 'Disocrd (scootkit german)',
                href: 'https://discord.gg/jzPpfjUAct',
              },
              {
                label: 'Discord (scootkit english)',
                href: 'https://discord.gg/RV4xSSdqT6'
              },
              {
                label: 'Discord (changelog)',
                href: 'https://discord.gg/XZGGb27zdE',
              },
              {
                label: 'SCNX (referral link)',
                href: 'https://scnx.app/referral?code=MHtz3IGIns4a8ntj0Dc7sk8kwnqWIP2D2SIC',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'SCNX Docs',
                href: 'https://docs.scnx.xyz',
              },
              {
                label: 'SCNX tips',
                href: 'https://scnx.tips',
              },
              {
                label: 'SCNX Faq',
                href: 'https://faq.scnx.app',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
