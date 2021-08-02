import {Component, Input, OnInit, EventEmitter, Output, ViewChild, ElementRef, Renderer2} from '@angular/core';
import {FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {ApiServicesService} from "../../Services/api-services.service";
import {State} from "../../Interfaces/state.interface";



@Component({
  selector: 'app-search-states',
  templateUrl: './search-states.component.html',
  styleUrls: ['./search-states.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR, useExisting: SearchStatesComponent, multi: true
  }]
})
export class SearchStatesComponent implements OnInit {
  stateCtrl = new FormControl();
  filteredStates: Observable<State[]>;
  @Input() states: State[] = [];
  @Output() inputValueChange = new EventEmitter();
  @Output() selectedState = new EventEmitter();


  onTouched = () => {};
  onChange = (_: string) => {};

  @ViewChild('input', {static: true, read: ElementRef}) inputElementRef!: ElementRef;

  constructor(private apiService: ApiServicesService, private _renderer: Renderer2) {

    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.states.slice())
      );
    this.stateCtrl.valueChanges.subscribe((value) => {
      this.inputValueChange.emit({inputValue: value});
    });
  }


  clearInput() {
    this._renderer.setProperty(this.inputElementRef.nativeElement, 'value', '');
    this.onChange('');
  }

  onInputChange() {
    const value = this.inputElementRef.nativeElement.value;
    this.onChange(value);
  }

  onBlur() {
    this.onTouched();
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  writeValue(value: string) {
    this._renderer.setProperty(this.inputElementRef.nativeElement, 'value', value);
  }

  setDisabledState(isDisabled: boolean): void {
    this._renderer.setProperty(this.inputElementRef.nativeElement, 'disabled', isDisabled);
  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.name.toLowerCase().includes(filterValue));
  }

  stateOptionSelected($event: { option: { value: any; }; }){
    const stateName = $event.option.value;
    const selectedState = this.states.find(s => {
      return s.name === stateName
    });
    this.selectedState.emit(selectedState);
  }

    cleanStateInput() {
      this.stateCtrl.setValue('');
    }

  ngOnInit(): void {
    this.apiService.getCountries().subscribe((states: any) => {
      this.states = states;
    })
  }
}
