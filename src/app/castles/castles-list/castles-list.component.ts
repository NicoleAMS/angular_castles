import { Component, OnInit} from '@angular/core';
import { Castle2 } from '../castle';
import { CastleService } from '../../_services/castle.service';
import { DataStorageService } from '../../_services/data-storage.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-castles-list',
  templateUrl: './castles-list.component.html',
  styleUrls: ['./castles-list.component.css']
})
export class CastlesListComponent implements OnInit {
  castles$: FirebaseListObservable<Castle2[]>;
  castles;
  attribute: string;

  constructor(private castleService: CastleService, private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.getCastles();
  }

  fireSearch() {
    this.castleService.searchCastles(this.castleService.startAt, this.castleService.endAt, this.castleService.attribute)
    .subscribe(castles => this.castles = castles);
  }

  getCastles() {
    this.castles$ = this.castleService.getCastles();
    // console.log(this.castles$);
  }


}
