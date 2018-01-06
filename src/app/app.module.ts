import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import {XkcdRngService} from './xkcd-rng.service';
import { CounterViewComponent } from './counter-view.component';
import {AppReduxModule} from './app.redux';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterViewComponent
  ],
  imports: [
    AppReduxModule,
    BrowserModule
  ],
  providers: [
    XkcdRngService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
