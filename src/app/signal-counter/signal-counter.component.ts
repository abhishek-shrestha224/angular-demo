import {Component, effect, signal} from '@angular/core';

@Component({
  selector: 'app-signal-counter',
  imports: [],
  templateUrl: './signal-counter.component.html',
  styleUrl: './signal-counter.component.css'
})
export class SignalCounterComponent {
  count = signal(0);

  constructor() {
    effect(() => {
      console.log(this.count());
    });
  }
}
