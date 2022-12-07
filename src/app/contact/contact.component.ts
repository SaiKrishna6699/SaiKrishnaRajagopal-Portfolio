import { Component } from '@angular/core';
import { faAddressBook, faMailReply, faMobile } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faTelegram} from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  faAddress = faAddressBook;
  faMail = faMailReply;
  faMobile = faMobile;
  social: any[] = [faFacebook, faTwitter, faInstagram, faLinkedin];
  faMessage = faTelegram;
}
