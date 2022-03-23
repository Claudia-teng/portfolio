import { Component } from '@angular/core';
import { faPhone, faAt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent {
  faPhone = faPhone;
  faAt = faAt;
  faLinkedin = faLinkedin;
  faGithub = faGithub
  title = 'claudia-teng.github.io';
}
