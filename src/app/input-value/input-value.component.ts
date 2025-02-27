import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-input-value',
  imports: [FormsModule],
  templateUrl: './input-value.component.html',
  styleUrl: './input-value.component.css'
})
export class InputValueComponent {
  val = "";
  name = "";

  read(event: Event) {
    this.val = (event.target as HTMLInputElement).value;
  }

  get(a: string) {
    console.log(a);
  }

  set() {
    this.val = "pineapple"
  }
}
