import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Castle } from '../castle.model';
import { CastleService } from '../../_services/castle.service';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
// import { Castle2 } from '../castle';

@Component({
  selector: 'app-castles-detail',
  templateUrl: './castles-detail.component.html',
  styleUrls: ['./castles-detail.component.css']
})
export class CastlesDetailComponent implements OnInit {
  castle$: FirebaseObjectObservable<Castle>;
  castleKey: string;

  constructor(
    private castleService: CastleService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    console.log(this.route);
    this.castleKey = this.route.snapshot.params['id'];
    this.getCastle();

  }

  getCastle() {
    this.castle$ = this.castleService.getCastle(this.castleKey);
    console.log(this.castle$);
  }
}
