import { Component } from '@angular/core';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'crud_operations_json_server';
  constructor(private dialog: MatDialog){}

  openDialog() {
    this.dialog.open(ProductDialogComponent, {
      width: '30%'
    });

    // const dialogRef = this.dialog.open(ProductDialogComponent);
    // dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    // });
  }}
