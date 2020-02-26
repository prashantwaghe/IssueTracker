import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IssueTrackerService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });

  constructor(private httpClient: HttpClient) { }

  getIssueStatus(): Observable<any> {
    return this.httpClient.get('https://moneytor.in/resources/data/sample.json');
  }
}
