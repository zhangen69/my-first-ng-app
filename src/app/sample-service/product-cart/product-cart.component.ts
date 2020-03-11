import { ProductService } from './../../services/product/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {
  products: any[];

  constructor(private productService: ProductService) {
    this.productService.getProductsInCart().subscribe(products => {
      this.products = products;
    });
  }

  ngOnInit(): void {
  }

  updateProductQuantity(product, quantity) {
    product.quantity += quantity;
    this.productService.updateCart(this.products);
  }

  removeProduct(product) {
    this.productService.removeProductFromCart(product);
  }

}
