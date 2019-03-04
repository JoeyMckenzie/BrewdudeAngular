import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BrewdudeConfiguration } from "../../models/brewdude-configuration";
import { PublicConstants } from "../../constants/public.constants";

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  private _configuration: BrewdudeConfiguration;

  constructor(private http: HttpClient) {
    this.http.get<BrewdudeConfiguration>(PublicConstants.configurationEndpoint).subscribe(data => {
      this._configuration = data;
    });
  }

  get configuration(): BrewdudeConfiguration {
    return this._configuration;
  }
}
