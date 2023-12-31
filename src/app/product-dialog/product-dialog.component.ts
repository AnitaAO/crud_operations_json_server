import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss']
})
export class ProductDialogComponent implements OnInit {
[x: string]: any;

  productForm !: FormGroup;

  freshnessList = ['refurblished ', 'new ', 'used']

  constructor(private fb: FormBuilder, private api: ApiService) {}

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
          alert("Product added successfully")
        },
        error: () => {
          alert("Error while adding the product")
        }
      })
    }
  };
}
