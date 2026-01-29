import { Component, OnInit,ChangeDetectorRef  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { DruzynaService } from '../../services/druzyna.service';
import { HarcerzService } from '../../services/harcerz.service';
import { Druzyna, Harcerz } from '../../models/models';

@Component({
  selector: 'app-druzyna-details',
  standalone: true,
  imports: [CommonModule, RouterModule], // <--- Pamiętaj o importach!
  templateUrl: './druzyna-details.html',
  styleUrl: './druzyna-details.css'
})
export class DruzynaDetailsComponent implements OnInit {

  druzyna: Druzyna | undefined;
  harcerze: Harcerz[] = [];

  constructor(
    private route: ActivatedRoute,
    private druzynaService: DruzynaService,
    private harcerzService: HarcerzService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadData();
    this.cdr.detectChanges();
  }

  loadData(): void {
    const nazwa = this.route.snapshot.paramMap.get('nazwa');
    if (nazwa) {
      // 1. Pobierz szczegóły drużyny po nazwie
      this.druzynaService.getByName(nazwa).subscribe({
        next: (druzynaData) => {
          this.druzyna = druzynaData;
          console.log('Pobrano drużynę:', druzynaData);

          // 2. Jeśli mamy drużynę i ma ona ID, pobierz jej harcerzy
          if (druzynaData.id) {
            this.loadHarcerze(druzynaData.id);
            this.cdr.detectChanges();
          }
        },
        error: (err) => console.error('Błąd pobierania drużyny:', err)
      });
    }
  }

  loadHarcerze(druzynaId: string): void {
    this.harcerzService.getByDruzynaId(druzynaId).subscribe({
      next: (harcerzeData) => {
        this.harcerze = harcerzeData;
        console.log('Pobrano harcerzy:', harcerzeData);
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Błąd pobierania harcerzy:', err)
    });
  }

  deleteHarcerz(nazwisko: string): void {
    if(confirm(`Czy na pewno usunąć harcerza o nazwisku ${nazwisko}?`)) {
      this.harcerzService.deleteByNazwisko(nazwisko).subscribe({
        next: () => {
          // Po usunięciu odświeżamy listę harcerzy
          if (this.druzyna?.id) {
            this.loadHarcerze(this.druzyna.id);
            this.cdr.detectChanges();
          }
        },
        error: (err) => alert('Nie udało się usunąć (sprawdź konsolę)')
      });
    }
    this.cdr.detectChanges();
  }
}
