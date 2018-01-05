import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import {XkcdRngService} from './xkcd-rng.service';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    XkcdRngService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
