import { Injectable } from '@angular/core';
import {TripData} from "../Interfaces/trip-data.interface";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  trips: TripData[] =[];
  tripsNotifier;

  constructor() {
    this.tripsNotifier = new BehaviorSubject<TripData[]|undefined>(undefined);
    setTimeout(() => {
      this.addNewTripsMock();
    }, 1000)
  }

  notifyTripsChange() {
    this.tripsNotifier.next(this.trips);
  }


  addNewTrip(newTrip: TripData){
    this.trips.push(newTrip);
    this.notifyTripsChange();
  }

  removeTrip(){

  }

  editTrip(){

  }

  addNewTripsMock(){
    for (let i = 0; i < 10; i ++){
      const newTrip = {
        stateDetails:  {
          "name": "Israel",
          "topLevelDomain": [
            ".il"
          ],
          "alpha2Code": "IL",
          "alpha3Code": "ISR",
          "callingCodes": [
            "972"
          ],
          "capital": "Jerusalem",
          "altSpellings": [
            "IL",
            "State of Israel",
            "Medīnat Yisrā'el"
          ],
          "region": "Asia",
          "subregion": "Western Asia",
          "population": 8527400,
          "latlng": [
            31.5,
            34.75
          ],
          "demonym": "Israeli",
          "area": 20770.0,
          "gini": 39.2,
          "timezones": [
            "UTC+02:00"
          ],
          "borders": [
            "EGY",
            "JOR",
            "LBN",
            "SYR"
          ],
          "nativeName": "יִשְׂרָאֵל",
          "numericCode": "376",
          "currencies": [
            {
              "code": "ILS",
              "name": "Israeli new shekel",
              "symbol": "₪"
            }
          ],
          "languages": [
            {
              "iso639_1": "he",
              "iso639_2": "heb",
              "name": "Hebrew (modern)",
              "nativeName": "עברית"
            },
            {
              "iso639_1": "ar",
              "iso639_2": "ara",
              "name": "Arabic",
              "nativeName": "العربية"
            }
          ],
          "translations": {
            "de": "Israel",
            "es": "Israel",
            "fr": "Israël",
            "ja": "イスラエル",
            "it": "Israele",
            "br": "Israel",
            "pt": "Israel",
            "nl": "Israël",
            "hr": "Izrael",
            "fa": "اسرائیل"
          },
          "flag": "https://restcountries.eu/data/isr.svg",
          "regionalBlocs": [],
          "cioc": "ISR"
        },
        fromDate: new Date(),
        toDate: new Date(),
        note: 'Wow'
      }
      this.trips.push(newTrip);
    }

   this.notifyTripsChange();
  }
}
