import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpeningDepositComponent } from './opening-deposit/opening-deposit.component';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material/card';

import { DepositAccountSummaryComponent } from './deposit-account-summary/deposit-account-summary.component';
import { NomineeComponent } from './nominee/nominee.component';
import { FDComponent } from './opening-deposit/fd/fd.component';
import { RDComponent } from './opening-deposit/rd/rd.component';

const routes: Routes = [
  { path: 'opening-deposit', component: OpeningDepositComponent },
  { path: 'Deposit-summary', component: DepositAccountSummaryComponent },
  { path: 'Nominee', component: NomineeComponent },
  { path: 'opening-deposit/fd', component: FDComponent },
  { path: 'opening-deposit/rd', component: RDComponent },
];


@NgModule({
  declarations: [OpeningDepositComponent, DepositAccountSummaryComponent, NomineeComponent, FDComponent, RDComponent],
  imports: [
    CommonModule,
    NgbModule,
    MatCardModule,
    RouterModule.forChild(routes),
  ]
})
export class DepositModule { }
