import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'Accounts', loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule) },
  { path: 'Deposit', loadChildren: () => import('./deposit/deposit.module').then(m => m.DepositModule) },
  { path: 'user-pages', loadChildren: () => import('./user-pages/user-pages.module').then(m => m.UserPagesModule) },
  { path: 'error-pages', loadChildren: () => import('./error-pages/error-pages.module').then(m => m.ErrorPagesModule) },
  { path: 'loan', loadChildren: () => import('./loan/loan.module').then(m => m.LoanModule) },
  { path: 'debit-credit-card', loadChildren: () => import('./debit-credit-card/debit-credit-card.module').then(m => m.DepitCreditCardModule) },
  { path: 'value-added-service', loadChildren: () => import('./value-added-service/value-added-service.module').then(m => m.ValueAddedServiceModule) },
  { path: 'help-and-support', loadChildren: () => import('./help-and-support/help-and-support.module').then(m => m.HelpAndSupportModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
