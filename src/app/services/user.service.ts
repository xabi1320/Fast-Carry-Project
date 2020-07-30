import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { User } from '../models/user'
import { Global } from './global'
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class UserService {
      public url: string

      constructor(
          private _http: HttpClient,
          private _router: Router
      ) { 
          this.url = Global.url
      }

      signUpUser(user: User): Observable<any>{
          let params = JSON.stringify(user)
          let headers = new HttpHeaders().set('Content-Type', 'application/json')

          return this._http.post(this.url+'signUp', params, {headers: headers})
      }

      signInUser(user): Observable<any>{
        let params = JSON.stringify(user)
        let headers = new HttpHeaders().set('Content-Type', 'application/json')

        return this._http.post(this.url+'signIn', params, {headers: headers})
    }

    loggedIn(){
        return !!localStorage.getItem('token')
    }

    logout(){
        localStorage.removeItem('token')
        this._router.navigate(['/signIn'])
    }

    getToken(){
        return localStorage.getItem('token')
    }
}
