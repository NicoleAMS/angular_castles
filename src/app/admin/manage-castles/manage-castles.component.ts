import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { Castle } from '../../castles/castle.model';

import { CastleService } from '../../_services/castle.service';

@Component({
  selector: 'app-manage-castles',
  templateUrl: './manage-castles.component.html',
  styleUrls: ['./manage-castles.component.css']
})
export class ManageCastlesComponent implements OnInit {
  id: number;
  editMode = false;
  castleForm: FormGroup;

  constructor(private route: ActivatedRoute, private castleService: CastleService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
        // console.log(this.editMode);
      }
    );
  }

  onSubmit() {
    const newCastle = new Castle(
      this.castleForm.value['name'],
      this.castleForm.value['images'],
      this.castleForm.value['description'],
      this.castleForm.value['prices'],
      this.castleForm.value['openingTimes'],
      this.castleForm.value['address'],
      this.castleForm.value['county']
    );
    if (this.editMode) {
      this.castleService.updateCastle(this.id, newCastle);
    } else {
      this.castleService.addCastle(newCastle);
    }
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

    if (this.editMode) {
      const castle = this.castleService.getCastle(this.id);
      castleName = castle.name;
      castleAddress = castle.address;
      castleCounty = castle.county;
      castleDescription = castle.description;
      castleOpeningTimes = castle.openingTimes;
      if (castle['prices']) {
        for (const price of castle.prices) {
          castlePrices.push(price);
        }
      }
      if (castle['images']) {
        for (const image of castle.images) {
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
    console.log(this.castleForm);
  }

}
