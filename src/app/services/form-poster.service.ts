import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Employee } from '../models/employee.model';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FormPosterService {
  constructor(private http: Http) {}

  private extractData(res: Response) {
    let body = res.json();
    return body.fields || {};
  }

  private extractLanguages(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleError(error: any) {
    console.error('post error: ', error);
    return Observable.throw(error.statusText);
  }
  getLanguages(): Observable<any> {
    return this.http
      .get('http://localhost:3100/getlanguages')
      .delay(1000)
      .map(this.extractLanguages)
      .catch(this.handleError);
  }

  postEmployeeForm(employee: Employee): Observable<any> {
    console.log('Posting employee: ', employee);
    let body = JSON.stringify(employee);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http
      .post('http://localhost:3100/postemployee', body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }
}
