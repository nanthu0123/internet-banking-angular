import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ApplyNewLoanComponent } from './apply-new-loan/apply-new-loan.component';
import { ViewAllLoanComponent } from './view-all-loan/view-all-loan.component';


const routes: Routes = [
  { path: 'apply-new-loan', component: ApplyNewLoanComponent },
  { path: 'view-all-loan', component: ViewAllLoanComponent },

]

@NgModule({
  declarations: [ApplyNewLoanComponent, ViewAllLoanComponent,],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class LoanModule { }
