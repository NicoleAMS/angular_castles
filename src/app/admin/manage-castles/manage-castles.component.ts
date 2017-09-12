import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

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
    console.log(this.castleForm);
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
          console.log(image);
          castleImages.push(
            new FormGroup({
              'image': new FormControl(image)
            })
          );
          console.log(castleImages[0]);
        }
      }
    }
    this.castleForm = new FormGroup({
      'name': new FormControl(castleName),
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
