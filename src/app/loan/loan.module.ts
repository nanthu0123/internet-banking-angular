import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material/card';

import { ViewAllLoanComponent } from './view-all-loan/view-all-loan.component';
import { LoanStatusComponent } from './loan-status/loan-status.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { PersonalLoanComponent } from './apply-loan/personal-loan/personal-loan.component';
import { HomeLoanComponent } from './apply-loan/home-loan/home-loan.component';
import { BusinessLoanComponent } from './apply-loan/business-loan/business-loan.component';


const routes: Routes = [
  { path: 'apply-loan', component: ApplyLoanComponent },
  { path: 'view-all-loan', component: ViewAllLoanComponent },
  { path: 'loan-status', component: LoanStatusComponent },
  { path: 'apply-loan/personal-loan', component: PersonalLoanComponent },
  { path: 'apply-loan/home-loan', component: HomeLoanComponent },
  { path: 'apply-loan/business-loan', component: BusinessLoanComponent },


];

@NgModule({
  declarations: [ViewAllLoanComponent, LoanStatusComponent, ApplyLoanComponent, PersonalLoanComponent, HomeLoanComponent, BusinessLoanComponent,],
  imports: [
    CommonModule,
    NgbModule,
    MatCardModule,
    RouterModule.forChild(routes),
  ]
})
export class LoanModule { }
