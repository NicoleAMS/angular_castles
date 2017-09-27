import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { CastleService } from '../../_services/castle.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private castleService: CastleService) { }

  ngOnInit() {
  }

  search($event) {
    const query = $event.target.value;
    this.castleService.startAt.next(query);
    this.castleService.endAt.next(query + '\uf8ff');
  }

  onLogout() {
    this.authService.signout();
  }

  onCloseAlert() {
    console.log('Alert closed!');
    const alertMessage = document.getElementById('welcome');
    alertMessage.style.display = 'none';
  }

  onCloseLogoutAlert() {
    const logoutMessage = document.getElementById('logout');
    logoutMessage.style.display = 'none';
  }

}
