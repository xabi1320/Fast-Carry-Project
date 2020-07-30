import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user'
import { UserService } from '../../services/user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers:[UserService]
})
export class SignInComponent implements OnInit {
     public user = {
        email: '',
        password: ''
     }

      constructor(
          private _userService: UserService,
          private _router: Router
      ) { }

      ngOnInit(): void {
      }

      signIn(): any{
          console.log(this.user)
          this._userService.signInUser(this.user).subscribe(
              response =>{
                  localStorage.setItem('token', response.token)
                  this._router.navigate(['/profile'])
              },
              err =>{
                  console.log(err)
              }
          )
      }
}
