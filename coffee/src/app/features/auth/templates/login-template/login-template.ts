import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthTabs, AuthTabId } from '../../molecules/auth-tabs/auth-tabs';
import { LoginFormOrganism } from '../../organisms/login-form-organism/login-form-organism';
import { RegisterFormOrganism } from '../../organisms/register-form-organism/register-form-organism';

@Component({
  selector: 'app-login-template',
  imports: [RouterLink, AuthTabs, LoginFormOrganism, RegisterFormOrganism],
  templateUrl: './login-template.html',
  styleUrl: './login-template.css',
})
export class LoginTemplate {
  protected readonly tab = signal<AuthTabId>('login');
  protected readonly notice = signal('');

  onTabChange(id: AuthTabId): void {
    this.tab.set(id);
    this.notice.set('');
  }

  onRegistered(): void {
    this.notice.set('Registro exitoso. Inicie sesión con su correo y contraseña.');
    this.tab.set('login');
  }
}
