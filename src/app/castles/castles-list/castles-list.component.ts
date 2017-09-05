import { Component, OnInit } from '@angular/core';
import { Castle } from '../castle.model';
import { CastleService } from '../../_services/castle.service';

@Component({
  selector: 'app-castles-list',
  templateUrl: './castles-list.component.html',
  styleUrls: ['./castles-list.component.css']
})
export class CastlesListComponent implements OnInit {
  castles: Castle[] = [];

  constructor(private castleService: CastleService) { }

  ngOnInit() {
    this.castles = this.castleService.castles;
  }

}
