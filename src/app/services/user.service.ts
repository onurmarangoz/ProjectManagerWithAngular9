import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router:Router) { }

  isValid: boolean = false;
  validateUser(userName:string, password:string):void{
    if (userName == "admin" && password=="123456") {
       this.isValid = true;
       this.router.navigate([""]);
    } 

  }

  logout(){
    this.isValid = false;
    
  }
}
