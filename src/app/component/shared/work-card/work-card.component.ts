import { Component, Input } from '@angular/core';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.sass']
})
export class CardComponent {
  @Input() title: string = '';
  @Input() intro: string = '';
  @Input() imgPath: string = '';
  @Input() url: string = '';
  @Input() tags: Array<string> = [];
  public faUpRightFromSquare = faUpRightFromSquare;

  public openProjectPage(url: string): void {
    window.open(url, "_blank")
  }
}
