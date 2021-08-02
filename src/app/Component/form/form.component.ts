import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder,  FormGroup, Validators} from "@angular/forms";
import {TripData} from "../../Interfaces/trip-data.interface";
import {State} from "../../Interfaces/state.interface";
import {ManagerService} from "../../Services/manager.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {
  userInput: TripData | undefined ;
  tripForm!: FormGroup;
  selectedState!: State;
  tripFormSubscription!: Subscription;

  constructor(private formBuilder: FormBuilder, private managerService: ManagerService) {}

  ngOnInit(): void {
   this.initFormValues();
  }

  initFormValues(): void {
    this.tripForm = this.formBuilder.group({
      state: ['', [Validators.required]],
      fromDate: ['', [Validators.required]],
      toDate: ['', [Validators.required]],
      note: '',
    });
    this.onChanges();
  }

  initStage(): void {
    if (this.tripFormSubscription) {
      this.tripFormSubscription.unsubscribe();
    }
    this.initFormValues();
  }

  onChanges(): void {
    this.tripFormSubscription = this.tripForm.valueChanges.subscribe(value => {});
  }

  stateOptionSelected(state: State): void {
    this.selectedState = state;
  }

  onSubmit(): void {
    console.log(this.tripForm.value);
    this.managerService.addNewTrip({...this.tripForm.value, stateDetails: this.selectedState});
    this.initFormValues();
  }

  ngOnDestroy(): void {
    this.tripFormSubscription.unsubscribe();
  }

}
