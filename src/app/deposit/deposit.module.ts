import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpeningDepositComponent } from './opening-deposit/opening-deposit.component';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  { path: 'opening-deposit', component: OpeningDepositComponent}, 
]

@NgModule({
  declarations: [OpeningDepositComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes),
  ]
})
export class DepositModule { }
