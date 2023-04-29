import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChildComponent} from "./child/child.component"
import { ParentHeaderComponent } from './parent-header/parent-header.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path: 'child' , component : ChildComponent},
  {path: 'parent-haader', component :ParentHeaderComponent},
  {path: 'home', component : HomeComponent},
  {path :'',redirectTo:'home',pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
