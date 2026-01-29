import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // <--- 1. Import
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HarcerzService } from '../../services/harcerz.service';
import { Harcerz } from '../../models/models';

@Component({
  selector: 'app-harcerz-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './harcerz-details.html'
})
export class HarcerzDetailsComponent implements OnInit {
  harcerz: Harcerz | undefined;
  isLoading = true;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private service: HarcerzService,
    private cdr: ChangeDetectorRef // <--- 2. Wstrzyknięcie
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('harcerzId');

    // Walidacja czy ID w ogóle istnieje
    if (id) {
      this.service.getById(id).subscribe({
        next: (data) => {
          console.log('Pobrano harcerza:', data);
          this.harcerz = data;
          this.isLoading = false;

          // <--- 3. KLUCZOWE: Wymuszenie odświeżenia widoku
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Błąd:', err);
          this.errorMessage = 'Nie udało się pobrać danych (Błąd 404 lub CORS).';
          this.isLoading = false;

          // Tu też odświeżamy, żeby pokazać błąd zamiast kręciołka
          this.cdr.detectChanges();
        }
      });
    } else {
      this.errorMessage = 'Brak ID w adresie URL.';
      this.isLoading = false;
      this.cdr.detectChanges();
    }
  }
}
