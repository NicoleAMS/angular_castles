import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CastleService } from '../../_services/castle.service';

@Component({
  selector: 'app-castles-search',
  templateUrl: './castles-search.component.html',
  styleUrls: ['./castles-search.component.css']
})
export class CastlesSearchComponent implements OnInit {
  lastKeypress = 0;
  @Input() attribute: string;
  @Input() castles;

  constructor( private castleService: CastleService) { }

  ngOnInit() {
  }

  search($event, attribute) {
    if ($event.timeStamp - this.lastKeypress > 200) {
      const query = $event.target.value;
      this.castleService.startAt.next(query);
      this.castleService.endAt.next(query + '\uf8ff');
    }
    this.lastKeypress = $event.timeStamp;
    this.attribute = attribute.id;

    this.castleService.searchCastles(this.castleService.startAt, this.castleService.endAt, this.attribute)
    .subscribe(castles => this.castles = castles);
    console.log('Castles: ', this.castles);
  }

}
