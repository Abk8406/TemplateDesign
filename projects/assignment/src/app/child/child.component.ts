import { Component, OnInit } from '@angular/core';
import { PopUpComponent } from '../pop-up/pop-up.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(public dialog : MatDialog) { }


  ngOnInit(): void {
    this.GetProducts();
  }
  Products:any[] = [];

   GetProducts(){
     fetch("https://fakestoreapi.com/products")
     .then(res => res.json())
     .then(data => {
       this.Products = data;
     })
   }
   openDialog(product:any){
    this.dialog.open(PopUpComponent,{
      data :product
    })
   }


}
