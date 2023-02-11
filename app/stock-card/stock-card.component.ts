import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter, OnDestroy, Input, ElementRef, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { StocksApiService } from '../stocks/stocks-api.service';
import { Stock } from '../stocks/stock.model';
import { StockChartComponent } from '../stock-chart/stock-chart.component';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';



@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.css']
})
export class StockCardComponent implements OnInit {

  //stockList: Array<String> = ['amgn','aapl','axp','ba','cat','csco','cvx','gs','hd','hon','ibm','intc','jnj','ko','jpm','mcd','mmm','mrk','msft','nke','pg','trv','unh','crm','vz','v','wba','wmt','dis','dow']

  @Output() dataMessageEvent = new EventEmitter<string>();
  @Output() newsMessageEvent = new EventEmitter<String>();

  stockChart!: StockChartComponent;
  dataListSubs!: Subscription;

  axpList: Stock[] | any;
  amgnList: Stock[] | any;
  aaplList: Stock[] | any;
  baList: Stock[] | any;
  catList: Stock[] | any;
  cscoList: Stock[] | any;
  cvxList: Stock[] | any;
  gsList: Stock[] | any;
  hdList: Stock[] | any;
  honList: Stock[] | any;
  ibmList: Stock[] | any;
  intcList: Stock[] | any;
  jnjList: Stock[] | any;
  koList: Stock[] | any;
  jpmList: Stock[] | any;
  mcdList: Stock[] | any;
  mmmList: Stock[] | any;
  mrkList: Stock[] | any;
  msftList: Stock[] | any;
  nkeList: Stock[] | any;
  pgList: Stock[] | any;
  trvList: Stock[] | any;
  unhList: Stock[] | any;
  crmList: Stock[] | any;
  vzList: Stock[] | any;
  vList: Stock[] | any;
  wbaList: Stock[] | any;
  wmtList: Stock[] | any;
  disList: Stock[] | any;
  dowList: Stock[] | any;


