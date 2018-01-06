import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-counter-view',
  template: `
    <button (click)="start.emit()">Start</button>
    <h2>{{ value }}</h2>
  `,
  styleUrls: ['app.component.css']
})
export class CounterViewComponent {

  @Input() value: number;
  @Output() start: EventEmitter<void> = new EventEmitter()

}
