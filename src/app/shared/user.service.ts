import { Injectable } from '@angular/core';
import { User } from '../models/user';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Login } from '../models/login';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url:string = "http://localhost:3000/"
  public loggedIn:boolean = false
  public user:User

  constructor(private http: HttpClient) { }

  public register(user:User):Observable<Object>{
    return this.http.post<object>(`${this.url}register`, user)
  }

  public login(login:Login):Observable<Object>{
    
    return this.http.post<object>(`${this.url}login`, login)
  }

  public updateUserData(user:User):Observable<Object>{
    return this.http.put<object>(`${this.url}user`, user)
  }



}
