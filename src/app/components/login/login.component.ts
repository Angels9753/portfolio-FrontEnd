import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form:FormGroup;
  constructor(private formbuilder:FormBuilder) { 
    this.form=this.formbuilder.group(
      {
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(4),Validators.maxLength(8)]],
        deviceInfo:this.formbuilder.group({
          deviceId:["17867868768"],
          deviceType:["DEVICE_TYPE_ANDROID"],
          notificationToken:["67657575eececc34"]             
        })
      }
    )
  }

  ngOnInit(): void {
  }
 
  get Email()
  {
    return this.form.get('email');
  }

 get Password()
  {
    return this.form.get('password');
  }
}
