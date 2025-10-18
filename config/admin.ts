export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
    options: {
      expiresIn: '7d',
    },
    sessions: {
      maxRefreshTokenLifespan: '7d',
      maxSessionLifespan: '7d',
    },
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },
  flags: {
    nps: env.bool('FLAG_NPS', false),
    promoteEE: env.bool('FLAG_PROMOTE_EE', false),
  },
  url: env('PUBLIC_URL', 'http://localhost:1337'),
  serveAdminPanel: true,
});
