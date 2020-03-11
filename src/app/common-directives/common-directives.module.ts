import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';



@NgModule({
  declarations: [NgIfComponent, NgForComponent, NgSwitchComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
  ],
  exports: [NgIfComponent, NgForComponent, NgSwitchComponent],
})
export class CommonDirectivesModule { }
