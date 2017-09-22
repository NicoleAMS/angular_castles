import { Component, OnInit, Input } from '@angular/core';
import { Castle } from '../../castle.model';
import { AuthService } from '../../../_services/auth.service';


@Component({
  selector: 'app-castles-list-item',
  templateUrl: './castles-list-item.component.html',
  styleUrls: ['./castles-list-item.component.css']
})
export class CastlesListItemComponent implements OnInit {
  @Input() castle: Castle;
  @Input() index: number;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onUpdate() {
    
  }

  onDelete() {}

}
