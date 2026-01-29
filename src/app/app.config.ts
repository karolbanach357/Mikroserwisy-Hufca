import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Importuje twoje ścieżki z kroku 1
import { provideHttpClient } from '@angular/common/http'; // WAŻNE: Tu dodajemy klienta HTTP!

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient() // To jest wymagane, żeby działały Twoje serwisy!
  ]
};