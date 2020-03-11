import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuiltInPipesComponent } from './built-in-pipes/built-in-pipes.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';



@NgModule({
  declarations: [BuiltInPipesComponent, CustomPipesComponent],
  imports: [
    CommonModule
  ]
})
export class SamplePipesModule { }
