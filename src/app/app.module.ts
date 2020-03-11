import { NgFormsModule } from './ng-forms/ng-forms.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { DataBindingModule } from './data-binding/data-binding.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SamplePipe } from './pipes/sample/sample.pipe';
import { HomeComponent } from './home/home.component';

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
    NgFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
