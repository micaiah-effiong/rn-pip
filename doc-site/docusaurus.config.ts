import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Rn-pip',
  tagline: 'Seamless Picture-in-picture library for React Native',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://micaiah-effiong.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/rn-pip/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'micaiah-effiong', // Usually your GitHub org/user name.
  projectName: 'rn-pip', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/micaiah-effiong/rn-pip',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/micaiah-effiong/rn-pip',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // site meta data
    metadata: [
      { name: 'keywords', content: 'react native, picture in picture, pip,' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    headTags: [
      {
        tagName: 'title',
        innerHTML: 'Rn-pip',
      },
      {
        tagName: 'meta',
        attributes: {
          name: 'description',
          content:
            "Enhance the user experience of your React Native apps using Rn-pip's Picture in Picture functionality.",
        },
      },
      {
        tagName: 'link',
        attributes: {
          rel: 'preconnect',
          href: 'https://micaiah-effiong.github.io/rn-pip/',
        },
      },
      {
        tagName: 'script',
        attributes: {
          type: 'application/ld+json',
        },
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org/',
          '@type': 'Organization',
          'name': 'Rn-pip',
          'url': 'https://github.com/micaiah-effiong/rn-pip',
        }),
      },
    ],
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    // Replace with your project's social card
    navbar: {
      title: 'Rn-pip',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        // { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/micaiah-effiong/rn-pip',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
            {
              label: 'Installation',
              to: '/docs/getting-started/installation',
            },
            // {
            //   label: 'Playground',
            //   to: '/docs/getting-started/playground',
            // },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/micaiah-effiong/rn-pip',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Rn-pip. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['java', 'xml-doc'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
