import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registationForm = new FormGroup({
    UserName : new FormControl(''),
    Password : new FormControl(''),
    ConfirmPassword : new FormControl(''),
    address: new FormGroup({
      city : new FormControl(''),
      State: new FormControl(''),
      PostalCode : new FormControl ('')
    })
  });
  loadApiData(){
    this.registationForm.setValue({
      UserName: 'Vikram',
      Password: 'testqw',
      ConfirmPassword: 'testqw',
      address: {
        city : 'city',
        State : 'State',
        PostalCode : '123456'
      }
    })
  }
}
