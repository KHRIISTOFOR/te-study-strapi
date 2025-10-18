export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
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
    nps: false,
    promoteEE: false,
  },
  url: env('PUBLIC_URL', 'http://localhost:1337'),
  serveAdminPanel: true,
  forgotPassword: {
    emailTemplate: {
      subject: 'Reset password',
      text: 'Reset password',
      html: 'Reset password',
    },
  },
});
