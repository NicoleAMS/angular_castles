import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Response } from '@angular/http';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { Castle } from '../../castles/castle.model';

import { CastleService } from '../../_services/castle.service';
// import { DataStorageService } from '../../_services/data-storage.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-manage-castles',
  templateUrl: './manage-castles.component.html',
  styleUrls: ['./manage-castles.component.css']
})
export class ManageCastlesComponent implements OnInit {
  castleForm: FormGroup;
  castle$: FirebaseObjectObservable<Castle>;
  castleKey: string;
  isNewCastle: boolean;

  constructor(private route: ActivatedRoute,
    private castleService: CastleService, private router: Router) { }

  ngOnInit() {
    this.castleKey = this.route.snapshot.params['id'];
    this.isNewCastle = this.castleKey == null;
    this.initForm();
    console.log(this.isNewCastle);
  }

  getCastle() {
    this.castle$ = this.castleService.getCastle(this.castleKey);
  }

  onSubmit() {
    const prices = [this.castleForm.value['priceA'], this.castleForm.value['priceC'], this.castleForm.value['priceM']];
    const newCastle = new Castle(
      this.castleForm.value['name'],
      this.castleForm.value['images'],
      this.castleForm.value['description'],
      prices,
      this.castleForm.value['openingTimes'],
      this.castleForm.value['address'],
      this.castleForm.value['county']
    );
    if (!this.isNewCastle) {
      // this.castleService.updateCastle(this.castleKey, newCastle);
    } else {
      console.log('onSubmit', newCastle);
      this.saveCastle(newCastle);
      // this.castleService.saveCastle(newCastle);
    }
    // this.onSave();
  }

  saveCastle(castle: Castle) {
    const save: any = this.isNewCastle ? this.castleService.saveCastle(castle) :
    this.castleService.updateCastle(castle);
    save.then(_ => this.router.navigate(['admin/castles/new']));
  }

  onAddImage() {
    (<FormArray>this.castleForm.get('images')).push(
      new FormGroup({
        'url': new FormControl(null, Validators.required)
      })
    );
  }

  private initForm() {
    let castleName = '';
    let castleAddress = '';
    let castleCounty = '';
    let castleDescription = '';
    let castleOpeningTimes = '';
    const castlePrices = [];
    const castleImages = new FormArray([]);
    console.log(castlePrices[0]);

    if (!this.isNewCastle) {
      const castleObject = [];
      const castle = this.castleService.getCastle(this.castleKey).forEach(value => castleObject.push(value));
      // console.log('Values: ', castleObject[0].address);
      // console.log('Key: ', this.castleKey);
      castleName = castleObject[0].name;
      castleAddress = castleObject[0].address;
      castleCounty = castleObject[0].county;
      castleDescription = castleObject[0].description;
      castleOpeningTimes = castleObject[0].openingTimes;
      if (castleObject[0]['prices']) {
        for (const price of castleObject[0].prices) {
          castlePrices.push(price);
        }
      }
      console.log(castlePrices[3]);
      if (castleObject[0]['images']) {
        for (const image of castleObject[0].images) {
          castleImages.push(
            new FormGroup({
              'url': new FormControl(image.url, Validators.required)
            })
          );
        }
      }
    }

    this.castleForm = new FormGroup({
      'name': new FormControl(castleName, Validators.required),
      'address': new FormControl(castleAddress),
      'county': new FormControl(castleCounty),
      'description': new FormControl(castleDescription),
      'openingTimes': new FormControl(castleOpeningTimes),
      'priceA': new FormControl(castlePrices[0]),
      'priceC': new FormControl(castlePrices[1]),
      'priceM': new FormControl(castlePrices[2]),
      'images': castleImages
    });
  }

}

