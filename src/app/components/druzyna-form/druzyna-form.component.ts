import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <--- WAŻNE do formularzy
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { DruzynaService } from '../../services/druzyna.service';
import { Druzyna } from '../../models/models';

@Component({
  selector: 'app-druzyna-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './druzyna-form.html',
  styleUrl: './druzyna-form.css'
})
export class DruzynaFormComponent implements OnInit {

  druzyna: Druzyna = { nazwa: '', numer: 0 };
  isEditMode = false;
  originalName = '';
  isDataLoaded = false;

  constructor(
    private service: DruzynaService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const nazwaUrl = this.route.snapshot.paramMap.get('nazwa');

    if (nazwaUrl) {
      this.isEditMode = true;
      this.originalName = nazwaUrl;

      this.service.getByName(nazwaUrl).subscribe({
        next: (data) => {
          console.log('Dane przyszły:', data);

          // Bezpieczne przypisanie danych
          this.druzyna = data;

          this.isDataLoaded = true;

          // <--- 3. RĘCZNE WYMUSZENIE ODŚWIEŻENIA WIDOKU
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error(err);
          this.isDataLoaded = true;
          this.cdr.detectChanges(); // Tu też warto odświeżyć, żeby pokazać ewentualny błąd/pusty stan
        }
      });
    } else {
      this.isDataLoaded = true;
    }
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.service.update(this.originalName, this.druzyna).subscribe(() => {
        this.router.navigate(['/druzyny']);
      });
    } else {
      this.service.create(this.druzyna).subscribe(() => {
        this.router.navigate(['/druzyny']);
      });
    }
  }
}
