import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideshowOneComponent } from './slideshow-one/slideshow-one.component';
import { SlideshowTwoComponent } from './slideshow-two/slideshow-two.component';
import { SlideshowThreeComponent } from './slideshow-three/slideshow-three.component';
import { ChildComponent } from './child/child.component';
import { ParentHeaderComponent } from './parent-header/parent-header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [

    AppComponent,
     SlideshowOneComponent,
     SlideshowTwoComponent,
     SlideshowThreeComponent,
     ChildComponent,
     ParentHeaderComponent,
     HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
