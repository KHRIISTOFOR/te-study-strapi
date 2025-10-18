export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: ['*'],
      methods: ['*'],
      headers: ['*'],
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
      sameSite: 'none',
    }
  },
  {
    name: 'global::disable-secure-cookies',
    config: {},
  },
  'strapi::favicon',
  'strapi::public',
];
