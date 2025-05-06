import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user:any = null;
  register(userData:any) { 
    this.user = userData;
  }
  login(email:string,password:string):boolean{
    return this.user && this.user.email === email &&
    this.user.password === password;
  }
  getUser(){
    return this.user;
  }
  isLoggedIn():boolean{
    return !!this.user;
  }
}
