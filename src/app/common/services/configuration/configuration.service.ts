import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BrewdudeConfiguration} from "../../models/brewdude-configuration";

const CONFIG = "./assets/configuration/endpoints.json";

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  private _configuration: BrewdudeConfiguration;

  constructor(private http: HttpClient) {
    this.http.get<BrewdudeConfiguration>(CONFIG).subscribe(data => {
      this._configuration = data;
      console.log(this._configuration);
    });
  }

  get public(): string {
    return this._configuration.modules.public;
  }
}
