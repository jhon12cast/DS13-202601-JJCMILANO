import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { CoffeeScreen } from './screens/coffee-screen/coffee-screen';
import { LoginScreen } from './screens/login-screen/login-screen';
import { DashboardScreen } from './screens/dashboard-screen/dashboard-screen';

export const routes: Routes = [
  { path: '', component: CoffeeScreen },
  { path: 'login', component: LoginScreen },
  { path: 'dashboard', component: DashboardScreen, canActivate: [authGuard] },
  { path: '**', redirectTo: '' },
];
