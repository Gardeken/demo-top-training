import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isActiveLateral = true;
  toggleLateral(): void {
    this.isActiveLateral = !this.isActiveLateral;
  }
}
