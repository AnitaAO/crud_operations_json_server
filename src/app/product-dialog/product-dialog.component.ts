import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss']
})
export class ProductDialogComponent implements OnInit {
[x: string]: any;

  productForm !: FormGroup;

  freshnessList = ['Refurbished ', 'Brand new ', 'Second-hand']

  constructor(private fb: FormBuilder, private api: ApiService, private dialogRef: MatDialogRef<ProductDialogComponent>) {}

  ngOnInit(){
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      category: ['', Validators.required],
      date: ['', Validators.required],
      freshness: ['', Validators.required],
      price: ['', Validators.required],
      comment: ['', Validators.required],
    })
  }

  addProduct(){
    console.log(this.productForm.value);
    if(this.productForm.valid){
      this.api.postProduct(this.productForm.value).subscribe({
        next: (res) => {
          alert("Product added successfully");
          this.productForm.reset();
          this.dialogRef.close("save");
        },
        error: () => {
          alert("Error while adding the product")
        }
      })
    }
  };
}
