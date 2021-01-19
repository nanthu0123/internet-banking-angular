import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { HelpAndSupportComponent } from './help-and-support.component';
import { DisputeTransactionComponent } from './dispute-transaction/dispute-transaction.component';
import { ChatbotComponent } from './chatbot/chatbot.component';

const routes: Routes = [
  { path: '', component: HelpAndSupportComponent },
  { path: 'dispute-transaction', component: DisputeTransactionComponent },
  { path: 'chatbot', component: ChatbotComponent },
]

@NgModule({
  declarations: [HelpAndSupportComponent, DisputeTransactionComponent, ChatbotComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatStepperModule,
    NgbModule,
    RouterModule.forChild(routes),
  ]
})
export class HelpAndSupportModule { }
