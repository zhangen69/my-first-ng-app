import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { InterporationComponent } from './interporation/interporation.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [OneWayBindingComponent, TwoWayBindingComponent, InterporationComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
  ],
  exports: [OneWayBindingComponent, TwoWayBindingComponent, InterporationComponent],
})
export class DataBindingModule { }
