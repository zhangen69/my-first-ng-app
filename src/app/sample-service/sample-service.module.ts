import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleServiceComponent } from './sample-service/sample-service.component';
import { ProductCartComponent } from './product-cart/product-cart.component';



@NgModule({
  declarations: [SampleServiceComponent, ProductCartComponent],
  imports: [
    CommonModule
  ],
  exports: [SampleServiceComponent, ProductCartComponent]
})
export class SampleServiceModule { }
