import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';

const backend = defineBackend({
  auth,
  data,
});

backend.addOutput({
  auth: {
    oauth: {
      identity_providers: ["GOOGLE"],
      domain: "https://remotecoderstest.auth.eu-north-1.amazoncognito.com",
      scopes: ["email", "profile", "openid"],
      redirect_sign_in_uri: ["http://localhost:4200/", "https://main.d5zu1rqvpr1ol.amplifyapp.com"],
      redirect_sign_out_uri: ["http://localhost:4200/", "https://main.d5zu1rqvpr1ol.amplifyapp.com"],
      response_type: "code"
    }
  }
});