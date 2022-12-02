import {Injectable} from '@angular/core';

import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root',
})
export class ConfigServiceService {
  endpoint = 'https://4490-41-229-82-254.eu.ngrok.io';
  resource = '/question';

  constructor(protected http: HttpClient) {
  }
  getQuestion():any {
    return this.http.get(this.endpoint + this.resource+'/all');
  }
}


