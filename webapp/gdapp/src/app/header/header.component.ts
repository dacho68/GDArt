import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  currentUser: User;

  // constructor(private authenticationService: AuthenticationService) {
  //   this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  //  }

  constructor() {

  }
  
  ngOnInit() {
  }

  logout() {
    //this.authenticationService.logout();
  }

}
