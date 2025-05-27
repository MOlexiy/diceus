import { Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: 'account', component: AccountComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'account', pathMatch: 'full' },
  { path: '**', redirectTo: 'account' },
];
