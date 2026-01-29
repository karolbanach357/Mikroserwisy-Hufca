import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HarcerzService } from '../../services/harcerz.service';
import { Harcerz, StopienHarcerza } from '../../models/models';

@Component({
  selector: 'app-harcerz-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './harcerz-form.html',
  styleUrl: './harcerz-form.css',
})
export class HarcerzFormComponent implements OnInit {
  harcerz: Harcerz = {
    imie: '',
    nazwisko: '',
    stopien: StopienHarcerza.BISZKOPT
  }
  druzynaId: string | null = null;
  harcerzId: string | null = null;
  isEditMode = false;
  stopnie = Object.values(StopienHarcerza);

  constructor(
  private harcerzService: HarcerzService,
  private route: ActivatedRoute,
  private router: Router,
  private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.cdr.detectChanges();
    this.druzynaId = this.route.snapshot.paramMap.get('druzynaId');
    this.harcerzId = this.route.snapshot.paramMap.get('harcerzId');

    if (this.harcerzId) {
      this.cdr.detectChanges();
      this.isEditMode = true;
      // Pobieramy dane do edycji
      this.harcerzService.getById(this.harcerzId).subscribe(data => {
        this.harcerz = data;
        this.cdr.detectChanges();
      });
    }
    this.cdr.detectChanges();
  }
  onSubmit(): void {
    if (this.isEditMode && this.harcerzId) {
      // Edycja
      this.cdr.detectChanges();
      this.harcerzService.update(this.harcerzId, this.harcerz).subscribe(() => {
        this.goBack();
      });
    } else if (this.druzynaId) {
      // Dodawanie
      this.cdr.detectChanges();
      this.harcerzService.create(this.druzynaId, this.harcerz).subscribe(() => {
        this.goBack();
      });
    }
    this.cdr.detectChanges();
  }

  goBack(): void {
    this.router.navigate(['/druzyny']);
    this.cdr.detectChanges();
  }

}

