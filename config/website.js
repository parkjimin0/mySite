const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Jimin Park - Fullstack Developer', // Navigation and Site Title
  siteTitleAlt: 'Jimin', // Alternative Site title for SEO
  siteUrl: 'jiminpark.ga', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  // siteLogo: '', // Used for SEO and manifest
  siteDescription: `Jimin Park's Portfolio`,

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@Jimin', // Twitter Username
  ogSiteName: 'Jimin', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
