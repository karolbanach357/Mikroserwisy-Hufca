import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router'; // <--- Importuj to
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink], // <--- Dodaj tutaj RouterOutlet i RouterLink
  templateUrl: './app.html',
  styleUrl: './app.css' // lub app.scss jeśli tak masz
})
export class AppComponent {
  title = 'harcerstwo-frontend';
}
