import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {TripData} from "../../Interfaces/trip-data.interface";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  userInput: TripData | undefined = undefined;
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  constructor() {

  }

  ngOnInit(): void {
  }

  initUserInput() {
    this.userInput = {
      stateDetails: {
        name: '',
        flag: '',
      },
      fromDate: new Date(),
      toDate: new Date(),
      note: '',
    }
  }

}
