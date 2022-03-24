import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent {
  public faBars = faBars;
  public displayMenu = false;

  public showMenu(): void {
    this.displayMenu = true;
  }
}
