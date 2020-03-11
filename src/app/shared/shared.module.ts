import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample/sample.component';



@NgModule({
  declarations: [SampleComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    SampleComponent
  ]
})
export class SharedModule { }
