import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class JSONDataService {
  private _baseUrl = '/assets/data/';

  constructor(private http: Http) { }

  getData$(): Observable<any> {
    return this.http
      .get(`${this._baseUrl}data.json`)
      .map(this._handleSuccess)
      .catch(this._handleError);
  }

  private _handleSuccess(res: Response) {
    const body = res.json();
    return body || {};
  }

  private _handleError(err: Response | any) {
    const errorMsg = err.message || 'Unable to retrieve data';
    return Observable.throw(errorMsg);
  }

}
