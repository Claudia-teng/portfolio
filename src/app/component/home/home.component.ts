import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  title = 'claudia-teng.github.io';
  
  ngOnInit() {

  }
}