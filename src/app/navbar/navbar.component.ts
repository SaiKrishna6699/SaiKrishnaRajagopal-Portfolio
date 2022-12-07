import { Component } from '@angular/core';
import {faUser, faEnvelope, faFolderClosed, faHome} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  faUser = faUser;
  faContactBook = faEnvelope;
  faFolder = faFolderClosed;
  faHome = faHome;
}
