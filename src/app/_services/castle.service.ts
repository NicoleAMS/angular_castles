import { Castle2, Image } from '../castles/castle';
import { Castle } from '../castles/castle.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Subject } from 'rxjs/Subject';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class CastleService {
    castle$: FirebaseObjectObservable<Castle2>;
    castles$: FirebaseListObservable<Castle2[]>;
    castleKey$ = this.route.snapshot.params['id'];
    startAt = new Subject();
    endAt = new Subject();

    constructor(private db: AngularFireDatabase, private route: ActivatedRoute) {
        this.castle$ = db.object('/castle');
        this.castles$ = db.list('/castles');
    }

    getCastle(castleKey) {
        console.log(castleKey);
        return this.db.object(`castles/${castleKey}`);
    }

    getCastles() {
        this.castles$.forEach(value => console.log(value));
        return this.db.list('/castles', {
            query: {
                orderByChild: 'name'
            }
        });
    }

    searchCastles(start, end, attribute) {
        console.log('Attribute: ', attribute);
        console.log('Start: ', start);
        return this.db.list('/castles', {
            query: {
                orderByChild: attribute,
                startAt: start,
                endAt: end
            }
        });
    }

    saveCastle(castle: Castle) {
        console.log(castle);
        return this.castles$.push(castle)
        .then(_ => console.log('Castle saved!'))
        .catch(error => console.log('Something went wrong while saving the castle', error));
    }

    updateCastle(castleKey, castle: Castle) {
        console.log('castleKey: ', castleKey);
        console.log('castle: ', castle);
        return this.castles$.update(castleKey, castle)
        .then(_ => console.log('Successfully updated castle!'))
        .catch(error => console.log('Something went wrong while updating the castle', error));
    }

    deleteCastle(castle) {
        return this.castles$.remove(castle.$key)
        .then(_ => console.log('Castle with ID ', castle.$key, ' successfully deleted!'))
        .catch(error => console.log('Something went wrong while deleting this castle: ', error));
    }
}
