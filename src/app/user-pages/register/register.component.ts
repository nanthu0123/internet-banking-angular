import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  url_adharFront: String | ArrayBuffer = '';
  url_adharBack: String | ArrayBuffer = '';
  url_pan: String | ArrayBuffer = '';
  url_photo: String | ArrayBuffer = '';

  onSelectAdharFront(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url_adharFront = event.target.result;
      }
    }
  }

  onSelectAdharBack(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => {
        this.url_adharBack = event.target.result;
      }
    }
  }

  onSelectPan(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => {
        this.url_pan = event.target.result;
      }
    }
  }

  onSelectPhoto(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => {
        this.url_photo = event.target.result;
      }
    }
  }
}
