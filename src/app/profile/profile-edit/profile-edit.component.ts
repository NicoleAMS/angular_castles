import { Component, OnInit } from '@angular/core';
import { FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { Profile2 } from '../profile';
import { Profile } from '../profile.model';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../_services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProfileService } from '../../_services/profile.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  profileForm: FormGroup;
  userUID;
  isNewProfile: boolean;
  userKey: string;
  profileKey: string;
  profile$: FirebaseListObservable<Profile2>;

  constructor(
    private authService: AuthService,
    private profileService: ProfileService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.userKey = this.route.snapshot.params['id'];
    this.profileKey = this.route.snapshot.params['key'];
    this.isNewProfile = this.profileKey == null;
    console.log('New Profile: ', this.isNewProfile, this.profileKey);
    this.authService.user$.forEach(user => this.userUID = user.uid);
    this.initForm();
  }

  onSubmit() {
    const profile = new Profile(
      this.profileForm.value['firstName'],
      this.profileForm.value['lastName'],
      this.profileForm.value['avatar'],
      this.userKey
    );
    console.log('onSubmit', profile);
    if (!this.isNewProfile) {
      console.log('User UID: ', this.profileKey);
      console.log('onSubmit', profile);
      this.profileService.updateProfile(this.profileKey, profile);
    } else {
      console.log('onSubmit', profile);
      this.saveProfile(profile);
    }
  }

  saveProfile(profile: Profile) {
    console.log('save Profile');
    const save: any = this.isNewProfile ? this.profileService.saveProfile(profile) :
    this.profileService.updateProfile(this.profileKey, profile);
    save.then(_ => this.router.navigate(['/profile']));
  }

  private initForm() {
    const firstName = '';
    const lastName = '';
    const email = '';
    const avatar = '';

    this.profileForm = new FormGroup({
      'firstName': new FormControl(firstName, Validators.required),
      'lastName': new FormControl(lastName),
      'avatar': new FormControl(avatar)
    });

  }

}
