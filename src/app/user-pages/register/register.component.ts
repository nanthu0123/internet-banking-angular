import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // main sections 
  country: Boolean = true;
  RegForm: Boolean = false;
  docPreview: Boolean = false;
  accountType: Boolean = false;
  notification: Boolean = false;
  // schemes sections
  currentAcc: Boolean = false;
  savingAcc: Boolean = false;
  fixedAcc: Boolean = false;
  // register page members
  aadharFrontName: string;
  aadharBackName: string;
  panName: string;
  photoName: string;



  constructor() { };

  ngOnInit() {
  }
  onCountryCard() {
    this.country = false;
    this.RegForm = true;
  }
  onRegister() {
    this.RegForm = false;
    this.docPreview = true;
  }
  onDocPreview() {
    this.docPreview = false;
    this.accountType = true;
  }
  onNotification() {
    this.notification = true;
    this.currentAcc = false;
    this.savingAcc = false;
    this.fixedAcc = false;

  }

  //account types to enable scheme sections
  onCurrent() {
    this.currentAcc = true;
    this.accountType = false;
  }
  onSavings() {
    this.savingAcc = true;
    this.accountType = false;
  }
  onFixed() {
    this.fixedAcc = true;
    this.accountType = false;
  }




  url_adharFront: String | ArrayBuffer = '';
  url_adharBack: String | ArrayBuffer = '';
  url_pan: String | ArrayBuffer = '';
  url_photo: String | ArrayBuffer = '';

  onSelectAdharFront(event) {
    this.aadharFrontName = event.target.value.replace(/^.*[\\\/]/, ''); //get file name from absolute path

    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url_adharFront = event.target.result;
      };
    }
  }

  onSelectAdharBack(event) {
    this.aadharBackName = event.target.value.replace(/^.*[\\\/]/, '');
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => {
        this.url_adharBack = event.target.result;
      };
    }
  }

  onSelectPan(event) {
    this.panName = event.target.value.replace(/^.*[\\\/]/, '');
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => {
        this.url_pan = event.target.result;
      };
    }
  }

  onSelectPhoto(event) {
    this.photoName = event.target.value.replace(/^.*[\\\/]/, '');
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => {
        this.url_photo = event.target.result;
      };
    }
  }
}
