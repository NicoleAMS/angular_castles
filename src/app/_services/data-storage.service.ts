import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { CastleService } from './castle.service';
import { AuthService } from './auth.service';

@Injectable()
export class DataStorageService {

    constructor(private http: Http, private castleService: CastleService, private authService: AuthService) {}

    storeCastles() {
        const token = this.authService.getToken();
        return this.http.put('https://angular-castles.firebaseio.com/castles.json?auth=' + token, this.castleService.getCastles());
    }

}
