import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/service';
import { Blog } from "src/app/model";
@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent {

  constructor(private portfolioService: PortfolioService) {}

  public blogs: Array<Blog> = [];

  ngOnInit() {
    this.portfolioService.getAllBlog().subscribe(res => {
      this.blogs = res;
    })
  }
}
