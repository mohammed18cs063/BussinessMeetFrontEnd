import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot,Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private routes : Router){}
  canActivate(
    _next: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot):  boolean {
      if(sessionStorage.getItem('emailId')!= null){
    return true;
      }
      else
      {
        this.routes.navigate(['/login']);
        return false;
      }
  }
  
}