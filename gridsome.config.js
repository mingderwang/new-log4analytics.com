const purgecss = require("@fullhuman/postcss-purgecss");
const tailwind = require("tailwindcss");

const postcssPlugins = [
  tailwind("./tailwind.js")
];

if (process.env.NODE_ENV === "production") postcssPlugins.push(purgecss());

module.exports = {
  siteName: `Log4analytics.com`,
  titleTemplate: `%s - ELK`,
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/*.md',
        typeName: 'BlogPost',
        route: '/:slug/index.html/'
      }
    }
  ]
}
