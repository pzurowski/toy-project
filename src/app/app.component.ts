import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {CounterService} from './counter.redux';
import {XkcdRngService} from './xkcd-rng.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  counter: number;

  value$: Observable<number>;

  constructor(public xkcd: XkcdRngService,
              private cs: CounterService) {
    this.value$ = cs.selectMainCounterValue();
  }

  ngOnInit(): void {
    this.counter = this.xkcd.next().value;
  }

  start() {
    this.cs.start();
  }
}

