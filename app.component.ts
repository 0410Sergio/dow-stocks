import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { StocksApiService } from './stocks/stocks-api.service';
import { Stock } from './stocks/stock.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Stocks';

  element!: any;
  element2!: any;
  fixMessage!: any;
  childMessage: any = [];
  childMessage2: any = [];
  childMessage3: any = [];


  receiveDataMessage($event: any) {
    this.fixMessage = $event;
    this.element = this.fixMessage.pop()
    this.element2 = this.fixMessage[0]
    this.fixMessage.reverse()

    this.element.change = this.element.price - this.element2.price
    if(this.element.change === 0) {
      this.element.change = this.element2.change
    }
    this.element.changepercent = Number(((this.element.change * 100) / this.element2.price).toFixed(2))
    this.fixMessage.push(this.element)
    this.fixMessage.reverse()

    console.log(this.fixMessage)
    this.childMessage = [];

    for(let i=0; i < 30; i++) {
      this.childMessage.unshift(this.fixMessage[i].price);
      this.childMessage3.unshift((this.fixMessage[i].date).replace('\'','').slice(5));
      //.replace('\'','').slice(5, -1)
      //console.log(this.childMessage3)
    }

  }

  receiveNewsMessage($event: any) {
    this.childMessage2 = [];
    this.childMessage2.push($event)
    //console.log(this.childMessage2);
  }



  constructor(private stocksApi: StocksApiService) {
  }
  ngOnInit() {

  }



}
