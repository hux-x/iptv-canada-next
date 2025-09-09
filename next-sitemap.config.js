// eslint-disable-next-line @typescript-eslint/no-require-imports


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

 
};
