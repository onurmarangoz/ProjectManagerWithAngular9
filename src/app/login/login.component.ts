import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService) { }
  userName:string;
  password:string;
  ngOnInit(): void {
  }

  login(){
    this.userService.validateUser(this.userName,this.password);
    
  }

}
