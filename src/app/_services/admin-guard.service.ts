import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdminGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {}

    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //     return this.authService.isAdmin === true;
    // }

    canActivate() {
        return this.authService.user$.map(user => {
            console.log('User: ', user);
            if (user && user.uid && user.email === 'fred@hotmail.com') {
                return true;
            } else {
                this.router.navigate(['/']);
                return false;
            }
        });
    }
}
