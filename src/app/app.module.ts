import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './component/about-me/about-me.component';
import { BlogComponent } from './component/blog/blog.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { BlogCardComponent } from './component/shared/blog-card/blog-card.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { WorksComponent } from './component/works/workscomponent';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InfiniteTypeDeleteModule } from "ngx-sbz-type-delete";
import { MenuComponent } from './component/shared/menu/menu.component';

const FEATURE_COMPONENT = [
  AppComponent,
  HomeComponent,
  AboutMeComponent,
  WorksComponent,
  BlogComponent,
  ContactComponent,
]

const SHARED_COMPONENT = [
  NavbarComponent,
  BlogCardComponent,
  MenuComponent
]

@NgModule({
  declarations: [
    ...FEATURE_COMPONENT,
    ...SHARED_COMPONENT
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    InfiniteTypeDeleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}