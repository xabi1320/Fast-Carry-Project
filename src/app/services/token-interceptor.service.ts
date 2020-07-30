import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { UserService } from '../services/user.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {   

      constructor(
          private _userService: UserService
      ) { }

      intercept(req, next){
          let tokenizeReq = req.clone({
              setHeaders: {
                  authorization: `Bearer ${this._userService.getToken()}`
              }
          })
          return next.handle(tokenizeReq)
      }
    }
