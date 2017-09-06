import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDR0WO08kPd6H80FvPSsrjzysTfV49YB10",
      authDomain: "angular-castles.firebaseapp.com",
    });
  }
}
