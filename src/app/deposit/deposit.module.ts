import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpeningDepositComponent } from './opening-deposit/opening-deposit.component';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

import { FDComponent } from './opening-deposit/fd/fd.component';
import { RDComponent } from './opening-deposit/rd/rd.component';


const routes: Routes = [
  { path: 'opening-deposit', component: OpeningDepositComponent },
  { path: 'opening-deposit/fd', component: FDComponent },
  { path: 'opening-deposit/rd', component: RDComponent },
];


@NgModule({
  declarations: [OpeningDepositComponent, FDComponent, RDComponent,],
  imports: [
    CommonModule,
    NgbModule,
    MatCardModule,
    FormsModule,
    MatTableModule,
    RouterModule.forChild(routes),
  ]
})
export class DepositModule { }
