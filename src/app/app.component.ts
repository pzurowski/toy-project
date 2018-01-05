import {Component, OnInit} from '@angular/core';
import {XkcdRngService} from './xkcd-rng.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  counter: number;

  constructor(public xkcd: XkcdRngService) {
  }

  ngOnInit(): void {
    this.counter = this.xkcd.next().value;
  }
}

