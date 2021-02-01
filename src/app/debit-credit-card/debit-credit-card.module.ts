import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatStepperModule } from '@angular/material/stepper';
import { PopoverModule } from "ngx-smart-popover";
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { ApplyNewCardComponent } from './apply-new-card/apply-new-card.component';
import { LostCardComplaintComponent } from './lost-card-complaint/lost-card-complaint.component';
import { CardSatusComponent } from './card-satus/card-satus.component';
import { StepperSelectionEvent } from '@angular/cdk/stepper';



const routes: Routes = [
  { path: 'apply-new-card', component: ApplyNewCardComponent },
  { path: 'lost-card-complaint', component: LostCardComplaintComponent },
  { path: 'card-satus', component: CardSatusComponent },

];

@NgModule({
  declarations: [ApplyNewCardComponent, LostCardComplaintComponent, CardSatusComponent],
  imports: [
    CommonModule,
    NgbModule,
    MatStepperModule,
    PopoverModule,
    MatDialogModule,
    MatCardModule,
    RouterModule.forChild(routes),
  ]
})
export class DepitCreditCardModule { }
