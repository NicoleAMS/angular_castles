import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Castle } from '../castle.model';
import { CastleService } from '../../_services/castle.service';

@Component({
  selector: 'app-castles-detail',
  templateUrl: './castles-detail.component.html',
  styleUrls: ['./castles-detail.component.css']
})
export class CastlesDetailComponent implements OnInit {
  castle: Castle;
  id: number;
  url: string;

  constructor(
    private castleService: CastleService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.castle = this.castleService.getCastle(this.id);
        console.log(this.castle);
      }
    );
  }
}
