import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Harcerz } from '../models/models';

@Injectable({ providedIn: 'root' })
export class HarcerzService {
  private baseUrl = 'http://localhost:8080/api/harcerze';

  constructor(private http: HttpClient) {}

  // Odpowiada metodzie getHarcerzeByDruzynaID z kontrolera
  getByDruzynaId(druzynaId: string): Observable<Harcerz[]> {
    // Zgodnie z Twoim kodem: /api/harcerze + /harcerze/druzyna/{id}
    return this.http.get<Harcerz[]>(`${this.baseUrl}/harcerze/druzyna/${druzynaId}`);
  }

  getById(harcerzId: string): Observable<Harcerz> {
    return this.http.get<Harcerz>(`${this.baseUrl}/${harcerzId}`);
  }

  // Odpowiada metodzie addHarcerz z kontrolera
  create(druzynaId: string, harcerz: Harcerz): Observable<Harcerz> {
    // Zgodnie z kodem: /api/harcerze + /druzyny/{id}/harcerze
    return this.http.post<Harcerz>(`${this.baseUrl}/druzyny/${druzynaId}/harcerze`, harcerz);
  }

  update(harcerzId: string, harcerz: Harcerz): Observable<Harcerz> {
    return this.http.put<Harcerz>(`${this.baseUrl}/${harcerzId}`, harcerz);
  }

  // UWAGA: Twój kontroler usuwa po NAZWISKU: @DeleteMapping("/harcerze/{nazwisko}")
  deleteByNazwisko(nazwisko: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/harcerze/${nazwisko}`);
  }

  // Metoda getOne do edycji (jeśli potrzebujesz) - w Twoim kodzie jej nie widzę w HarcerzController!
  // Będziesz musiał albo dodać endpoint w Javie, albo pobierać wszystkich i filtrować w Angularze.
}
