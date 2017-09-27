import { Component, OnInit, DoCheck } from '@angular/core';
import { Castle2 } from '../castle';
import { CastleService } from '../../_services/castle.service';
import { DataStorageService } from '../../_services/data-storage.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-castles-list',
  templateUrl: './castles-list.component.html',
  styleUrls: ['./castles-list.component.css']
})
export class CastlesListComponent implements OnInit, DoCheck {
  castles$: FirebaseListObservable<Castle2[]>;
  castles;
  attribute: string;

  constructor(private castleService: CastleService, private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.getCastles();
    console.log('Attribute on init: ', this.attribute);
    // this.castleService.searchCastles(this.castleService.startAt, this.castleService.endAt, this.attribute)
    // .subscribe(castles => this.castles = castles);
    // console.log('Castles: ', this.castles);
  }

  ngDoCheck() {
    console.log('Attribute on check: ', this.attribute);
  }

  getCastles() {
    this.castles$ = this.castleService.getCastles();
    console.log(this.castles$);
  }


}
