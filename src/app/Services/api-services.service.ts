import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ConfigurationService} from "./configuration.service";

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {



  constructor(private http: HttpClient, private configService: ConfigurationService) {
  }

  getCountries() {
    return this.http.get(`${this.configService.statesHostName}/all`);
  }

  getCountry(id: string) {
    return this.http.get(`${this.configService.statesHostName}/alpha?codes=${id}`);
  }

  getRegionCountries(region: string) {
    return this.http.get(`${this.configService.statesHostName}/region/${region}`);
  }

}
