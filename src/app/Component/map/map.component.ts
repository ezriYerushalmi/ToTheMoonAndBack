import { Component, OnInit } from '@angular/core';

declare var Cesium: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  viewer = undefined;
  constructor() { }

  ngOnInit(): void {
    this.viewer = new Cesium.Viewer('viewer', {
      geocoder: false,
      sceneModePicker: false,
      animation: false,
      timeline: false,
      homeButton : false,
      navigationHelpButton: false,
      fullscreenButton: false,
      selectionIndicator : false,

      shouldAnimate: true,
      infoBox : false,});
  }

}
