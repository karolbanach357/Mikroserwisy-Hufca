export interface Druzyna {
  id?: string;      // UUID
  nazwa: string;    // mapowane z getNazwa()
  numer: number;    // mapowane z getNumer()
}

export enum StopienHarcerza {
  BISZKOPT = 'BISZKOPT',
  MLODZIK = 'MLODZIK',
  WYWIADOWCA = 'WYWIADOWCA',
  CWIK = 'CWIK',
  HO = 'HO',
  HR = 'HR'
  // dodaj inne stopnie jeśli masz ich więcej w Javie
}

export interface Harcerz {
  id?: string;      // UUID
  imie: string;
  nazwisko: string; // Używane do usuwania!
  stopien: StopienHarcerza;
  druzynaId?: string; // potrzebne przy tworzeniu
}
