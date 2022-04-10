import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/service';
import { Work } from "src/app/model";

@Component({
  selector: 'works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.sass']
})
export class WorksComponent {

  public works: Array<Work> = [];
  public loading: boolean = true;

  constructor(private portfolioService: PortfolioService) {}
  
  ngOnInit() {
    this.portfolioService.getAllWorks().subscribe(res => {
      this.loading = false;
      this.works = res;
    })
  }
}
