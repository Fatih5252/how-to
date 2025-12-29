// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'How to?',
  tagline: 'How to project i think',
  favicon: 'img/favico.ico',

  future: {
    v4: true,
  },

  url: 'https://howto.scnx-tutorials.de',

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
          admonitions: {
            keywords: ['my-custom-admonition'],
            extendDefaults: true,
          },
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
      image: 'img/favico2.ico',
      navbar: {
        title: 'How to?',
        logo: {
          alt: 'My Site Logo',
          src: 'img/favico.ico',
        },
        items: [
          {
            label: 'Intro',
            to: '/docs/intro',
            position: 'left',
          },
          {
            href: 'https://github.com/fatih5252/how-to',
            label: 'GitHub',
            className: 'navbar-item-github',
            position: 'left',
          },
          {
            type: 'dropdown',
            label: 'HowTo projects',
            position: 'right',
            items: [
              {
                label: 'Message Examples',
                href: 'https://message-examples.howto.scnx-tutorials.de'
              },
              {
                label: 'Fix Errors',
                href: 'https://errors.howto.scnx-tutorials.de'
              }
            ]
          }
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          src: '/img/logo.png',
          width: 200,
          alt: 'How to? Logo',
          href: '/',
        },
        links: [
          {
            title: 'How to?',
            items: [
              {
                label: 'Disclaimer',
                to: '/legal/disclaimer',
              },
              {
                label: 'Privacy',
                to: '/legal/privacy',
              },
              {
                label: 'Impressum',
                to: '/legal/impressum',
              },
              {
                label: 'Old Project',
                href: 'https://old.scnx-tutorials.de'
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
      algolia: {
        appId: '5TK6ZB9Z16',
        apiKey: 'c901d5acb927574ffb80164b3ac5f5d8',
        indexName: 'crawler_Howto',
        contextualSearch: true,
        searchPagePath: 'search',
        placeholder: 'Search docs...',
        searchParameters: {},
      },
    }),
};

export default config;
