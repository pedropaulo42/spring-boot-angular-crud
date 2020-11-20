import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: "teste",
    price: 123.123,
    quantity: 1,
    description: "testando"
  }

  constructor(
    private productServe: ProductService, 
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productServe.create(this.product).subscribe(() => {
      this.productServe.showMessage("Created product!");
      this.router.navigate(['/products']);
    })
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
