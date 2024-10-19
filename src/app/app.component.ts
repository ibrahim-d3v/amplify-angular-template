import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { Amplify } from 'aws-amplify';
import outputs from '../../amplify_outputs.json';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';
import { fetchAuthSession, signInWithRedirect } from 'aws-amplify/auth';

const amplifyConfig = {
  ...outputs,
  oauth: {
    domain: 'https://remotecoderstest.auth.eu-north-1.amazoncognito.com',
    scope: ['email', 'profile', 'openid'],
    redirectSignIn: ['http://localhost:4200/', 'https://main.d5zu1rqvpr1ol.amplifyapp.com'],
    redirectSignOut: ['http://localhost:4200/', 'https://main.d5zu1rqvpr1ol.amplifyapp.com'],
    responseType: 'code'
  }
};

Amplify.configure(amplifyConfig);

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, TodosComponent, AmplifyAuthenticatorModule],
})
export class AppComponent {
  title = 'amplify-angular-template';

    
  constructor(public authenticator: AuthenticatorService) {
    Amplify.configure(outputs);
  }

  async ngOnInit() {
    try {
      const { tokens } = await fetchAuthSession();
      console.log('User is signed in');
    } catch (error) {
      console.log('User is not signed in');
    }
  }

  async signInWithGoogle() {
    try {
      await signInWithRedirect({ provider: 'Google' });
    } catch (error) {
      console.error('Error signing in with Google', error);
    }
  }
}
