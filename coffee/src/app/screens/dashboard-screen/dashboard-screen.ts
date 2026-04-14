import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-dashboard-screen',
  templateUrl: './dashboard-screen.html',
  styleUrl: './dashboard-screen.css',
})
export class DashboardScreen {
  private readonly loginService = inject(LoginService);

  protected readonly user = this.loginService.getCurrentUser();
}
