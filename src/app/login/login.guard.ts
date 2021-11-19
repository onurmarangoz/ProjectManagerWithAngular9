import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private userService: UserService, private router:Router) { }



  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let isLogged = this.userService.isValid;
    if (isLogged) {
      console.log("Giriş yapmış");
      return true;
    }

    console.log("Giriş yapmamış");
    this.router.navigate(["login"]);
    return false;


  }

}
