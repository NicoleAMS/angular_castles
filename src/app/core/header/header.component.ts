import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
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
