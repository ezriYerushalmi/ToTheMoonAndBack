import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import {TripData} from "../../Interfaces/trip-data.interface";
import {ManagerService} from "../../Services/manager.service";


/*const ELEMENT_DATA: TripData[] = [
  {
    stateName: 'ישראל',
    fromDate: new Date(),
    toDate: new Date(),
    stateDetails: {flag: "https://restcountries.eu/data/afg.svg", name: "Afghanistan"}
  },
  {
    stateName: 'ישראל',
    fromDate: new Date(),
    toDate: new Date(),
    stateDetails: {flag: "https://restcountries.eu/data/afg.svg", name: "Afghanistan"}
  },
  {
    stateName: 'ישראל',
    fromDate: new Date(),
    toDate: new Date(),
    stateDetails: {flag: "https://restcountries.eu/data/afg.svg", name: "Afghanistan"}
  },
  {
    stateName: 'ישראל',
    fromDate: new Date(),
    toDate: new Date(),
    stateDetails: {flag: "https://restcountries.eu/data/afg.svg", name: "Afghanistan"}
  },
  {
    stateName: 'ישראל',
    fromDate: new Date(),
    toDate: new Date(),
    stateDetails: {flag: "https://restcountries.eu/data/afg.svg", name: "Afghanistan"}
  },
  {
    stateName: 'ישראל',
    fromDate: new Date(),
    toDate: new Date(),
    stateDetails: {flag: "https://restcountries.eu/data/afg.svg", name: "Afghanistan"}
  },
  {
    stateName: 'ישראל',
    fromDate: new Date(),
    toDate: new Date(),
    stateDetails: {flag: "https://restcountries.eu/data/afg.svg", name: "Afghanistan"}
  },

];*/


@Component({
  selector: 'app-trips-table',
  templateUrl: './trips-table.component.html',
  styleUrls: ['./trips-table.component.scss']
})
export class TripsTableComponent implements OnInit, OnDestroy {

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

}
