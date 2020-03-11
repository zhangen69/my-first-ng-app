import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList: any[];
  private productsInCart = [];

  private subject = new Subject<any[]>();

  constructor() {
    // mock a product list
    this.productList = [
      { id: 1, name: 'Sony', price: 3000 },
      { id: 2, name: 'iPhone', price: 4000 },
      { id: 3, name: 'Samsung', price: 3500 },
      { id: 4, name: 'Huawei', price: 4500 },
    ];
  }

  getProductsInCart() {
    return this.subject.asObservable();
  }

  addToCart(product) {
    // check get existing product or not
    const matchedProduct = this.productsInCart.find((item, index, list) => item.id === product.id);
    if (!!matchedProduct) {
      matchedProduct.quantity++;
    } else {
      this.productsInCart.push({ ...product, quantity: 1 });
    }
    this.subject.next(this.productsInCart);
  }

  updateCart(cart) {
    this.productsInCart = cart;
    this.subject.next(this.productsInCart);
  }

  removeProductFromCart(product) {
    const confirmation = confirm('Are you sure to remove the product ' + product.name + ' from the cart?');
    if (confirmation) {
      const index = this.productsInCart.findIndex((item) => item.id === product.id);
      this.productsInCart.splice(index, 1);
      this.subject.next(this.productsInCart);
    }
  }


}
