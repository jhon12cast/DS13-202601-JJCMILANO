import { Component } from '@angular/core';
import { LoginTemplate } from '../../features/auth/templates/login-template/login-template';

@Component({
  selector: 'app-login-screen',
  imports: [LoginTemplate],
  templateUrl: './login-screen.html',
})
export class LoginScreen {}