  constructor(private dataApi: StocksApiService, private el: ElementRef, private renderer: Renderer2) {
   }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.dataListSubs.unsubscribe();
  }


  aaplMessage() {
    this.dataApi.picker = 'aapl'
    this.newsMessageEvent.emit(this.dataApi.picker)
    this.dataListSubs = this.dataApi
    .getStocks()
    .subscribe((res: Stock) => {
      this.aaplList = res;
      this.aaplList[0].changepercent > 0 ?
        this.el.nativeElement.querySelector('#aapl').setAttribute('class', 'ui button cards green one column'):
        this.el.nativeElement.querySelector('#aapl').setAttribute('class', 'ui button cards red one column')
      this.dataMessageEvent.emit(this.aaplList)
      this.aaplList = '$' + (this.aaplList[0].price).toString() + ' \n ' + (this.aaplList[0].changepercent).toString() + ' %';
    },
    console.error
    );
  }
  amgnMessage() {
    this.dataApi.picker = 'amgn'
    this.newsMessageEvent.emit(this.dataApi.picker)
    this.dataListSubs = this.dataApi
    .getStocks()
    .subscribe((res: Stock) => {
      this.amgnList = res;
      this.amgnList[0].changepercent > 0 ?
        this.el.nativeElement.querySelector('#amgn').setAttribute('class', 'ui button cards green one column'):
        this.el.nativeElement.querySelector('#amgn').setAttribute('class', 'ui button cards red one column')
      this.dataMessageEvent.emit(this.amgnList);
      this.amgnList = '$' + (this.amgnList[0].price).toString() + ' \n ' + (this.amgnList[0].changepercent).toString() + ' %';
    },
    console.error
    );
  }
  axpMessage(){
    this.dataApi.picker = 'axp'
    this.newsMessageEvent.emit(this.dataApi.picker)
    this.dataListSubs = this.dataApi
    .getStocks()
    .subscribe((res: Stock) => {
      this.axpList = res;
      this.axpList[0].changepercent > 0 ?
        this.el.nativeElement.querySelector('#axp').setAttribute('class', 'ui button cards green one column'):
        this.el.nativeElement.querySelector('#axp').setAttribute('class', 'ui button cards red one column')
      this.dataMessageEvent.emit(this.axpList)
      this.axpList = '$' + (this.axpList[0].price).toString() + ' \n ' + (this.axpList[0].changepercent).toString() + ' %';
    },
    console.error
    );
  }
  baMessage() {
    this.dataApi.picker = 'ba'
    this.newsMessageEvent.emit(this.dataApi.picker)
    this.dataListSubs = this.dataApi
    .getStocks()
    .subscribe((res: Stock) => {
      this.baList = res;
      this.baList[0].changepercent > 0 ?
        this.el.nativeElement.querySelector('#ba').setAttribute('class', 'ui button cards green one column'):
        this.el.nativeElement.querySelector('#ba').setAttribute('class', 'ui button cards red one column')
      this.dataMessageEvent.emit(this.baList);
      this.baList = '$' + (this.baList[0].price).toString() + ' \n ' + (this.baList[0].changepercent).toString() + ' %';
    },
    console.error
    );
  }
  catMessage() {
    this.dataApi.picker = 'cat'
    this.newsMessageEvent.emit(this.dataApi.picker)
    this.dataListSubs = this.dataApi
    .getStocks()
    .subscribe((res: Stock) => {
      this.catList = res;
      this.catList[0].changepercent > 0 ?
        this.el.nativeElement.querySelector('#cat').setAttribute('class', 'ui button cards green one column'):
        this.el.nativeElement.querySelector('#cat').setAttribute('class', 'ui button cards red one column')
      this.dataMessageEvent.emit(this.catList);
      this.catList = '$' + (this.catList[0].price).toString() + ' \n ' + (this.catList[0].changepercent).toString() + ' %';
    },
    console.error
    );
  }
  crmMessage() {
    this.dataApi.picker = 'crm'
    this.newsMessageEvent.emit(this.dataApi.picker)
    this.dataListSubs = this.dataApi
    .getStocks()
    .subscribe((res: Stock) => {
      this.crmList = res;
      this.crmList[0].changepercent > 0 ?
        this.el.nativeElement.querySelector('#crm').setAttribute('class', 'ui button cards green one column'):
        this.el.nativeElement.querySelector('#crm').setAttribute('class', 'ui button cards red one column')
      this.dataMessageEvent.emit(this.crmList);
      this.crmList = '$' + (this.crmList[0].price).toString() + ' \n ' + (this.crmList[0].changepercent).toString() + ' %';
    },
    console.error
    );
  }
  cscoMessage() {
    this.dataApi.picker = 'csco'
    this.newsMessageEvent.emit(this.dataApi.picker)
    this.dataListSubs = this.dataApi
    .getStocks()
    .subscribe((res: Stock) => {
      this.cscoList = res;
      this.cscoList[0].changepercent > 0 ?
        this.el.nativeElement.querySelector('#csco').setAttribute('class', 'ui button cards green one column'):
        this.el.nativeElement.querySelector('#csco').setAttribute('class', 'ui button cards red one column')
      this.dataMessageEvent.emit(this.cscoList);
      this.cscoList = '$' + (this.cscoList[0].price).toString() + ' \n ' + (this.cscoList[0].changepercent).toString() + ' %';
    },
    console.error
    );
  }
  cvxMessage() {
    this.dataApi.picker = 'cvx'
    this.newsMessageEvent.emit(this.dataApi.picker)
    this.dataListSubs = this.dataApi
    .getStocks()
    .subscribe((res: Stock) => {
      this.cvxList = res;
      this.cvxList[0].changepercent > 0 ?
        this.el.nativeElement.querySelector('#cvx').setAttribute('class', 'ui button cards green one column'):
        this.el.nativeElement.querySelector('#cvx').setAttribute('class', 'ui button cards red one column')
      this.dataMessageEvent.emit(this.cvxList);
      this.cvxList = '$' + (this.cvxList[0].price).toString() + ' \n ' + (this.cvxList[0].changepercent).toString() + ' %';
    },
    console.error
    );
  }
  disMessage() {
    this.dataApi.picker = 'dis'
    this.newsMessageEvent.emit(this.dataApi.picker)
    this.dataListSubs = this.dataApi
    .getStocks()
    .subscribe((res: Stock) => {
      this.disList = res;
      this.disList[0].changepercent > 0 ?
        this.el.nativeElement.querySelector('#dis').setAttribute('class', 'ui button cards green one column'):
        this.el.nativeElement.querySelector('#dis').setAttribute('class', 'ui button cards red one column')
      this.dataMessageEvent.emit(this.disList);
      this.disList = '$' + (this.disList[0].price).toString() + ' \n ' + (this.disList[0].changepercent).toString() + ' %';
    },
    console.error
    );
  }
  dowMessage() {
    this.dataApi.picker = 'dow'
    this.newsMessageEvent.emit(this.dataApi.picker)
    this.dataListSubs = this.dataApi
    .getStocks()
    .subscribe((res: Stock) => {
      this.dowList = res;
      this.dowList[0].changepercent > 0 ?
        this.el.nativeElement.querySelector('#dow').setAttribute('class', 'ui button cards green one column'):
        this.el.nativeElement.querySelector('#dow').setAttribute('class', 'ui button cards red one column')
      this.dataMessageEvent.emit(this.dowList);
      this.dowList = '$' + (this.dowList[0].price).toString() + ' \n ' + (this.dowList[0].changepercent).toString() + ' %';
    },
    console.error
    );
  }
  gsMessage() {
    this.dataApi.picker = 'gs'
    this.newsMessageEvent.emit(this.dataApi.picker)
    this.dataListSubs = this.dataApi
    .getStocks()
    .subscribe((res: Stock) => {
      this.gsList = res;
      this.gsList[0].changepercent > 0 ?
        this.el.nativeElement.querySelector('#gs').setAttribute('class', 'ui button cards green one column'):
        this.el.nativeElement.querySelector('#gs').setAttribute('class', 'ui button cards red one column')
      this.dataMessageEvent.emit(this.gsList);
      this.gsList = '$' + (this.gsList[0].price).toString() + ' \n ' + (this.gsList[0].changepercent).toString() + ' %';
    },
    console.error
    );
  }
  hdMessage() {
    this.dataApi.picker = 'hd'
    this.newsMessageEvent.emit(this.dataApi.picker)
    this.dataListSubs = this.dataApi
    .getStocks()
    .subscribe((res: Stock) => {
      this.hdList = res;
      this.hdList[0].changepercent > 0 ?
        this.el.nativeElement.querySelector('#hd').setAttribute('class', 'ui button cards green one column'):
        this.el.nativeElement.querySelector('#hd').setAttribute('class', 'ui button cards red one column')
      this.dataMessageEvent.emit(this.hdList);
      this.hdList = '$' + (this.hdList[0].price).toString() + ' \n ' + (this.hdList[0].changepercent).toString() + ' %';
    },
    console.error
    );
  }
  honMessage() {
    this.dataApi.picker = 'hon'
    this.newsMessageEvent.emit(this.dataApi.picker)
    this.dataListSubs = this.dataApi
    .getStocks()
    .subscribe((res: Stock) => {
      this.honList = res;
      this.honList[0].changepercent > 0 ?
        this.el.nativeElement.querySelector('#hon').setAttribute('class', 'ui button cards green one column'):
        this.el.nativeElement.querySelector('#hon').setAttribute('class', 'ui button cards red one column')
      this.dataMessageEvent.emit(this.honList);
      this.honList = '$' + (this.honList[0].price).toString() + ' \n ' + (this.honList[0].changepercent).toString() + ' %';
    },
    console.error
    );
  }
  ibmMessage() {
    this.dataApi.picker = 'ibm'
    this.newsMessageEvent.emit(this.dataApi.picker)
    this.dataListSubs = this.dataApi
    .getStocks()
    .subscribe((res: Stock) => {
      this.ibmList = res;
      this.ibmList[0].changepercent > 0 ?
        this.el.nativeElement.querySelector('#ibm').setAttribute('class', 'ui button cards green one column'):
        this.el.nativeElement.querySelector('#ibm').setAttribute('class', 'ui button cards red one column')
      this.dataMessageEvent.emit(this.ibmList);
      this.ibmList = '$' + (this.ibmList[0].price).toString() + ' \n ' + (this.ibmList[0].changepercent).toString() + ' %';
    },
    console.error
    );
  }
  intcMessage() {
    this.dataApi.picker = 'intc'
    this.newsMessageEvent.emit(this.dataApi.picker)
    this.dataListSubs = this.dataApi
    .getStocks()
    .subscribe((res: Stock) => {
      this.intcList = res;
      this.intcList[0].changepercent > 0 ?
        this.el.nativeElement.querySelector('#intc').setAttribute('class', 'ui button cards green one column'):
        this.el.nativeElement.querySelector('#intc').setAttribute('class', 'ui button cards red one column')
      this.dataMessageEvent.emit(this.intcList);
      this.intcList = '$' + (this.intcList[0].price).toString() + ' \n ' + (this.intcList[0].changepercent).toString() + ' %';
    },
    console.error
    );
  }
  jnjMessage() {
    this.dataApi.picker = 'jnj'
    this.newsMessageEvent.emit(this.dataApi.picker)
    this.dataListSubs = this.dataApi
    .getStocks()
    .subscribe((res: Stock) => {
      this.jnjList = res;
      this.jnjList[0].changepercent > 0 ?
        this.el.nativeElement.querySelector('#jnj').setAttribute('class', 'ui button cards green one column'):
        this.el.nativeElement.querySelector('#jnj').setAttribute('class', 'ui button cards red one column')
      this.dataMessageEvent.emit(this.jnjList);
      this.jnjList = '$' + (this.jnjList[0].price).toString() + ' \n ' + (this.jnjList[0].changepercent).toString() + ' %';
    },
    console.error
    );
  }
  jpmMessage() {
    this.dataApi.picker = 'jpm'
    this.newsMessageEvent.emit(this.dataApi.picker)
    this.dataListSubs = this.dataApi
    .getStocks()
    .subscribe((res: Stock) => {
      this.jpmList = res;
      this.jpmList[0].changepercent > 0 ?
        this.el.nativeElement.querySelector('#jpm').setAttribute('class', 'ui button cards green one column'):
        this.el.nativeElement.querySelector('#jpm').setAttribute('class', 'ui button cards red one column')
      this.dataMessageEvent.emit(this.jpmList);
      this.jpmList = '$' + (this.jpmList[0].price).toString() + ' \n ' + (this.jpmList[0].changepercent).toString() + ' %';
    },
    console.error
    );
  }
  koMessage() {
    this.dataApi.picker = 'ko'
    this.newsMessageEvent.emit(this.dataApi.picker)
    this.dataListSubs = this.dataApi
    .getStocks()
    .subscribe((res: Stock) => {
      this.koList = res;
      this.koList[0].changepercent > 0 ?
        this.el.nativeElement.querySelector('#ko').setAttribute('class', 'ui button cards green one column'):
        this.el.nativeElement.querySelector('#ko').setAttribute('class', 'ui button cards red one column')
      this.dataMessageEvent.emit(this.koList);
      this.koList = '$' + (this.koList[0].price).toString() + ' \n ' + (this.koList[0].changepercent).toString() + ' %';
    },
    console.error
    );
  }
  mcdMessage() {
    this.dataApi.picker = 'mcd'
    this.newsMessageEvent.emit(this.dataApi.picker)
    this.dataListSubs = this.dataApi
    .getStocks()
    .subscribe((res: Stock) => {
      this.mcdList = res;
      this.mcdList[0].changepercent > 0 ?
        this.el.nativeElement.querySelector('#mcd').setAttribute('class', 'ui button cards green one column'):
        this.el.nativeElement.querySelector('#mcd').setAttribute('class', 'ui button cards red one column')
      this.dataMessageEvent.emit(this.mcdList);
      this.mcdList = '$' + (this.mcdList[0].price).toString() + ' \n ' + (this.mcdList[0].changepercent).toString() + ' %';
    },
    console.error
    );
  }
  mmmMessage() {
    this.dataApi.picker = 'mmm'
    this.newsMessageEvent.emit(this.dataApi.picker)
    this.dataListSubs = this.dataApi
    .getStocks()
    .subscribe((res: Stock) => {
      this.mmmList = res;
      this.mmmList[0].changepercent > 0 ?
        this.el.nativeElement.querySelector('#mmm').setAttribute('class', 'ui button cards green one column'):
        this.el.nativeElement.querySelector('#mmm').setAttribute('class', 'ui button cards red one column')
      this.dataMessageEvent.emit(this.mmmList);
      this.mmmList = '$' + (this.mmmList[0].price).toString() + ' \n ' + (this.mmmList[0].changepercent).toString() + ' %';
    },
    console.error
    );
  }
  mrkMessage() {
    this.dataApi.picker = 'mrk'
    this.newsMessageEvent.emit(this.dataApi.picker)
    this.dataListSubs = this.dataApi
    .getStocks()
    .subscribe((res: Stock) => {
      this.mrkList = res;
      this.mrkList[0].changepercent > 0 ?
        this.el.nativeElement.querySelector('#mrk').setAttribute('class', 'ui button cards green one column'):
        this.el.nativeElement.querySelector('#mrk').setAttribute('class', 'ui button cards red one column')
      this.dataMessageEvent.emit(this.mrkList);
      this.mrkList = '$' + (this.mrkList[0].price).toString() + ' \n ' + (this.mrkList[0].changepercent).toString() + ' %';
    },
    console.error
    );
  }
  msftMessage() {
    this.dataApi.picker = 'msft'
    this.newsMessageEvent.emit(this.dataApi.picker)
    this.dataListSubs = this.dataApi
    .getStocks()
    .subscribe((res: Stock) => {
      this.msftList = res;
      this.msftList[0].changepercent > 0 ?
        this.el.nativeElement.querySelector('#msft').setAttribute('class', 'ui button cards green one column'):
        this.el.nativeElement.querySelector('#msft').setAttribute('class', 'ui button cards red one column')
      this.dataMessageEvent.emit(this.msftList);
      this.msftList = '$' + (this.msftList[0].price).toString() + ' \n ' + (this.msftList[0].changepercent).toString() + ' %';
    },
    console.error
    );
  }
  nkeMessage() {
    this.dataApi.picker = 'nke'
    this.newsMessageEvent.emit(this.dataApi.picker)
    this.dataListSubs = this.dataApi
    .getStocks()
    .subscribe((res: Stock) => {
      this.nkeList = res;
      this.nkeList[0].changepercent > 0 ?
        this.el.nativeElement.querySelector('#nke').setAttribute('class', 'ui button cards green one column'):
        this.el.nativeElement.querySelector('#nke').setAttribute('class', 'ui button cards red one column')
      this.dataMessageEvent.emit(this.nkeList);
      this.nkeList = '$' + (this.nkeList[0].price).toString() + ' \n ' + (this.nkeList[0].changepercent).toString() + ' %';
    },
    console.error
    );
  }
  pgMessage() {
    this.dataApi.picker = 'pg'
    this.newsMessageEvent.emit(this.dataApi.picker)
    this.dataListSubs = this.dataApi
    .getStocks()
    .subscribe((res: Stock) => {
      this.pgList = res;
      this.pgList[0].changepercent > 0 ?
        this.el.nativeElement.querySelector('#pg').setAttribute('class', 'ui button cards green one column'):
        this.el.nativeElement.querySelector('#pg').setAttribute('class', 'ui button cards red one column')
      this.dataMessageEvent.emit(this.pgList);
      this.pgList = '$' + (this.pgList[0].price).toString() + ' \n ' + (this.pgList[0].changepercent).toString() + ' %';
    },
    console.error
    );
  }
  trvMessage() {
    this.dataApi.picker = 'trv'
    this.newsMessageEvent.emit(this.dataApi.picker)
    this.dataListSubs = this.dataApi
    .getStocks()
    .subscribe((res: Stock) => {
      this.trvList = res;
      this.trvList[0].changepercent > 0 ?
        this.el.nativeElement.querySelector('#trv').setAttribute('class', 'ui button cards green one column'):
        this.el.nativeElement.querySelector('#trv').setAttribute('class', 'ui button cards red one column')
      this.dataMessageEvent.emit(this.trvList);
      this.trvList = '$' + (this.trvList[0].price).toString() + ' \n ' + (this.trvList[0].changepercent).toString() + ' %';
    },
    console.error
    );
  }
  unhMessage() {
    this.dataApi.picker = 'unh'
    this.newsMessageEvent.emit(this.dataApi.picker)
    this.dataListSubs = this.dataApi
    .getStocks()
    .subscribe((res: Stock) => {
      this.unhList = res;
      this.unhList[0].changepercent > 0 ?
        this.el.nativeElement.querySelector('#unh').setAttribute('class', 'ui button cards green one column'):
        this.el.nativeElement.querySelector('#unh').setAttribute('class', 'ui button cards red one column')
      this.dataMessageEvent.emit(this.unhList);
      this.unhList = '$' + (this.unhList[0].price).toString() + ' \n ' + (this.unhList[0].changepercent).toString() + ' %';
    },
    console.error
    );
  }
  vzMessage() {
    this.dataApi.picker = 'vz'
    this.newsMessageEvent.emit(this.dataApi.picker)
    this.dataListSubs = this.dataApi
    .getStocks()
    .subscribe((res: Stock) => {
      this.vzList = res;
      this.vzList[0].changepercent > 0 ?
        this.el.nativeElement.querySelector('#vz').setAttribute('class', 'ui button cards green one column'):
        this.el.nativeElement.querySelector('#vz').setAttribute('class', 'ui button cards red one column')
      this.dataMessageEvent.emit(this.vzList);
      this.vzList = '$' + (this.vzList[0].price).toString() + ' \n ' + (this.vzList[0].changepercent).toString() + ' %';
    },
    console.error
    );
  }
  vMessage() {
    this.dataApi.picker = 'v'
    this.newsMessageEvent.emit(this.dataApi.picker)
    this.dataListSubs = this.dataApi
    .getStocks()
    .subscribe((res: Stock) => {
      this.vList = res;
      this.vList[0].changepercent > 0 ?
        this.el.nativeElement.querySelector('#v').setAttribute('class', 'ui button cards green one column'):
        this.el.nativeElement.querySelector('#v').setAttribute('class', 'ui button cards red one column')
      this.dataMessageEvent.emit(this.vList);
      this.vList = '$' + (this.vList[0].price).toString() + ' \n ' + (this.vList[0].changepercent).toString() + ' %';
    },
    console.error
    );
  }
  wbaMessage() {
    this.dataApi.picker = 'wba'
    this.newsMessageEvent.emit(this.dataApi.picker)
    this.dataListSubs = this.dataApi
    .getStocks()
    .subscribe((res: Stock) => {
      this.wbaList = res;
      this.wbaList[0].changepercent > 0 ?
        this.el.nativeElement.querySelector('#wba').setAttribute('class', 'ui button cards green one column'):
        this.el.nativeElement.querySelector('#wba').setAttribute('class', 'ui button cards red one column')
      this.dataMessageEvent.emit(this.wbaList);
      this.wbaList = '$' + (this.wbaList[0].price).toString() + ' \n ' + (this.wbaList[0].changepercent).toString() + ' %';
    },
    console.error
    );
  }
  wmtMessage() {
    this.dataApi.picker = 'wmt'
    this.newsMessageEvent.emit(this.dataApi.picker)
    this.dataListSubs = this.dataApi
    .getStocks()
    .subscribe((res: Stock) => {
      this.wmtList = res;
      this.wmtList[0].changepercent > 0 ?
        this.el.nativeElement.querySelector('#wmt').setAttribute('class', 'ui button cards green one column'):
        this.el.nativeElement.querySelector('#wmt').setAttribute('class', 'ui button cards red one column')
      this.dataMessageEvent.emit(this.wmtList);
      this.wmtList = '$' + (this.wmtList[0].price).toString() + ' \n ' + (this.wmtList[0].changepercent).toString() + ' %';
    },
    console.error
    );
  }



}
