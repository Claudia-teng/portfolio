import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {
  public faBars = faBars;
  public displayMenu = false;

  public showMenu(): void {
    this.displayMenu = true;
  }
}
