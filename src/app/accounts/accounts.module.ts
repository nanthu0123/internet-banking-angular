import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AccountOverviewComponent } from './account-overview/account-overview.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { TransactionPageComponent } from './transaction-page/transaction-page.component';



const routes: Routes = [
  { path: 'Account-overview', component: AccountOverviewComponent},
  { path: 'Fund-Transfer', component: FundTransferComponent},  
  { path: 'Transaction', component: TransactionPageComponent},  
];


@NgModule({
  declarations: [AccountOverviewComponent, FundTransferComponent, TransactionPageComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes),
  ]
})
export class AccountsModule { }
