import {Component, OnDestroy, OnInit} from '@angular/core';
import {ManagerService} from "../../Services/manager.service";
import {ConfigurationService} from "../../Services/configuration.service";

declare var Cesium: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {
  viewer!: any;
  billboards: any = [];
  constructor(
    private configService: ConfigurationService,
    private managerService: ManagerService
  ) { }

  ngOnInit(): void {
    this.viewer = new Cesium.Viewer('viewer', this.configService.cesiumMapOptions );
    this.managerService.changeMapView.subscribe((state: any) => {
      if(!state) {
        return;
      }
      const entity = this.addNewBillboard(state);
      this.viewer.scene.camera.flyTo({destination: Cesium.Cartesian3.fromDegrees(state.latlng[1], state.latlng[0], 50000)});
      this.billboards.push(entity)
    });
  }

  addNewBillboard(state: any) {
    return this.viewer.entities.add({
      position:   Cesium.Cartesian3.fromDegrees(state.latlng[1], state.latlng[0], 40000),
      name: state.name,
      billboard: {
        image: state.flag,
        scaleByDistance: new Cesium.NearFarScalar(1.5e2, 2.0, 1.5e7, 0.5),
        width: 50,
        height: 30,
      }
    })
  }

  ngOnDestroy(): void {
  }

}
