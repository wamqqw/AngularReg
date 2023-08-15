import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  name!:string
  login!:string;
  email!:any;
  password!:any
  
  OnSubmit() {}
  constructor(private httpClient:HttpClient) {}
  addUser() {
    const url = "https://api.nancydrew.me/addUser?key=X9ZO2Lqf&login=" + this.name + this.login + this.email + this.password +"&password=admin&name=admin&email=test@email.kz&lang=en"
    this.httpClient.get(url).subscribe((data:any) =>{
      this.name = data;
      this.login = data;
      this.email = data;
      this.password = data;
    }) 
  }
}
