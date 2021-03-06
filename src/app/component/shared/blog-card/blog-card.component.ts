import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.sass']
})
export class BlogCardComponent {
  @Input() id: number = 1;
  @Input() date: string = '';
  @Input() title: string = '';
  @Input() intro: string = '';
  @Input() imgPath: string = '';

  constructor(private router: Router) {}

  public navigateToPost(): void {
    this.router.navigate([`/blog/${this.id}`])
  }
}
