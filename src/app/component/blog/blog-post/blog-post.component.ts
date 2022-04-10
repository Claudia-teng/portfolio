import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from 'src/app/service';

@Component({
  selector: 'blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class BlogPostComponent {
  public faArrowLeft = faArrowLeft;
  public content: string = '';
  
  constructor(private route: ActivatedRoute, 
              private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.portfolioService.getBlogById(param['id']).subscribe(res => {
        this.content = res.content;
      })
    })
  }  
}
