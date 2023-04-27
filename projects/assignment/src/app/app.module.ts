import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideshowOneComponent } from './slideshow-one/slideshow-one.component';
import { SlideshowTwoComponent } from './slideshow-two/slideshow-two.component';
import { SlideshowThreeComponent } from './slideshow-three/slideshow-three.component';

@NgModule({
  declarations: [

    AppComponent,
     SlideshowOneComponent,
     SlideshowTwoComponent,
     SlideshowThreeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
