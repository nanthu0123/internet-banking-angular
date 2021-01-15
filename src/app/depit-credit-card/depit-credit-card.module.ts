import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { ApplyNewCardComponent } from './apply-new-card/apply-new-card.component';
import { LostCardComplaintComponent } from './lost-card-complaint/lost-card-complaint.component';
import { CardSatusComponent } from './card-satus/card-satus.component';



const routes: Routes = [
  { path: 'apply-new-card', component: ApplyNewCardComponent },
  { path: 'lost-card-complaint', component: LostCardComplaintComponent },
  { path: 'card-satus', component: CardSatusComponent },

]

@NgModule({
  declarations: [ApplyNewCardComponent, LostCardComplaintComponent, CardSatusComponent],
  imports: [
    CommonModule,
    NgbModule,
    MatRadioModule,
    MatExpansionModule,
    RouterModule.forChild(routes),
  ]
})
export class DepitCreditCardModule { }
