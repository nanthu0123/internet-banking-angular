import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fd',
  templateUrl: './fd.component.html',
  styleUrls: ['./fd.component.scss']
})
export class FDComponent implements OnInit {

  form: boolean = true;
  schemes: Boolean = false;
  preview: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toSchemes() {
    this.form = false;
    this.schemes = true;
  }
  toPreview() {
    this.preview = true;
    this.schemes = false;
  }
}
