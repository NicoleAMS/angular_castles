import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Castle } from '../castle.model';
import { CastleService } from '../../_services/castle.service';
import { DataStorageService } from '../../_services/data-storage.service';

@Component({
  selector: 'app-castles-list',
  templateUrl: './castles-list.component.html',
  styleUrls: ['./castles-list.component.css']
})
export class CastlesListComponent implements OnInit {
  castles: Castle[] = [];

  constructor(private castleService: CastleService, private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.castles = this.castleService.castles;

    this.dataStorageService.storeCastles()
    .subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }


}
