import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(public http: HttpClient) { }
  baseUrl: string = "http://localhost:3000/signupUsersList";

  public getAll(){
    return this.http.get(this.baseUrl)
  }

  public getUser(email: any){
    return this.http.get(this.baseUrl + "?email=" + email)
  }

  public registerUser(data: any){
    return this.http.post(this.baseUrl, data)
  }
  setLogIn(user:string){
    localStorage.setItem("user",user);
  }
  getLogIn(){
    return localStorage.getItem("user");
  }
  isLoggedIn(){
    return this.getLogIn() != null && this.getLogIn() != '';
  }
  logOut(){
    localStorage.removeItem("user");
  }

  @Output() showMenuEvent: any = new EventEmitter;
  showMenu(value: string){
    this.showMenuEvent.emit(value);
  }
}
