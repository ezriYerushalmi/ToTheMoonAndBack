import {State} from "./state.interface";

export interface TripData {
  stateDetails: State
  fromDate: Date;
  toDate: Date;
  note: string
}
