import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

/** Components **/
import { MainComponent } from './Component/main/main.component';
import { TripsTableComponent } from './Component/trips-table/trips-table.component';
import { SearchStatesComponent } from './Component/search-states/search-states.component';
import { FormComponent } from './Component/form/form.component';

/** Services **/

import {ManagerService} from "./Services/manager.service";
import {ConfigurationService} from "./Services/configuration.service";
import {ApiServicesService} from "./Services/api-services.service";

/** Pipes **/
import { DatePipe } from '@angular/common';

/** Materials **/
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from "./material-module";
import {MatTableModule} from '@angular/material/table';
import { MapComponent } from './Component/map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TripsTableComponent,
    SearchStatesComponent,
    FormComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DatePipe,
    ConfigurationService,
    ApiServicesService,
    ManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
