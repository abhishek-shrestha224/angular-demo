import {Component} from '@angular/core';
import {CounterAppComponent} from './counter-app/counter-app.component';

@Component({
  selector: 'app-root',
  imports: [CounterAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
