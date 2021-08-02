import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import {TripData} from "../../Interfaces/trip-data.interface";
import {ManagerService} from "../../Services/manager.service";



@Component({
  selector: 'app-trips-table',
  templateUrl: './trips-table.component.html',
  styleUrls: ['./trips-table.component.scss']
})
export class TripsTableComponent implements OnInit, OnDestroy {

  selectedRow = -1;

  displayedColumns: string[] = ['stateName', 'fromDate', 'toDate','note' ,'flag'];
  trips: TripData[] = [];
  clickedRows = new Set<TripData>();
  tripSubscriber: Subscription | undefined;
  constructor(private managerService: ManagerService) { }

  ngOnInit(): void {
    this.tripSubscriber = this.managerService.tripsNotifier.subscribe((trips: TripData[] | undefined) => {
      if(!trips) {
        trips = [];
      }
      this.trips = [...trips];
    })
  }

  ngOnDestroy(): void {
    this.tripSubscriber?.unsubscribe();
  }

  pickARow(row: TripData) {
    this.managerService.changeStateMapView(row.stateDetails);
  }

}
