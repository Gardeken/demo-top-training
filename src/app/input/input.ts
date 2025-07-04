import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class InputApp {
  @Input() name = '';
  IsChecked = false;
  CambiarNombre(event: Event) {
    const InputValue = (event.target as HTMLInputElement).value;
    this.name = InputValue;
  }
  EventoCheckBox(event: Event) {
    if (this.IsChecked === false) {
      this.IsChecked = true;
    } else {
      this.IsChecked = false;
    }
  }
}
