import { Routes } from '@angular/router';
import { DruzynaListComponent } from './components/druzyna-list/druzyna-list.component.js';
// Tu zaimportuj resztę komponentów jak je stworzysz, np.:
import { DruzynaFormComponent } from './components/druzyna-form/druzyna-form.component.js';
import { DruzynaDetailsComponent } from './components/druzyna-details/druzyna-details.component.js';
//import { DruzynaDetailsComponent } from './components/druzyna-details/druzyna-details.component';
import { HarcerzFormComponent } from './components/harcerz-form/harcerz-form.component.js';
import { HarcerzDetailsComponent } from './components/harcerz-details/harcerz-details.component.js';

export const routes: Routes = [
  // Zadanie 1: Lista
  { path: 'druzyny', component: DruzynaListComponent },

  // Zadanie 2 i 3: Formularz Drużyny (dodawanie i edycja)
   { path: 'druzyny/dodaj', component: DruzynaFormComponent },
   { path: 'druzyny/:nazwa/edytuj', component: DruzynaFormComponent },

  // Zadanie 4: Szczegóły
   { path: 'druzyny/:nazwa', component: DruzynaDetailsComponent },

  // Zadanie 5 i 6: Harcerze
   { path: 'druzyny/:druzynaId/harcerze/dodaj', component: HarcerzFormComponent },
   { path: 'druzyny/:druzynaId/harcerze/:harcerzId/edytuj', component: HarcerzFormComponent },

  // Zadanie 7: Szczegóły Harcerza
   { path: 'druzyny/:druzynaId/harcerze/:harcerzId', component: HarcerzDetailsComponent },

  // Domyślny redirect
  { path: '', redirectTo: '/druzyny', pathMatch: 'full' }
];
