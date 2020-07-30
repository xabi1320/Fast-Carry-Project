import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [UserService]
})
export class ProfileComponent implements OnInit {

        constructor(
            private _userServices: UserService
        ) { }

        ngOnInit(): void {
        }

        logOut(){
            this._userServices.logout();
        }

}
