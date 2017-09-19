import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {
    token = null;
    alertMessage = false;
    welcomeMessage = '';
    logoutMessage = '';
    isAdmin = false;

    constructor(private router: Router, private http: Http) {}

    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(
            response => {
                response.getIdToken().then((token: string) => {
                    console.log(response);
                    this.token = token;
                    return this.http.post('https://angular-castles.firebaseio.com/users.json?auth=' + this.token, response.email);
                });
                this.signinUser(email, password);
            }
        )
        .catch(
            error => console.log(error)
        );
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            response => {
                // console.log(response);
                this.alertMessage = true;
                // console.log(this.alertMessage);
                this.welcomeMessage = 'Welcome, ' + email;
                this.router.navigate(['/']);
                const currentUser = firebase.auth().currentUser;
                if (currentUser.email === 'fred@hotmail.com') {
                    this.isAdmin = true;
                }
                currentUser.getIdToken()
                .then(
                    (token: string) => {
                        this.token = token;
                        console.log(this.token);
                        localStorage.setItem('savedToken', this.token);
                    }
                );
            }
        )
        .catch(
            error => console.log(error)
        );

    }

    signout() {
        firebase.auth().signOut();
        this.alertMessage = true;
        this.logoutMessage = 'Successfully logged out';
        // console.log(this.logoutMessage);
        this.token = null;
        this.router.navigate(['/']);
    }

    getToken() {
        firebase.auth().currentUser.getIdToken()
        .then(
            (token: string) => this.token = token
        );
        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }

}
