import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DruzynaService } from '../../services/druzyna.service';
import { Druzyna } from '../../models/models';

@Component({
  selector: 'app-druzyna-list',
  standalone: true,
  // WAŻNE: Tu muszą być te importy, inaczej HTML nie zadziała
  imports: [CommonModule, RouterModule],
  templateUrl: './druzyna-list.html',
  styleUrl: './druzyna-list.css'
})
export class DruzynaListComponent implements OnInit {

  druzyny: Druzyna[] = [];

  constructor(private druzynaService: DruzynaService) {}

  ngOnInit(): void {
    this.loadDruzyny();
  }

  loadDruzyny(): void {
    this.druzynaService.getAll().subscribe({
      next: (data) => {
        this.druzyny = data;
        console.log('Pobrano drużyny:', data);
      },
      error: (err) => {
        console.error('Błąd pobierania drużyn:', err);
      }
    });
  }

  delete(id: string, nazwa: string): void {
    if(confirm('Czy na pewno chcesz usunąć drużynę ' + nazwa + '?')) {

      // Wywołujemy serwis podając ID (UUID), a nie nazwę!
      this.druzynaService.delete(id).subscribe({
        next: () => {
          console.log('Usunięto drużynę o ID:', id);
          this.loadDruzyny(); // Odświeżenie listy
        },
        error: (err) => console.error('Błąd usuwania:', err)
      });
    }
  }
}
