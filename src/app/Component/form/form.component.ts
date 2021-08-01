import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {TripData} from "../../Interfaces/trip-data.interface";
import {State} from "../../Interfaces/state.interface";
import {ManagerService} from "../../Services/manager.service";
import {Subscription} from "rxjs";
import {SearchStatesComponent} from "../search-states/search-states.component";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, AfterViewInit, OnDestroy {
  userInput: TripData | undefined ;
  tripForm!: FormGroup;
  selectedState!: State;
  tripFormSubscription!: Subscription;
@ViewChild('auto') statesSearch!: SearchStatesComponent;
  private statesSearchComponent!: SearchStatesComponent;

  constructor(private formBuilder: FormBuilder, private managerService: ManagerService) {

  }


  ngAfterViewInit(): void {
    this.statesSearchComponent = this.statesSearch;
  }



  ngOnInit(): void {
    this.tripForm = this.formBuilder.group({
      /* state:  this.formBuilder.group({
         name: ['', [Validators.required, Validators.minLength(2)]],
         flag: ['', [Validators.required, Validators.minLength(2)]],
       }),*/
      fromDate: ['', [Validators.required]],
      toDate: ['', [Validators.required]],
      note: '',
    });
    this.onChanges();
  }

  initFormValues() {
    if (this.tripFormSubscription) {
      this.tripFormSubscription.unsubscribe();
    }
    this.tripForm = this.formBuilder.group({
      /* state:  this.formBuilder.group({
         name: ['', [Validators.required, Validators.minLength(2)]],
         flag: ['', [Validators.required, Validators.minLength(2)]],
       }),*/
      fromDate: ['', [Validators.required]],
      toDate: ['', [Validators.required]],
      note: '',
    });
    this.onChanges();
    this.statesSearchComponent.cleanStateInput();
  }

  onChanges(): void {
    this.tripFormSubscription = this.tripForm.valueChanges.subscribe(value => {
      console.log(value);
      console.log(this.tripForm.get('state')?.value);
    });
    console.log(this.tripForm.value);
    console.log(this.tripForm.valid);
//
  }

  stateOptionSelected(state: State) {
    // this.changeStateForm(state);
    // this.managerService.selectState(state);
    this.selectedState = state;
  }

  onSubmit() {
    console.log(this.tripForm.value);
    this.managerService.addNewTrip({...this.tripForm.value, stateDetails: this.selectedState});
    this.initFormValues();
  }

  ngOnDestroy(): void {
    this.tripFormSubscription.unsubscribe();
  }


  /* stateInputChange(inputString:  State){
     this.changeStateForm({name: '', flag: ''});
   }

   public changeStateForm(input: State){
     console.log(input)
     this.tripForm.get('state')?.setValue(input);
     console.log( this.tripForm.get('state'));
   }*/



}
