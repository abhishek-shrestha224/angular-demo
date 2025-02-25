import {Component} from '@angular/core';
import {CounterAppComponent} from './counter-app/counter-app.component';
import {InputValueComponent} from './input-value/input-value.component';

@Component({
  selector: 'app-root',
  imports: [InputValueComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
