import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {}

    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //     return this.authService.isAuthenticated();
    // }

    canActivate(): Observable<boolean> {
        return this.authService.user$.map(user => {
            if (user && user.uid) {
                return true;
            } else {
                this.router.navigate(['/']);
                return false;
            }
        });
    }
}

