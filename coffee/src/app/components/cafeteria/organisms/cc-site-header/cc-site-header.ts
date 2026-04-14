import { Component, HostListener, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CcIconBtn } from '../../atoms/cc-icon-btn/cc-icon-btn';
import { LoginService } from '../../../../services/login.service';

@Component({
  selector: 'app-cc-site-header',
  imports: [RouterLink, CcIconBtn],
  templateUrl: './cc-site-header.html',
  styleUrl: './cc-site-header.css',
})
export class CcSiteHeader {
  private readonly loginService = inject(LoginService);

  protected readonly menuOpen = signal(false);

  protected isSessionActive(): boolean {
    return this.loginService.isAuthenticated();
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
    document.body.style.overflow = this.menuOpen() ? 'hidden' : '';
  }

  closeMenu(): void {
    this.menuOpen.set(false);
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEsc(): void {
    if (this.menuOpen()) this.closeMenu();
  }

  onOverlayClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeMenu();
    }
  }
}
