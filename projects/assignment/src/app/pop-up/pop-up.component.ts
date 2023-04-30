import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA,MatDialog, MatDialogRef,} from '@angular/material/dialog';


@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data :any) { }

  ngOnInit(): void {
  }

}
