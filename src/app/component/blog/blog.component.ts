import { Component } from '@angular/core';
import { blogs } from './blogs';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent {
  title = 'claudia-teng.github.io';
  blogs = blogs;
}
