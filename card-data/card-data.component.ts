import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { StockChartComponent } from '../stock-chart/stock-chart.component';

@Component({
  selector: 'app-card-data',
  templateUrl: './card-data.component.html',
  styleUrls: ['./card-data.component.css']
})
export class CardDataComponent implements OnInit {

  childMessage!: any;

  receiveMessage($event: any) {
    this.childMessage = $event
    //console.log(this.childMessage[0].price)
  }


  constructor() { }

  ngOnInit() {
  }







}
