export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://te-study.com', 'http://localhost:3001', 'http://localhost:3000', 'https://te-study-strapi-production.up.railway.app']
    }
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  {
    name: 'strapi::session',
    config: {
      secure: false,
      httpOnly: false,
      sameSite: 'none'
    }
  },
  'strapi::favicon',
  'strapi::public',
];
