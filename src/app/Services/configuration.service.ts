import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  statesHostName: string = 'https://restcountries.eu/rest/v2';
  cesiumMapOptions = {
  geocoder: false,
  sceneModePicker: false,
  animation: false,
  timeline: false,
  homeButton : false,
  navigationHelpButton: false,
  fullscreenButton: false,
  selectionIndicator : false,
  shouldAnimate: true,
  infoBox : false,
  };

  constructor() { }
}
