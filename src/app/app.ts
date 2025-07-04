import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputApp } from './input/input';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InputApp],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'demo-top-training';
  name = 'Pedro Centeno';
}
