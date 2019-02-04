import { Injectable } from '@angular/core';
import {Configuration} from "../../models/configuration";
import {HttpClient} from "@angular/common/http";

const CONFIG = "./assets/configuration/endpoints.json";

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  private _configuration: Configuration;

  constructor(private http: HttpClient) {
    this.http.get<Configuration>(CONFIG).subscribe(data => {
      this._configuration = data;
      console.log(this._configuration);
    });
  }

  get public(): string {
    return this._configuration.modules.public;
  }
}
