import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ApplyNewLoanComponent } from './apply-new-loan/apply-new-loan.component';
import { ViewAllLoanComponent } from './view-all-loan/view-all-loan.component';
import { LoanStatusComponent } from './loan-status/loan-status.component';


const routes: Routes = [
  { path: 'apply-new-loan', component: ApplyNewLoanComponent },
  { path: 'view-all-loan', component: ViewAllLoanComponent },
  { path: 'loan-status', component: LoanStatusComponent },

]

@NgModule({
  declarations: [ApplyNewLoanComponent, ViewAllLoanComponent, LoanStatusComponent,],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class LoanModule { }
