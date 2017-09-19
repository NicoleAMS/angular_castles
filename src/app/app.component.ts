import { Component, OnInit } from '@angular/core';
import { AuthService } from './_services/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  auth: AuthService;

  constructor(private authService: AuthService) {
    this.auth = authService;
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDR0WO08kPd6H80FvPSsrjzysTfV49YB10",
      authDomain: "angular-castles.firebaseapp.com",
    });

    firebase.auth().onAuthStateChanged( (user) => {
      if (user) {
        console.log("You are logged in");
        user.getIdToken().then((data) => {
          this.auth.token = data;
          console.log(this.auth);
        //   firebase.auth().signInWithCustomToken(token);
        });
        // console.log(user);
        // const token = localStorage.getItem('savedToken');
        // console.log(token);
        // firebase.auth().signInWithCustomToken(token);
      } else {
        console.log('You are not logged in');
      }
    });
  }
}
