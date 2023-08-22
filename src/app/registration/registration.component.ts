import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';

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
  
  data!:string
  constructor(
    private httpClient:HttpClient) {}
  OnSubmit() {
    const url = 'https://api.nancydrew.me/addUser?key=X9ZO2Lqf&login=' + this.login + '&password=' + this.password+ '&name='+this.name+'&email='+this.email + '&lang=kk'
    this.httpClient.get(url).subscribe((response) => this.data = JSON.stringify(response))
}}
