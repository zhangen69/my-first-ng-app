import { DataBindingModule } from './data-binding/data-binding.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DataBindingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
