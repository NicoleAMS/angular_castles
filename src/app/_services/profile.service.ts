import { Injectable } from '@angular/core';
import { Profile2 } from '../profile/profile';
import { FirebaseObjectObservable, FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';
import { Profile } from '../profile/profile.model';


@Injectable()
export class ProfileService {
    profile$: FirebaseObjectObservable<Profile2>;
    profiles$: FirebaseListObservable<Profile2[]>;
    profileKey$ = this.route.snapshot.params['id'];

    constructor(private db: AngularFireDatabase, private route: ActivatedRoute) {
        this.profile$ = db.object('/profile');
        this.profiles$ = db.list('/profiles');
    }

    saveProfile(profile: Profile) {
        console.log('On Save Profile: ', profile);
        return this.profiles$.push(profile)
        .then(_ => console.log('profile saved!'))
        .catch(error => console.log('Something went wrong while saving the profile', error));
    }

    updateProfile(profileKey, profile: Profile) {
        console.log('profileKey: ', profileKey);
        console.log('profile: ', profile);
        return this.profiles$.update(profileKey, profile)
        .then(_ => console.log('Successfully updated profile!'))
        .catch(error => console.log('Something went wrong while updating the profile', error));
    }
}
