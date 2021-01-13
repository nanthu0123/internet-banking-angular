import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpeningDepositComponent } from './opening-deposit/opening-deposit.component';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DepositAccountSummaryComponent } from './deposit-account-summary/deposit-account-summary.component';

const routes: Routes = [
  { path: 'opening-deposit', component: OpeningDepositComponent}, 
  { path: 'Deposit-summary', component: DepositAccountSummaryComponent}, 
]

@NgModule({
  declarations: [OpeningDepositComponent, DepositAccountSummaryComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes),
  ]
})
export class DepositModule { }
