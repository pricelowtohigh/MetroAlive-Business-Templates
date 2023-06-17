import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';
import  {MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  template: `
    <button justify-content="flex-end" mat-button class="button__login" (click)="handleLogin()">Log In</button>
  `
})
export class LoginButtonComponent {

  constructor(private auth: AuthService) {}

  handleLogin(): void {
    this.auth.loginWithRedirect({
      appState: {
        target: '/profile',
      },
      authorizationParams: {
        prompt: 'login',
      },
    });
  }

}
