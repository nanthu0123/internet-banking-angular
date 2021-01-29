import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpeningDepositComponent } from './opening-deposit/opening-deposit.component';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material/card';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';


import { DepositAccountSummaryComponent } from './deposit-account-summary/deposit-account-summary.component';
import { NomineeComponent } from './nominee/nominee.component';
import { FDComponent } from './opening-deposit/fd/fd.component';
import { RDComponent } from './opening-deposit/rd/rd.component';
import { DepositSchemeComponent } from './deposit-scheme/deposit-scheme.component';
import { DepositConditionComponent } from './deposit-condition/deposit-condition.component';
import { BankDepositComponent } from './bank-deposit/bank-deposit.component';
import { UserDepositComponent } from './user-deposit/user-deposit.component';

const routes: Routes = [
  { path: 'opening-deposit', component: OpeningDepositComponent },
  { path: 'Deposit-summary', component: DepositAccountSummaryComponent },
  { path: 'Nominee', component: NomineeComponent },
  { path: 'opening-deposit/fd', component: FDComponent },
  { path: 'opening-deposit/rd', component: RDComponent },
  { path: 'deposit-scheme', component: DepositSchemeComponent },
  { path: 'deposit-condition', component: DepositConditionComponent },
  { path: 'bank-deposit', component: BankDepositComponent },
  { path: 'user-deposit', component: UserDepositComponent },
];


@NgModule({
  declarations: [OpeningDepositComponent, DepositAccountSummaryComponent, NomineeComponent, FDComponent, RDComponent, DepositSchemeComponent, DepositConditionComponent, BankDepositComponent, UserDepositComponent],
  imports: [
    CommonModule,
    NgbModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class DepositModule { }
