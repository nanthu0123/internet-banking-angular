import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-satus',
  templateUrl: './card-satus.component.html',
  styleUrls: ['./card-satus.component.scss']
})
export class CardSatusComponent implements OnInit {
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
