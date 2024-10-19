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
        clientId: secret('144906124225-8em4dattokr58qjhnegndfarkgd3i2n6.apps.googleusercontent.com'),
        clientSecret: secret('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'),
        scopes: ['email', 'profile', 'openid'],
        attributeMapping: {
          email: 'email'
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
