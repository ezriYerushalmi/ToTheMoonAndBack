import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {ApiServicesService} from "../../Services/api-services.service";
import {State} from "../../Interfaces/state.interface";


@Component({
  selector: 'app-search-states',
  templateUrl: './search-states.component.html',
  styleUrls: ['./search-states.component.scss']
})
export class SearchStatesComponent implements OnInit {
  stateCtrl = new FormControl();
  filteredStates: Observable<State[]>;
  @Input() states: State[] = [];


  constructor(private apiService: ApiServicesService) {

    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.states.slice())
      );
  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.name.toLowerCase().includes(filterValue));
  }

  ngOnInit(): void {
    this.apiService.getCountries().subscribe((states: any) => {
      this.states = states;
    })
  }
}
