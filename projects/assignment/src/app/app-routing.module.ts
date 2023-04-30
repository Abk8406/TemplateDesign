import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChildComponent} from "./child/child.component"
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  {path: 'home' , component : HomeComponent},
  {path: 'home', component : HomeComponent},
  {path :'', redirectTo:'home', pathMatch: 'full'},
  {path: 'child' , component : ChildComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
