
// eslint-disable-next-line @typescript-eslint/no-require-imports
const {blogPosts} = require('./src/data/blogs')
module.exports = {
  siteUrl: 'https://britishiptvservices.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/admin/*'], // if needed

  // Optional: Add transform to customize routes
  transform: async (config, path) => {
    return {
      loc: path,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 0.7,
    };
  },

  // Optional: If using dynamic routes, use this
  additionalPaths: async () => {
 

    return blogPosts.map((post) => ({
      loc: `https://britishiptvservices.com/blogs/${post.id}`,
      lastmod: new Date(post.date).toISOString(),
      changefreq: 'daily',
      priority: 0.7,
    }));
  },
};
