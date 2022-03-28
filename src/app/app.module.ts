// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// Component
import { AppComponent } from './app.component';
import { AboutMeComponent } from './component/about-me/about-me.component';
import { BlogComponent } from './component/blog/blog.component';
import { BlogPostComponent } from './component/blog/blog-post/blog-post.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { CardComponent } from './component/shared/work-card/work-card.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { WorksComponent } from './component/works/works.component';

// npm
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InfiniteTypeDeleteModule } from "ngx-sbz-type-delete";
import { MarkdownModule } from 'ngx-markdown';
import { BlogCardComponent } from './component/shared/blog-card/blog-card.component';


const FEATURE_COMPONENT = [
  AppComponent,
  HomeComponent,
  AboutMeComponent,
  WorksComponent,
  BlogComponent,
  BlogPostComponent,
  BlogCardComponent,
  ContactComponent,
]

const SHARED_COMPONENT = [
  NavbarComponent,
  CardComponent
]

@NgModule({
  declarations: [
    ...FEATURE_COMPONENT,
    ...SHARED_COMPONENT
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    InfiniteTypeDeleteModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
