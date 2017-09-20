import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {
    token = null;
    alertMessage = false;
    user$: Observable<firebase.User>;
    welcomeMessage = '';
    logoutMessage = '';
    isAdmin = false;

    constructor(private router: Router, private http: Http, private afAuth: AngularFireAuth) {
        this.user$ = afAuth.authState;
    }

    signupUser(email: string, password: string) {
        // firebase.auth().createUserWithEmailAndPassword(email, password)
        this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(
            response => {
                // response.getIdToken().then((token: string) => {
                //     console.log(response);
                //     this.token = token;
                //     return this.http.post('https://angular-castles.firebaseio.com/users.json?auth=' + this.token, response.email);
                // });
                console.log('Successfully signed up!', response);
                this.signinUser(email, password);
            }
        )
        .catch(
            error => console.log('Signing up went wrong!', error)
        );
    }

    signinUser(email: string, password: string) {
        // firebase.auth().signInWithEmailAndPassword(email, password)
        this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(
            response => {
                console.log('Successfully logged in!', response);
                this.alertMessage = true;
                // console.log(this.alertMessage);
                this.welcomeMessage = 'Welcome, ' + email;
                this.router.navigate(['/']);
                // const currentUser = firebase.auth().currentUser;
                // if (currentUser.email === 'fred@hotmail.com') {
                //     this.isAdmin = true;
                // }
                // currentUser.getIdToken()
                // .then(
                //     (token: string) => {
                //         this.token = token;
                //         console.log(this.token);
                //         localStorage.setItem('savedToken', this.token);
                //     }
                // );
            }
        )
        .catch(
            error => console.log('Something went wrong while logging in!', error)
        );

    }

    signout() {
        // firebase.auth().signOut();
        this.afAuth.auth.signOut();
        this.alertMessage = true;
        this.logoutMessage = 'Successfully logged out';
        // console.log(this.logoutMessage);
        // this.token = null;
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
