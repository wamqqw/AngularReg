import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormInputsService } from '../form-inputs.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form!:FormGroup;
  
  constructor(
    private httpClient:HttpClient,
    public formBuilder:FormBuilder
    ) {
      this.form = this.formBuilder.group({
        login: [""],
        password:[""]
      });
    }
  
  login!: string;
  password!: any;

  info!:object;
  data!:string;
  
  onSubmit() {
    this.httpClient.get('https://api.nancydrew.me/authUser?key=X9ZO2Lqf&login=' + this.login + '&password=' + this.password).subscribe(
      (response)=> this.data = JSON.stringify(response)
      )
  }
}
