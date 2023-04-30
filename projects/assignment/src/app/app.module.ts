import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideshowOneComponent } from './slideshow-one/slideshow-one.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { SlideshowTwoComponent } from './slideshow-two/slideshow-two.component';
import { SlideshowThreeComponent } from './slideshow-three/slideshow-three.component';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';


// Angular Matrials Import here... after imports than Go Imports ..
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Matrials Import End here...
@NgModule({
  declarations: [

    AppComponent,
     SlideshowOneComponent,
     SlideshowTwoComponent,
     SlideshowThreeComponent,
     ChildComponent,
     HomeComponent,
     PopUpComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDialogModule,
    HttpClientModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
