import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../app/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

        constructor(
            private _userService: UserService,
            private _router: Router
        ){}
        canActivate():boolean{
            if (this._userService.loggedIn()) {
                return true
            }

            this._router.navigate(['/signIn'])
            return false
        }
        
}
