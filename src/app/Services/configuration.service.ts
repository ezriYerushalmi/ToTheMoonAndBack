import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  statesHostName: string = 'https://restcountries.eu/rest/v2';

  constructor() { }
}
