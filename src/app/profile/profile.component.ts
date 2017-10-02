import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    const userArray = [];
    this.authService.user$.forEach(user => this.user = user.uid);
    console.log(this.user);
  }

}
