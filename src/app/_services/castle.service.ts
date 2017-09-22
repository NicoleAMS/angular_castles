import { Castle2, Image } from '../castles/castle';
import { Castle } from '../castles/castle.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CastleService {
    castle$: FirebaseObjectObservable<Castle2>;
    castles$: FirebaseListObservable<Castle2[]>;

    castlesChanged = new Subject<Castle[]>();

    castles: Castle[] = [
    ];

    constructor(private db: AngularFireDatabase) {
        this.castle$ = db.object('/castle');
        this.castles$ = db.list('/castles');
    }

    getCastle(castleKey) {
        console.log(castleKey);
        return this.db.object(`castles/${castleKey}`);
    }

    getCastles() {
        this.castles$.forEach(value => console.log(value));
        return this.castles$;
    }

    // getCastles() {
    //     return this.castles.slice();
    // }

    saveCastle(castle: Castle) {
        console.log(castle);
        return this.castles$.push(castle)
        .then(_ => console.log('Castle saved!'))
        .catch(error => console.log('Something went wrong while saving the castle', error));
        // this.castles.push(castle);
        // this.castlesChanged.next(this.castles.slice());
    }

    updateCastle(index: number, updatedCastle: Castle) {
        this.castles[index] = updatedCastle;
        this.castlesChanged.next(this.castles.slice());
    }
}
