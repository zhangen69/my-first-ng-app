import { ProductService } from './../../services/product/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-service',
  templateUrl: './sample-service.component.html',
  styleUrls: ['./sample-service.component.css']
})
export class SampleServiceComponent implements OnInit {
  productList = [];
  productsInCart = [];

  constructor(private productService: ProductService) {
    this.productList = this.productService.productList;
    this.productService.getProductsInCart().subscribe(products => {
      if (products && products.length > 0) {
        this.productsInCart = products;
      } else {
        this.productsInCart = [];
      }
    })
  }

  ngOnInit(): void {
  }

  addToCard(product) {
    this.productService.addToCart(product);
  }

}
