import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.sass']
})
export class BlogPostComponent {
  public faArrowLeft = faArrowLeft;
  public filePath: string = '';
  
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.filePath = `assets/blog/${param['id']}/${param['id']}.md`;
    })
  }  
}
