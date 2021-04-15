import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  //httpClint is use to connect with spring boot backend 
  constructor(private http : HttpClient) { }

  public doRegistration(reserve){
    return this.http.post("http://localhost:8080/api/user/reserve",reserve, {responseType : "text" as "json"});
  }
  

  public getUsers(){
    return this.http.get("http://localhost:8080/api/admin/reservation-all");
  }
  public deleteUser(email){
    return this.http.get("http://localhost:8080/api/admin/delete/"+email);
  }

  public getUserByFirstname(firstname){
    return this.http.get("http://localhost:8080/search/"+firstname);
  }

  // public deleteUser(email){
  //   return this.http.get("http://localhost:8080/delete/"+email);
  // }
}
