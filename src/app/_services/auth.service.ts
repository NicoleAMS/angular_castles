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
        this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(
            response => {
                console.log('Successfully signed up!', response);
                this.signinUser(email, password);
            }
        )
        .catch(
            error => console.log('Signing up went wrong!', error)
        );
    }

    signinUser(email: string, password: string) {
        this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(
            response => {
                console.log('Successfully logged in!', response);
                this.alertMessage = true;
                this.welcomeMessage = 'Welcome, ' + email;
                this.router.navigate(['/']);
            }
        )
        .catch(
            error => console.log('Something went wrong while logging in!', error)
        );

    }

    signout() {
        this.afAuth.auth.signOut();
        this.alertMessage = true;
        this.logoutMessage = 'Successfully logged out';
        this.router.navigate(['/']);
    }


    isAuthenticated() {
        const currentUser = this.afAuth.auth.currentUser;
        if (currentUser && currentUser.email === 'fred@hotmail.com') {
            this.isAdmin = true;
        }
        return currentUser != null;
    }

}
