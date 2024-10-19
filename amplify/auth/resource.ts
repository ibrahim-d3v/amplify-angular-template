import { defineAuth, secret } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
    externalProviders: {
      google: {
        clientId: secret('GOOGLE_CLIENT_ID'),
        clientSecret: secret('GOOGLE_CLIENT_SECRET'),
        scopes: ['email', 'profile', 'openid'],
        attributeMapping: {
          email: 'email',
          fullname: 'names',
          givenName: 'given_name',
          familyName: 'family_name',
          profilePicture: 'picture',
        }
      },
      callbackUrls: [
        'http://localhost:4200/',
        'https://main.d5zu1rqvpr1ol.amplifyapp.com'
      ],
      logoutUrls: ['http://localhost:4200/', 'https://main.d5zu1rqvpr1ol.amplifyapp.com'],
    }
  },
});
