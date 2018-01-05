
import {Component, Input, Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'app-counter',
  template: `{{ tick | async }}`,
})
export class CounterComponent {
  @Input() counter = 5;
  @Input() delay = 90;
  @Output() finish = new EventEmitter<boolean>();
  @Output() tick = new EventEmitter<number>();
  public start(): void {
    this.count(0);
  }
  private count(n: number): void {
    this.tick.emit(n);
    if (n >= this.counter) {
      this.finish.emit(true);
    } else {
      setTimeout(() => this.count(n + 1), this.delay);
    }
  }
}

