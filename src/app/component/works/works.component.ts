import { Component } from '@angular/core';
import { works } from './works';

@Component({
  selector: 'works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.sass']
})
export class WorksComponent {
  title = 'claudia-teng.github.io';
  works = works;
}
