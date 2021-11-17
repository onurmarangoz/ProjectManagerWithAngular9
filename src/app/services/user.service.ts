import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  isValid: boolean = false;
  validateUser(userName:string, password:string):void{
    if (userName == "turkay" && password=="123456") {
       this.isValid = true;
     
    } 

  }

  logout(){
    this.isValid = false;
    
  }
}
