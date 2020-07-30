import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user'
import { UserService } from '../../services/user.service'
import { Global } from '../../services/global'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [UserService]
})
export class SignUpComponent implements OnInit {
      public url: string
      public user: User
      public signUpUser


      constructor(
          private _userService: UserService,
          private _router: Router 
      ) {
          this.url = Global.url
          this.user = new User('', '', '', '', '', '', '')
      }

      ngOnInit(): void {
      }

      onSubmit(form){
          //Save User
          this._userService.signUpUser(this.user).subscribe(
              response =>{
                  console.log(response)
                  localStorage.setItem('token', response.token)
                  this._router.navigate(['/profile'])
                  form.reset()
              },
              error =>{
                  console.log(<any>error)
              }
          )
      }
}
