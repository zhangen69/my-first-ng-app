import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuiltInPipesComponent } from './built-in-pipes/built-in-pipes.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { SamplePipe } from '../pipes/sample/sample.pipe';



@NgModule({
  declarations: [BuiltInPipesComponent, CustomPipesComponent, SamplePipe],
  imports: [
    CommonModule
  ],
  exports: [BuiltInPipesComponent, CustomPipesComponent]
})
export class SamplePipesModule { }
