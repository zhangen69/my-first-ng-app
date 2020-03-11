import { SampleServiceModule } from './sample-service/sample-service.module';
import { CommonDirectivesModule } from './common-directives/common-directives.module';
import { NgFormsModule } from './ng-forms/ng-forms.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { DataBindingModule } from './data-binding/data-binding.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SamplePipe } from './pipes/sample/sample.pipe';
import { HomeComponent } from './home/home.component';
import { SamplePipesModule } from './sample-pipes/sample-pipes.module';

@NgModule({
  declarations: [
    AppComponent,
    SamplePipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    DataBindingModule,
    CommonDirectivesModule,
    SamplePipesModule,
    SampleServiceModule,
    NgFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
