import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-http-caller',
  templateUrl: './http-caller.component.html',
  styleUrls: ['./http-caller.component.css']
})
export class HttpCallerComponent implements OnInit {

  message!: string;

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit(this.message);
  }

  constructor(private http: HttpClient) {}

  ngOnInit(){
    /*let headers = new HttpHeaders({
      'host': 'financialmodelingprep.com',
      'key': 'apikey=******************'
    }); */
    this.http
      .get<any>('https://financialmodelingprep.com/api/v3/stock_news?tickers=AAPL&limit=2&apikey=**************************', {
        //headers: headers
        // quote/AAPL?
        // AXP,AMGN,AAPL,BA,CAT,CSCO,CVX,GS,HD,HON,IBM,INTC,JNJ,KO,JPM,MCD,MMM,MRK,MSFT,NKE,PG,TRV,UNH,CRM,VZ,V,WBA,WMT,DIS,DOW
        // ?serietype=line&from=2022-01-01&to=2022-04-25&apikey
        // stock_news?tickers=AAPL&limit=5&
      })
      .subscribe(data => {
        this.message = data;
        console.log(data);
      });
  }
}



