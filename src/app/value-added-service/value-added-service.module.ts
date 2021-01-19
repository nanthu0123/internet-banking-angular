import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BillPaymentComponent } from './bill-payment/bill-payment.component';
import { OtherFacilitiesComponent } from './other-facilities/other-facilities.component';

const routes: Routes = [
  { path: 'bill-payment', component: BillPaymentComponent },
  { path: 'other-facilities', component: OtherFacilitiesComponent },
]

@NgModule({
  declarations: [BillPaymentComponent, OtherFacilitiesComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes),
  ]
})
export class ValueAddedServiceModule { }
