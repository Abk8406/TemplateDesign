import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  Products:any[] =[]

  ngOnInit(): void {
    this.GetProducts()
  }


  GetProducts(){

    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
      this.Products = data;
    })
 }


}


