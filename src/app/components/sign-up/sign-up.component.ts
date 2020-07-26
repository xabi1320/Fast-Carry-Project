import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user'
import { UserService } from '../../services/user.service'
import { Global } from '../../services/global'

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
          private _userService: UserService
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
                  this.signUpUser = response.user
                  form.reset()
              },
              error =>{
                  console.log(<any>error)
              }
          )
      }
}
