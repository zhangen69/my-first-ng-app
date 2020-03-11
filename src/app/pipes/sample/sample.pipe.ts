import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sample'
})
export class SamplePipe implements PipeTransform {

  transform(products: any[]): number {
    if (!products) {
      return 0;
    }

    return products.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);
  }

}
