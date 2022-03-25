import { Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent {
  @Input() title: string = '';
  @Input() intro: string = '';
  @Input() imgPath: string = '';
  @Input() url: string = '';

  public openProjectPage(url: string): void {
    window.open(url, "_blank")
  }
}
