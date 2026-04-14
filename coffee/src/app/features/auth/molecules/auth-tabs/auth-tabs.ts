import { Component, input, output } from '@angular/core';

export type AuthTabId = 'login' | 'register';

@Component({
  selector: 'app-auth-tabs',
  templateUrl: './auth-tabs.html',
  styleUrl: './auth-tabs.css',
})
export class AuthTabs {
  readonly active = input.required<AuthTabId>();
  readonly tabChange = output<AuthTabId>();

  select(id: AuthTabId): void {
    this.tabChange.emit(id);
  }
}
