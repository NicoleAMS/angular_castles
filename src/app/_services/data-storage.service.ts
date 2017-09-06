import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { CastleService } from './castle.service';

@Injectable()
export class DataStorageService {

    constructor(private http: Http, private castleService: CastleService) {}

    storeCastles() {
        return this.http.put('https://angular-castles.firebaseio.com/castles.json', this.castleService.getCastles());
    }
}
