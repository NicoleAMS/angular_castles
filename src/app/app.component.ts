import { Component, OnInit } from '@angular/core';
import { AuthService } from './_services/auth.service';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  auth: AuthService;

  constructor(private authService: AuthService, db: AngularFireDatabase) {
    this.auth = authService;
  }

  ngOnInit() {

    // firebase.auth().onAuthStateChanged( (user) => {
    //   if (user) {
    //     console.log("You are logged in");
    //     user.getIdToken().then((data) => {
    //       this.auth.token = data;
    //       console.log(this.auth);
    //     //   firebase.auth().signInWithCustomToken(token);
    //     });
    //     // console.log(user);
    //     // const token = localStorage.getItem('savedToken');
    //     // console.log(token);
    //     // firebase.auth().signInWithCustomToken(token);
    //   } else {
    //     console.log('You are not logged in');
    //   }
    // });
  }
}
