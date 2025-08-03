// eslint-disable-next-line @typescript-eslint/no-require-imports
const { blogPosts } = require('./src/data/blogs');

module.exports = {
  siteUrl: 'https://canadianiptvservices.ca',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/admin/*'],

  transform: async (config, path) => {
    return {
      loc: path,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 0.7,
    };
  },

  additionalPaths: async () => {
    return blogPosts.map((post) => {
      const cleanId = post.id.replace(/^https?:\/\/[^/]+\/blogs\//, '');

      return {
        loc: `https://canadianiptvservices.ca/blogs/${cleanId}`,
        lastmod: new Date(post.date).toISOString(),
        changefreq: 'daily',
        priority: 0.7,
      };
    });
  },
};
