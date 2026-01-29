import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Druzyna } from '../models/models';

@Injectable({ providedIn: 'root' })
export class DruzynaService {
  // Zakładam, że Gateway jest na 8080
  private apiUrl = 'http://localhost:8080/api/druzyny';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Druzyna[]> {
    return this.http.get<Druzyna[]>(this.apiUrl);
  }

  // UWAGA: Twój kontroler szuka po NAZWIE, nie po ID
  getByName(nazwa: string): Observable<Druzyna> {
    return this.http.get<Druzyna>(`${this.apiUrl}/${nazwa}`);
  }

  create(druzyna: Druzyna): Observable<Druzyna> {
    return this.http.post<Druzyna>(this.apiUrl, druzyna);
  }

  update(originalName: string, druzyna: Druzyna): Observable<Druzyna> {
    // PUT /api/druzyny/{name}
    return this.http.put<Druzyna>(`${this.apiUrl}/${originalName}`, druzyna);
  }

  delete(id: string): Observable<void> {
    // DELETE /api/druzyny/{id}  <-- Teraz wysyłamy ID!
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
