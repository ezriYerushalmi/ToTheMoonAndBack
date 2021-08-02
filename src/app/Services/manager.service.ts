import { Injectable } from '@angular/core';
import {TripData} from "../Interfaces/trip-data.interface";
import {BehaviorSubject} from "rxjs";
import {State} from "../Interfaces/state.interface";

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  trips: TripData[] =[];
  tripsNotifier;
  changeMapView;

  constructor() {
    this.tripsNotifier = new BehaviorSubject<TripData[]|undefined>(undefined);
    this.changeMapView = new BehaviorSubject<State|undefined>(undefined);
  }

  notifyTripsChange() {
    this.tripsNotifier.next(this.trips);
  }

  changeStateMapView(state: State) {
    this.changeMapView.next(state);
  }

  addNewTrip(newTrip: TripData){
    this.trips.push(newTrip);
    this.notifyTripsChange();
    this.changeStateMapView(newTrip.stateDetails)
  }

}
