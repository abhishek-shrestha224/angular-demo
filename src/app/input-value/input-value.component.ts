import {Component} from '@angular/core';

@Component({
  selector: 'app-input-value',
  imports: [],
  templateUrl: './input-value.component.html',
  styleUrl: './input-value.component.css'
})
export class InputValueComponent {
  val = "";

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
