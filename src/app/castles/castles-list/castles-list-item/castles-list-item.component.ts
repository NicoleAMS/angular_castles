import { Component, OnInit, Input } from '@angular/core';
import { Castle } from '../../castle.model';

@Component({
  selector: 'app-castles-list-item',
  templateUrl: './castles-list-item.component.html',
  styleUrls: ['./castles-list-item.component.css']
})
export class CastlesListItemComponent implements OnInit {
  @Input() castle: Castle;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }


}
