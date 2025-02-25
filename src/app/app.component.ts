import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
// flex fix clean red kkkllllggh
export class AppComponent {
  count = 0;

  handleIncrement() {
    this.count++;
  }

  handleDecrement() {
    this.count--;
  }

  handleReset() {
    this.count = 0;
  }
}
