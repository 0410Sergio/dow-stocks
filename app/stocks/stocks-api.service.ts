import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_URL} from '../env';
import {Stock, NewsData} from './stock.model';

@Injectable()
export class StocksApiService {

  constructor(private http: HttpClient) {
  }

  picker!: String

  // GET list of public, future events
  getStocks(): Observable<Stock[]> | any {
    return this.http
      .get(`${API_URL}/` + this.picker);
  }
  getNews(): Observable<NewsData[]> | any {
    return this.http
      .get(`${API_URL}/` + this.picker);
  }
}
