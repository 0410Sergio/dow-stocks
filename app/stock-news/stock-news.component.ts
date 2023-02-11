import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges} from '@angular/core';
import { Subscription } from 'rxjs';
import { StocksApiService } from '../stocks/stocks-api.service';
import { NewsData } from '../stocks/stock.model';

@Component({
  selector: 'app-stock-news',
  templateUrl: './stock-news.component.html',
  styleUrls: ['./stock-news.component.css']
})

export class StockNewsComponent implements OnInit {

  @Output() newsMessageEvent = new EventEmitter<string>();

  @Input() newsCaller: any;
  newsListSubs!: Subscription;

  NewsList: NewsData[] | any = new Array(5);

  constructor(private dataApi: StocksApiService) {
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.newsListSubs.unsubscribe();
  }

  aaplNewsMessage(){
    this.dataApi.picker = 'aapl-news'
    this.newsListSubs = this.dataApi
    .getNews()
    .subscribe((res: NewsData) => {
      this.NewsList = res;
      this.newsMessageEvent.emit(this.NewsList)
            for(let i=0; i<5; i++){
        this.NewsList[i].image = (this.NewsList[i].image).replace('\"', '')
        this.NewsList[i].url = (this.NewsList[i].url).replace('\"', '')
        this.NewsList[i].title = (this.NewsList[i].title).replace('\"', '')
        this.NewsList[i].site = (this.NewsList[i].site).replace('\"', '')
        this.NewsList[i].text = (this.NewsList[i].text).replace('\"', '')

        this.NewsList[i].image = this.NewsList[i].image.substring(0, this.NewsList[i].image.length-1)
        this.NewsList[i].url = this.NewsList[i].url.substring(0, this.NewsList[i].url.length-1)
        this.NewsList[i].title = this.NewsList[i].title.substring(0, this.NewsList[i].title.length-1)
        this.NewsList[i].site = this.NewsList[i].site.substring(0, this.NewsList[i].site.length-1)
        this.NewsList[i].text = this.NewsList[i].text.substring(0, this.NewsList[i].text.length-1)
      }

      this.NewsList = [this.NewsList[0].title, this.NewsList[0].image, this.NewsList[0].site, this.NewsList[0].text, this.NewsList[0].url,
        this.NewsList[1].title, this.NewsList[1].image, this.NewsList[1].site, this.NewsList[1].text, this.NewsList[1].url,
        this.NewsList[2].title, this.NewsList[2].image, this.NewsList[2].site, this.NewsList[2].text, this.NewsList[2].url,
        this.NewsList[3].title, this.NewsList[3].image, this.NewsList[3].site, this.NewsList[3].text, this.NewsList[3].url,
        this.NewsList[4].title, this.NewsList[4].image, this.NewsList[4].site, this.NewsList[4].text, this.NewsList[4].url];

    },
    console.error
    );
  }

  amgnNewsMessage(){
    this.dataApi.picker = 'amgn-news'
    this.newsListSubs = this.dataApi
    .getNews()
    .subscribe((res: NewsData) => {
      this.NewsList = res;
      this.newsMessageEvent.emit(this.NewsList)
            for(let i=0; i<5; i++){
        this.NewsList[i].image = (this.NewsList[i].image).replace('\"', '')
        this.NewsList[i].url = (this.NewsList[i].url).replace('\"', '')
        this.NewsList[i].title = (this.NewsList[i].title).replace('\"', '')
        this.NewsList[i].site = (this.NewsList[i].site).replace('\"', '')
        this.NewsList[i].text = (this.NewsList[i].text).replace('\"', '')

        this.NewsList[i].image = this.NewsList[i].image.substring(0, this.NewsList[i].image.length-1)
        this.NewsList[i].url = this.NewsList[i].url.substring(0, this.NewsList[i].url.length-1)
        this.NewsList[i].title = this.NewsList[i].title.substring(0, this.NewsList[i].title.length-1)
        this.NewsList[i].site = this.NewsList[i].site.substring(0, this.NewsList[i].site.length-1)
        this.NewsList[i].text = this.NewsList[i].text.substring(0, this.NewsList[i].text.length-1)
      }

      this.NewsList = [this.NewsList[0].title, this.NewsList[0].image, this.NewsList[0].site, this.NewsList[0].text, this.NewsList[0].url,
        this.NewsList[1].title, this.NewsList[1].image, this.NewsList[1].site, this.NewsList[1].text, this.NewsList[1].url,
        this.NewsList[2].title, this.NewsList[2].image, this.NewsList[2].site, this.NewsList[2].text, this.NewsList[2].url,
        this.NewsList[3].title, this.NewsList[3].image, this.NewsList[3].site, this.NewsList[3].text, this.NewsList[3].url,
        this.NewsList[4].title, this.NewsList[4].image, this.NewsList[4].site, this.NewsList[4].text, this.NewsList[4].url];

    },
    console.error
    );
  }
  axpNewsMessage(){
    this.dataApi.picker = 'axp-news'
    this.newsListSubs = this.dataApi
    .getNews()
    .subscribe((res: NewsData) => {
      this.NewsList = res;
      this.newsMessageEvent.emit(this.NewsList)
      for(let i=0; i<5; i++){
        this.NewsList[i].image = (this.NewsList[i].image).replace('\"', '')
        this.NewsList[i].url = (this.NewsList[i].url).replace('\"', '')
        this.NewsList[i].title = (this.NewsList[i].title).replace('\"', '')
        this.NewsList[i].site = (this.NewsList[i].site).replace('\"', '')
        this.NewsList[i].text = (this.NewsList[i].text).replace('\"', '')

        this.NewsList[i].image = this.NewsList[i].image.substring(0, this.NewsList[i].image.length-1)
        this.NewsList[i].url = this.NewsList[i].url.substring(0, this.NewsList[i].url.length-1)
        this.NewsList[i].title = this.NewsList[i].title.substring(0, this.NewsList[i].title.length-1)
        this.NewsList[i].site = this.NewsList[i].site.substring(0, this.NewsList[i].site.length-1)
        this.NewsList[i].text = this.NewsList[i].text.substring(0, this.NewsList[i].text.length-1)
      }

      this.NewsList = [this.NewsList[0].title, this.NewsList[0].image, this.NewsList[0].site, this.NewsList[0].text, this.NewsList[0].url,
        this.NewsList[1].title, this.NewsList[1].image, this.NewsList[1].site, this.NewsList[1].text, this.NewsList[1].url,
        this.NewsList[2].title, this.NewsList[2].image, this.NewsList[2].site, this.NewsList[2].text, this.NewsList[2].url,
        this.NewsList[3].title, this.NewsList[3].image, this.NewsList[3].site, this.NewsList[3].text, this.NewsList[3].url,
        this.NewsList[4].title, this.NewsList[4].image, this.NewsList[4].site, this.NewsList[4].text, this.NewsList[4].url];

    },
    console.error
    );
  }
  baNewsMessage(){
    this.dataApi.picker = 'ba-news'
    this.newsListSubs = this.dataApi
    .getNews()
    .subscribe((res: NewsData) => {
      this.NewsList = res;
      this.newsMessageEvent.emit(this.NewsList)
            for(let i=0; i<5; i++){
        this.NewsList[i].image = (this.NewsList[i].image).replace('\"', '')
        this.NewsList[i].url = (this.NewsList[i].url).replace('\"', '')
        this.NewsList[i].title = (this.NewsList[i].title).replace('\"', '')
        this.NewsList[i].site = (this.NewsList[i].site).replace('\"', '')
        this.NewsList[i].text = (this.NewsList[i].text).replace('\"', '')

        this.NewsList[i].image = this.NewsList[i].image.substring(0, this.NewsList[i].image.length-1)
        this.NewsList[i].url = this.NewsList[i].url.substring(0, this.NewsList[i].url.length-1)
        this.NewsList[i].title = this.NewsList[i].title.substring(0, this.NewsList[i].title.length-1)
        this.NewsList[i].site = this.NewsList[i].site.substring(0, this.NewsList[i].site.length-1)
        this.NewsList[i].text = this.NewsList[i].text.substring(0, this.NewsList[i].text.length-1)
      }

      this.NewsList = [this.NewsList[0].title, this.NewsList[0].image, this.NewsList[0].site, this.NewsList[0].text, this.NewsList[0].url,
        this.NewsList[1].title, this.NewsList[1].image, this.NewsList[1].site, this.NewsList[1].text, this.NewsList[1].url,
        this.NewsList[2].title, this.NewsList[2].image, this.NewsList[2].site, this.NewsList[2].text, this.NewsList[2].url,
        this.NewsList[3].title, this.NewsList[3].image, this.NewsList[3].site, this.NewsList[3].text, this.NewsList[3].url,
        this.NewsList[4].title, this.NewsList[4].image, this.NewsList[4].site, this.NewsList[4].text, this.NewsList[4].url];

    },
    console.error
    );
  }
  catNewsMessage(){
    this.dataApi.picker = 'cat-news'
    this.newsListSubs = this.dataApi
    .getNews()
    .subscribe((res: NewsData) => {
      this.NewsList = res;
      this.newsMessageEvent.emit(this.NewsList)
            for(let i=0; i<5; i++){
        this.NewsList[i].image = (this.NewsList[i].image).replace('\"', '')
        this.NewsList[i].url = (this.NewsList[i].url).replace('\"', '')
        this.NewsList[i].title = (this.NewsList[i].title).replace('\"', '')
        this.NewsList[i].site = (this.NewsList[i].site).replace('\"', '')
        this.NewsList[i].text = (this.NewsList[i].text).replace('\"', '')

        this.NewsList[i].image = this.NewsList[i].image.substring(0, this.NewsList[i].image.length-1)
        this.NewsList[i].url = this.NewsList[i].url.substring(0, this.NewsList[i].url.length-1)
        this.NewsList[i].title = this.NewsList[i].title.substring(0, this.NewsList[i].title.length-1)
        this.NewsList[i].site = this.NewsList[i].site.substring(0, this.NewsList[i].site.length-1)
        this.NewsList[i].text = this.NewsList[i].text.substring(0, this.NewsList[i].text.length-1)
      }

      this.NewsList = [this.NewsList[0].title, this.NewsList[0].image, this.NewsList[0].site, this.NewsList[0].text, this.NewsList[0].url,
        this.NewsList[1].title, this.NewsList[1].image, this.NewsList[1].site, this.NewsList[1].text, this.NewsList[1].url,
        this.NewsList[2].title, this.NewsList[2].image, this.NewsList[2].site, this.NewsList[2].text, this.NewsList[2].url,
        this.NewsList[3].title, this.NewsList[3].image, this.NewsList[3].site, this.NewsList[3].text, this.NewsList[3].url,
        this.NewsList[4].title, this.NewsList[4].image, this.NewsList[4].site, this.NewsList[4].text, this.NewsList[4].url];

    },
    console.error
    );
  }
  crmNewsMessage(){
    this.dataApi.picker = 'crm-news'
    this.newsListSubs = this.dataApi
    .getNews()
    .subscribe((res: NewsData) => {
      this.NewsList = res;
      this.newsMessageEvent.emit(this.NewsList)
            for(let i=0; i<5; i++){
        this.NewsList[i].image = (this.NewsList[i].image).replace('\"', '')
        this.NewsList[i].url = (this.NewsList[i].url).replace('\"', '')
        this.NewsList[i].title = (this.NewsList[i].title).replace('\"', '')
        this.NewsList[i].site = (this.NewsList[i].site).replace('\"', '')
        this.NewsList[i].text = (this.NewsList[i].text).replace('\"', '')

        this.NewsList[i].image = this.NewsList[i].image.substring(0, this.NewsList[i].image.length-1)
        this.NewsList[i].url = this.NewsList[i].url.substring(0, this.NewsList[i].url.length-1)
        this.NewsList[i].title = this.NewsList[i].title.substring(0, this.NewsList[i].title.length-1)
        this.NewsList[i].site = this.NewsList[i].site.substring(0, this.NewsList[i].site.length-1)
        this.NewsList[i].text = this.NewsList[i].text.substring(0, this.NewsList[i].text.length-1)
      }

      this.NewsList = [this.NewsList[0].title, this.NewsList[0].image, this.NewsList[0].site, this.NewsList[0].text, this.NewsList[0].url,
        this.NewsList[1].title, this.NewsList[1].image, this.NewsList[1].site, this.NewsList[1].text, this.NewsList[1].url,
        this.NewsList[2].title, this.NewsList[2].image, this.NewsList[2].site, this.NewsList[2].text, this.NewsList[2].url,
        this.NewsList[3].title, this.NewsList[3].image, this.NewsList[3].site, this.NewsList[3].text, this.NewsList[3].url,
        this.NewsList[4].title, this.NewsList[4].image, this.NewsList[4].site, this.NewsList[4].text, this.NewsList[4].url];

    },
    console.error
    );
  }
  cscoNewsMessage(){
    this.dataApi.picker = 'csco-news'
    this.newsListSubs = this.dataApi
    .getNews()
    .subscribe((res: NewsData) => {
      this.NewsList = res;
      this.newsMessageEvent.emit(this.NewsList)
            for(let i=0; i<5; i++){
        this.NewsList[i].image = (this.NewsList[i].image).replace('\"', '')
        this.NewsList[i].url = (this.NewsList[i].url).replace('\"', '')
        this.NewsList[i].title = (this.NewsList[i].title).replace('\"', '')
        this.NewsList[i].site = (this.NewsList[i].site).replace('\"', '')
        this.NewsList[i].text = (this.NewsList[i].text).replace('\"', '')

        this.NewsList[i].image = this.NewsList[i].image.substring(0, this.NewsList[i].image.length-1)
        this.NewsList[i].url = this.NewsList[i].url.substring(0, this.NewsList[i].url.length-1)
        this.NewsList[i].title = this.NewsList[i].title.substring(0, this.NewsList[i].title.length-1)
        this.NewsList[i].site = this.NewsList[i].site.substring(0, this.NewsList[i].site.length-1)
        this.NewsList[i].text = this.NewsList[i].text.substring(0, this.NewsList[i].text.length-1)
      }

      this.NewsList = [this.NewsList[0].title, this.NewsList[0].image, this.NewsList[0].site, this.NewsList[0].text, this.NewsList[0].url,
        this.NewsList[1].title, this.NewsList[1].image, this.NewsList[1].site, this.NewsList[1].text, this.NewsList[1].url,
        this.NewsList[2].title, this.NewsList[2].image, this.NewsList[2].site, this.NewsList[2].text, this.NewsList[2].url,
        this.NewsList[3].title, this.NewsList[3].image, this.NewsList[3].site, this.NewsList[3].text, this.NewsList[3].url,
        this.NewsList[4].title, this.NewsList[4].image, this.NewsList[4].site, this.NewsList[4].text, this.NewsList[4].url];

    },
    console.error
    );
  }
  cvxNewsMessage(){
    this.dataApi.picker = 'cvx-news'
    this.newsListSubs = this.dataApi
    .getNews()
    .subscribe((res: NewsData) => {
      this.NewsList = res;
      this.newsMessageEvent.emit(this.NewsList)
            for(let i=0; i<5; i++){
        this.NewsList[i].image = (this.NewsList[i].image).replace('\"', '')
        this.NewsList[i].url = (this.NewsList[i].url).replace('\"', '')
        this.NewsList[i].title = (this.NewsList[i].title).replace('\"', '')
        this.NewsList[i].site = (this.NewsList[i].site).replace('\"', '')
        this.NewsList[i].text = (this.NewsList[i].text).replace('\"', '')

        this.NewsList[i].image = this.NewsList[i].image.substring(0, this.NewsList[i].image.length-1)
        this.NewsList[i].url = this.NewsList[i].url.substring(0, this.NewsList[i].url.length-1)
        this.NewsList[i].title = this.NewsList[i].title.substring(0, this.NewsList[i].title.length-1)
        this.NewsList[i].site = this.NewsList[i].site.substring(0, this.NewsList[i].site.length-1)
        this.NewsList[i].text = this.NewsList[i].text.substring(0, this.NewsList[i].text.length-1)
      }

      this.NewsList = [this.NewsList[0].title, this.NewsList[0].image, this.NewsList[0].site, this.NewsList[0].text, this.NewsList[0].url,
        this.NewsList[1].title, this.NewsList[1].image, this.NewsList[1].site, this.NewsList[1].text, this.NewsList[1].url,
        this.NewsList[2].title, this.NewsList[2].image, this.NewsList[2].site, this.NewsList[2].text, this.NewsList[2].url,
        this.NewsList[3].title, this.NewsList[3].image, this.NewsList[3].site, this.NewsList[3].text, this.NewsList[3].url,
        this.NewsList[4].title, this.NewsList[4].image, this.NewsList[4].site, this.NewsList[4].text, this.NewsList[4].url];

    },
    console.error
    );
  }
  disNewsMessage(){
    this.dataApi.picker = 'dis-news'
    this.newsListSubs = this.dataApi
    .getNews()
    .subscribe((res: NewsData) => {
      this.NewsList = res;
      this.newsMessageEvent.emit(this.NewsList)
            for(let i=0; i<5; i++){
        this.NewsList[i].image = (this.NewsList[i].image).replace('\"', '')
        this.NewsList[i].url = (this.NewsList[i].url).replace('\"', '')
        this.NewsList[i].title = (this.NewsList[i].title).replace('\"', '')
        this.NewsList[i].site = (this.NewsList[i].site).replace('\"', '')
        this.NewsList[i].text = (this.NewsList[i].text).replace('\"', '')

        this.NewsList[i].image = this.NewsList[i].image.substring(0, this.NewsList[i].image.length-1)
        this.NewsList[i].url = this.NewsList[i].url.substring(0, this.NewsList[i].url.length-1)
        this.NewsList[i].title = this.NewsList[i].title.substring(0, this.NewsList[i].title.length-1)
        this.NewsList[i].site = this.NewsList[i].site.substring(0, this.NewsList[i].site.length-1)
        this.NewsList[i].text = this.NewsList[i].text.substring(0, this.NewsList[i].text.length-1)
      }

      this.NewsList = [this.NewsList[0].title, this.NewsList[0].image, this.NewsList[0].site, this.NewsList[0].text, this.NewsList[0].url,
        this.NewsList[1].title, this.NewsList[1].image, this.NewsList[1].site, this.NewsList[1].text, this.NewsList[1].url,
        this.NewsList[2].title, this.NewsList[2].image, this.NewsList[2].site, this.NewsList[2].text, this.NewsList[2].url,
        this.NewsList[3].title, this.NewsList[3].image, this.NewsList[3].site, this.NewsList[3].text, this.NewsList[3].url,
        this.NewsList[4].title, this.NewsList[4].image, this.NewsList[4].site, this.NewsList[4].text, this.NewsList[4].url];

    },
    console.error
    );
  }
  dowNewsMessage(){
    this.dataApi.picker = 'dow-news'
    this.newsListSubs = this.dataApi
    .getNews()
    .subscribe((res: NewsData) => {
      this.NewsList = res;
      this.newsMessageEvent.emit(this.NewsList)
            for(let i=0; i<5; i++){
        this.NewsList[i].image = (this.NewsList[i].image).replace('\"', '')
        this.NewsList[i].url = (this.NewsList[i].url).replace('\"', '')
        this.NewsList[i].title = (this.NewsList[i].title).replace('\"', '')
        this.NewsList[i].site = (this.NewsList[i].site).replace('\"', '')
        this.NewsList[i].text = (this.NewsList[i].text).replace('\"', '')

        this.NewsList[i].image = this.NewsList[i].image.substring(0, this.NewsList[i].image.length-1)
        this.NewsList[i].url = this.NewsList[i].url.substring(0, this.NewsList[i].url.length-1)
        this.NewsList[i].title = this.NewsList[i].title.substring(0, this.NewsList[i].title.length-1)
        this.NewsList[i].site = this.NewsList[i].site.substring(0, this.NewsList[i].site.length-1)
        this.NewsList[i].text = this.NewsList[i].text.substring(0, this.NewsList[i].text.length-1)
      }

      this.NewsList = [this.NewsList[0].title, this.NewsList[0].image, this.NewsList[0].site, this.NewsList[0].text, this.NewsList[0].url,
        this.NewsList[1].title, this.NewsList[1].image, this.NewsList[1].site, this.NewsList[1].text, this.NewsList[1].url,
        this.NewsList[2].title, this.NewsList[2].image, this.NewsList[2].site, this.NewsList[2].text, this.NewsList[2].url,
        this.NewsList[3].title, this.NewsList[3].image, this.NewsList[3].site, this.NewsList[3].text, this.NewsList[3].url,
        this.NewsList[4].title, this.NewsList[4].image, this.NewsList[4].site, this.NewsList[4].text, this.NewsList[4].url];

    },
    console.error
    );
  }
  gsNewsMessage(){
    this.dataApi.picker = 'gs-news'
    this.newsListSubs = this.dataApi
    .getNews()
    .subscribe((res: NewsData) => {
      this.NewsList = res;
      this.newsMessageEvent.emit(this.NewsList)
            for(let i=0; i<5; i++){
        this.NewsList[i].image = (this.NewsList[i].image).replace('\"', '')
        this.NewsList[i].url = (this.NewsList[i].url).replace('\"', '')
        this.NewsList[i].title = (this.NewsList[i].title).replace('\"', '')
        this.NewsList[i].site = (this.NewsList[i].site).replace('\"', '')
        this.NewsList[i].text = (this.NewsList[i].text).replace('\"', '')

        this.NewsList[i].image = this.NewsList[i].image.substring(0, this.NewsList[i].image.length-1)
        this.NewsList[i].url = this.NewsList[i].url.substring(0, this.NewsList[i].url.length-1)
        this.NewsList[i].title = this.NewsList[i].title.substring(0, this.NewsList[i].title.length-1)
        this.NewsList[i].site = this.NewsList[i].site.substring(0, this.NewsList[i].site.length-1)
        this.NewsList[i].text = this.NewsList[i].text.substring(0, this.NewsList[i].text.length-1)
      }

      this.NewsList = [this.NewsList[0].title, this.NewsList[0].image, this.NewsList[0].site, this.NewsList[0].text, this.NewsList[0].url,
        this.NewsList[1].title, this.NewsList[1].image, this.NewsList[1].site, this.NewsList[1].text, this.NewsList[1].url,
        this.NewsList[2].title, this.NewsList[2].image, this.NewsList[2].site, this.NewsList[2].text, this.NewsList[2].url,
        this.NewsList[3].title, this.NewsList[3].image, this.NewsList[3].site, this.NewsList[3].text, this.NewsList[3].url,
        this.NewsList[4].title, this.NewsList[4].image, this.NewsList[4].site, this.NewsList[4].text, this.NewsList[4].url];

    },
    console.error
    );
  }
  hdNewsMessage(){
    this.dataApi.picker = 'hd-news'
    this.newsListSubs = this.dataApi
    .getNews()
    .subscribe((res: NewsData) => {
      this.NewsList = res;
      this.newsMessageEvent.emit(this.NewsList)
            for(let i=0; i<5; i++){
        this.NewsList[i].image = (this.NewsList[i].image).replace('\"', '')
        this.NewsList[i].url = (this.NewsList[i].url).replace('\"', '')
        this.NewsList[i].title = (this.NewsList[i].title).replace('\"', '')
        this.NewsList[i].site = (this.NewsList[i].site).replace('\"', '')
        this.NewsList[i].text = (this.NewsList[i].text).replace('\"', '')

        this.NewsList[i].image = this.NewsList[i].image.substring(0, this.NewsList[i].image.length-1)
        this.NewsList[i].url = this.NewsList[i].url.substring(0, this.NewsList[i].url.length-1)
        this.NewsList[i].title = this.NewsList[i].title.substring(0, this.NewsList[i].title.length-1)
        this.NewsList[i].site = this.NewsList[i].site.substring(0, this.NewsList[i].site.length-1)
        this.NewsList[i].text = this.NewsList[i].text.substring(0, this.NewsList[i].text.length-1)
      }

      this.NewsList = [this.NewsList[0].title, this.NewsList[0].image, this.NewsList[0].site, this.NewsList[0].text, this.NewsList[0].url,
        this.NewsList[1].title, this.NewsList[1].image, this.NewsList[1].site, this.NewsList[1].text, this.NewsList[1].url,
        this.NewsList[2].title, this.NewsList[2].image, this.NewsList[2].site, this.NewsList[2].text, this.NewsList[2].url,
        this.NewsList[3].title, this.NewsList[3].image, this.NewsList[3].site, this.NewsList[3].text, this.NewsList[3].url,
        this.NewsList[4].title, this.NewsList[4].image, this.NewsList[4].site, this.NewsList[4].text, this.NewsList[4].url];

    },
    console.error
    );
  }
  honNewsMessage(){
    this.dataApi.picker = 'hon-news'
    this.newsListSubs = this.dataApi
    .getNews()
    .subscribe((res: NewsData) => {
      this.NewsList = res;
      this.newsMessageEvent.emit(this.NewsList)
            for(let i=0; i<5; i++){
        this.NewsList[i].image = (this.NewsList[i].image).replace('\"', '')
        this.NewsList[i].url = (this.NewsList[i].url).replace('\"', '')
        this.NewsList[i].title = (this.NewsList[i].title).replace('\"', '')
        this.NewsList[i].site = (this.NewsList[i].site).replace('\"', '')
        this.NewsList[i].text = (this.NewsList[i].text).replace('\"', '')

        this.NewsList[i].image = this.NewsList[i].image.substring(0, this.NewsList[i].image.length-1)
        this.NewsList[i].url = this.NewsList[i].url.substring(0, this.NewsList[i].url.length-1)
        this.NewsList[i].title = this.NewsList[i].title.substring(0, this.NewsList[i].title.length-1)
        this.NewsList[i].site = this.NewsList[i].site.substring(0, this.NewsList[i].site.length-1)
        this.NewsList[i].text = this.NewsList[i].text.substring(0, this.NewsList[i].text.length-1)
      }

      this.NewsList = [this.NewsList[0].title, this.NewsList[0].image, this.NewsList[0].site, this.NewsList[0].text, this.NewsList[0].url,
        this.NewsList[1].title, this.NewsList[1].image, this.NewsList[1].site, this.NewsList[1].text, this.NewsList[1].url,
        this.NewsList[2].title, this.NewsList[2].image, this.NewsList[2].site, this.NewsList[2].text, this.NewsList[2].url,
        this.NewsList[3].title, this.NewsList[3].image, this.NewsList[3].site, this.NewsList[3].text, this.NewsList[3].url,
        this.NewsList[4].title, this.NewsList[4].image, this.NewsList[4].site, this.NewsList[4].text, this.NewsList[4].url];

    },
    console.error
    );
  }
  ibmNewsMessage(){
    this.dataApi.picker = 'ibm-news'
    this.newsListSubs = this.dataApi
    .getNews()
    .subscribe((res: NewsData) => {
      this.NewsList = res;
      this.newsMessageEvent.emit(this.NewsList)
            for(let i=0; i<5; i++){
        this.NewsList[i].image = (this.NewsList[i].image).replace('\"', '')
        this.NewsList[i].url = (this.NewsList[i].url).replace('\"', '')
        this.NewsList[i].title = (this.NewsList[i].title).replace('\"', '')
        this.NewsList[i].site = (this.NewsList[i].site).replace('\"', '')
        this.NewsList[i].text = (this.NewsList[i].text).replace('\"', '')

        this.NewsList[i].image = this.NewsList[i].image.substring(0, this.NewsList[i].image.length-1)
        this.NewsList[i].url = this.NewsList[i].url.substring(0, this.NewsList[i].url.length-1)
        this.NewsList[i].title = this.NewsList[i].title.substring(0, this.NewsList[i].title.length-1)
        this.NewsList[i].site = this.NewsList[i].site.substring(0, this.NewsList[i].site.length-1)
        this.NewsList[i].text = this.NewsList[i].text.substring(0, this.NewsList[i].text.length-1)
      }

      this.NewsList = [this.NewsList[0].title, this.NewsList[0].image, this.NewsList[0].site, this.NewsList[0].text, this.NewsList[0].url,
        this.NewsList[1].title, this.NewsList[1].image, this.NewsList[1].site, this.NewsList[1].text, this.NewsList[1].url,
        this.NewsList[2].title, this.NewsList[2].image, this.NewsList[2].site, this.NewsList[2].text, this.NewsList[2].url,
        this.NewsList[3].title, this.NewsList[3].image, this.NewsList[3].site, this.NewsList[3].text, this.NewsList[3].url,
        this.NewsList[4].title, this.NewsList[4].image, this.NewsList[4].site, this.NewsList[4].text, this.NewsList[4].url];

    },
    console.error
    );
  }
  intcNewsMessage(){
    this.dataApi.picker = 'intc-news'
    this.newsListSubs = this.dataApi
    .getNews()
    .subscribe((res: NewsData) => {
      this.NewsList = res;
      this.newsMessageEvent.emit(this.NewsList)
            for(let i=0; i<5; i++){
        this.NewsList[i].image = (this.NewsList[i].image).replace('\"', '')
        this.NewsList[i].url = (this.NewsList[i].url).replace('\"', '')
        this.NewsList[i].title = (this.NewsList[i].title).replace('\"', '')
        this.NewsList[i].site = (this.NewsList[i].site).replace('\"', '')
        this.NewsList[i].text = (this.NewsList[i].text).replace('\"', '')

        this.NewsList[i].image = this.NewsList[i].image.substring(0, this.NewsList[i].image.length-1)
        this.NewsList[i].url = this.NewsList[i].url.substring(0, this.NewsList[i].url.length-1)
        this.NewsList[i].title = this.NewsList[i].title.substring(0, this.NewsList[i].title.length-1)
        this.NewsList[i].site = this.NewsList[i].site.substring(0, this.NewsList[i].site.length-1)
        this.NewsList[i].text = this.NewsList[i].text.substring(0, this.NewsList[i].text.length-1)
      }

      this.NewsList = [this.NewsList[0].title, this.NewsList[0].image, this.NewsList[0].site, this.NewsList[0].text, this.NewsList[0].url,
        this.NewsList[1].title, this.NewsList[1].image, this.NewsList[1].site, this.NewsList[1].text, this.NewsList[1].url,
        this.NewsList[2].title, this.NewsList[2].image, this.NewsList[2].site, this.NewsList[2].text, this.NewsList[2].url,
        this.NewsList[3].title, this.NewsList[3].image, this.NewsList[3].site, this.NewsList[3].text, this.NewsList[3].url,
        this.NewsList[4].title, this.NewsList[4].image, this.NewsList[4].site, this.NewsList[4].text, this.NewsList[4].url];

    },
    console.error
    );
  }
  jnjNewsMessage(){
    this.dataApi.picker = 'jnj-news'
    this.newsListSubs = this.dataApi
    .getNews()
    .subscribe((res: NewsData) => {
      this.NewsList = res;
      this.newsMessageEvent.emit(this.NewsList)
            for(let i=0; i<5; i++){
        this.NewsList[i].image = (this.NewsList[i].image).replace('\"', '')
        this.NewsList[i].url = (this.NewsList[i].url).replace('\"', '')
        this.NewsList[i].title = (this.NewsList[i].title).replace('\"', '')
        this.NewsList[i].site = (this.NewsList[i].site).replace('\"', '')
        this.NewsList[i].text = (this.NewsList[i].text).replace('\"', '')

        this.NewsList[i].image = this.NewsList[i].image.substring(0, this.NewsList[i].image.length-1)
        this.NewsList[i].url = this.NewsList[i].url.substring(0, this.NewsList[i].url.length-1)
        this.NewsList[i].title = this.NewsList[i].title.substring(0, this.NewsList[i].title.length-1)
        this.NewsList[i].site = this.NewsList[i].site.substring(0, this.NewsList[i].site.length-1)
        this.NewsList[i].text = this.NewsList[i].text.substring(0, this.NewsList[i].text.length-1)
      }

      this.NewsList = [this.NewsList[0].title, this.NewsList[0].image, this.NewsList[0].site, this.NewsList[0].text, this.NewsList[0].url,
        this.NewsList[1].title, this.NewsList[1].image, this.NewsList[1].site, this.NewsList[1].text, this.NewsList[1].url,
        this.NewsList[2].title, this.NewsList[2].image, this.NewsList[2].site, this.NewsList[2].text, this.NewsList[2].url,
        this.NewsList[3].title, this.NewsList[3].image, this.NewsList[3].site, this.NewsList[3].text, this.NewsList[3].url,
        this.NewsList[4].title, this.NewsList[4].image, this.NewsList[4].site, this.NewsList[4].text, this.NewsList[4].url];

    },
    console.error
    );
  }
  jpmNewsMessage(){
    this.dataApi.picker = 'jpm-news'
    this.newsListSubs = this.dataApi
    .getNews()
    .subscribe((res: NewsData) => {
      this.NewsList = res;
      this.newsMessageEvent.emit(this.NewsList)
            for(let i=0; i<5; i++){
        this.NewsList[i].image = (this.NewsList[i].image).replace('\"', '')
        this.NewsList[i].url = (this.NewsList[i].url).replace('\"', '')
        this.NewsList[i].title = (this.NewsList[i].title).replace('\"', '')
        this.NewsList[i].site = (this.NewsList[i].site).replace('\"', '')
        this.NewsList[i].text = (this.NewsList[i].text).replace('\"', '')

        this.NewsList[i].image = this.NewsList[i].image.substring(0, this.NewsList[i].image.length-1)
        this.NewsList[i].url = this.NewsList[i].url.substring(0, this.NewsList[i].url.length-1)
        this.NewsList[i].title = this.NewsList[i].title.substring(0, this.NewsList[i].title.length-1)
        this.NewsList[i].site = this.NewsList[i].site.substring(0, this.NewsList[i].site.length-1)
        this.NewsList[i].text = this.NewsList[i].text.substring(0, this.NewsList[i].text.length-1)
      }

      this.NewsList = [this.NewsList[0].title, this.NewsList[0].image, this.NewsList[0].site, this.NewsList[0].text, this.NewsList[0].url,
        this.NewsList[1].title, this.NewsList[1].image, this.NewsList[1].site, this.NewsList[1].text, this.NewsList[1].url,
        this.NewsList[2].title, this.NewsList[2].image, this.NewsList[2].site, this.NewsList[2].text, this.NewsList[2].url,
        this.NewsList[3].title, this.NewsList[3].image, this.NewsList[3].site, this.NewsList[3].text, this.NewsList[3].url,
        this.NewsList[4].title, this.NewsList[4].image, this.NewsList[4].site, this.NewsList[4].text, this.NewsList[4].url];

    },
    console.error
    );
  }
  koNewsMessage(){
    this.dataApi.picker = 'ko-news'
    this.newsListSubs = this.dataApi
    .getNews()
    .subscribe((res: NewsData) => {
      this.NewsList = res;
      this.newsMessageEvent.emit(this.NewsList)
            for(let i=0; i<5; i++){
        this.NewsList[i].image = (this.NewsList[i].image).replace('\"', '')
        this.NewsList[i].url = (this.NewsList[i].url).replace('\"', '')
        this.NewsList[i].title = (this.NewsList[i].title).replace('\"', '')
        this.NewsList[i].site = (this.NewsList[i].site).replace('\"', '')
        this.NewsList[i].text = (this.NewsList[i].text).replace('\"', '')

        this.NewsList[i].image = this.NewsList[i].image.substring(0, this.NewsList[i].image.length-1)
        this.NewsList[i].url = this.NewsList[i].url.substring(0, this.NewsList[i].url.length-1)
        this.NewsList[i].title = this.NewsList[i].title.substring(0, this.NewsList[i].title.length-1)
        this.NewsList[i].site = this.NewsList[i].site.substring(0, this.NewsList[i].site.length-1)
        this.NewsList[i].text = this.NewsList[i].text.substring(0, this.NewsList[i].text.length-1)
      }

      this.NewsList = [this.NewsList[0].title, this.NewsList[0].image, this.NewsList[0].site, this.NewsList[0].text, this.NewsList[0].url,
        this.NewsList[1].title, this.NewsList[1].image, this.NewsList[1].site, this.NewsList[1].text, this.NewsList[1].url,
        this.NewsList[2].title, this.NewsList[2].image, this.NewsList[2].site, this.NewsList[2].text, this.NewsList[2].url,
        this.NewsList[3].title, this.NewsList[3].image, this.NewsList[3].site, this.NewsList[3].text, this.NewsList[3].url,
        this.NewsList[4].title, this.NewsList[4].image, this.NewsList[4].site, this.NewsList[4].text, this.NewsList[4].url];

    },
    console.error
    );
  }
  mcdNewsMessage(){
    this.dataApi.picker = 'mcd-news'
    this.newsListSubs = this.dataApi
    .getNews()
    .subscribe((res: NewsData) => {
      this.NewsList = res;
      this.newsMessageEvent.emit(this.NewsList)
            for(let i=0; i<5; i++){
        this.NewsList[i].image = (this.NewsList[i].image).replace('\"', '')
        this.NewsList[i].url = (this.NewsList[i].url).replace('\"', '')
        this.NewsList[i].title = (this.NewsList[i].title).replace('\"', '')
        this.NewsList[i].site = (this.NewsList[i].site).replace('\"', '')
        this.NewsList[i].text = (this.NewsList[i].text).replace('\"', '')

        this.NewsList[i].image = this.NewsList[i].image.substring(0, this.NewsList[i].image.length-1)
        this.NewsList[i].url = this.NewsList[i].url.substring(0, this.NewsList[i].url.length-1)
        this.NewsList[i].title = this.NewsList[i].title.substring(0, this.NewsList[i].title.length-1)
        this.NewsList[i].site = this.NewsList[i].site.substring(0, this.NewsList[i].site.length-1)
        this.NewsList[i].text = this.NewsList[i].text.substring(0, this.NewsList[i].text.length-1)
      }

      this.NewsList = [this.NewsList[0].title, this.NewsList[0].image, this.NewsList[0].site, this.NewsList[0].text, this.NewsList[0].url,
        this.NewsList[1].title, this.NewsList[1].image, this.NewsList[1].site, this.NewsList[1].text, this.NewsList[1].url,
        this.NewsList[2].title, this.NewsList[2].image, this.NewsList[2].site, this.NewsList[2].text, this.NewsList[2].url,
        this.NewsList[3].title, this.NewsList[3].image, this.NewsList[3].site, this.NewsList[3].text, this.NewsList[3].url,
        this.NewsList[4].title, this.NewsList[4].image, this.NewsList[4].site, this.NewsList[4].text, this.NewsList[4].url];

    },
    console.error
    );
  }
  mmmNewsMessage(){
    this.dataApi.picker = 'mmm-news'
    this.newsListSubs = this.dataApi
    .getNews()
    .subscribe((res: NewsData) => {
      this.NewsList = res;
      this.newsMessageEvent.emit(this.NewsList)
            for(let i=0; i<5; i++){
        this.NewsList[i].image = (this.NewsList[i].image).replace('\"', '')
        this.NewsList[i].url = (this.NewsList[i].url).replace('\"', '')
        this.NewsList[i].title = (this.NewsList[i].title).replace('\"', '')
        this.NewsList[i].site = (this.NewsList[i].site).replace('\"', '')
        this.NewsList[i].text = (this.NewsList[i].text).replace('\"', '')

        this.NewsList[i].image = this.NewsList[i].image.substring(0, this.NewsList[i].image.length-1)
        this.NewsList[i].url = this.NewsList[i].url.substring(0, this.NewsList[i].url.length-1)
        this.NewsList[i].title = this.NewsList[i].title.substring(0, this.NewsList[i].title.length-1)
        this.NewsList[i].site = this.NewsList[i].site.substring(0, this.NewsList[i].site.length-1)
        this.NewsList[i].text = this.NewsList[i].text.substring(0, this.NewsList[i].text.length-1)
      }

      this.NewsList = [this.NewsList[0].title, this.NewsList[0].image, this.NewsList[0].site, this.NewsList[0].text, this.NewsList[0].url,
        this.NewsList[1].title, this.NewsList[1].image, this.NewsList[1].site, this.NewsList[1].text, this.NewsList[1].url,
        this.NewsList[2].title, this.NewsList[2].image, this.NewsList[2].site, this.NewsList[2].text, this.NewsList[2].url,
        this.NewsList[3].title, this.NewsList[3].image, this.NewsList[3].site, this.NewsList[3].text, this.NewsList[3].url,
        this.NewsList[4].title, this.NewsList[4].image, this.NewsList[4].site, this.NewsList[4].text, this.NewsList[4].url];

    },
    console.error
    );
  }
  mrkNewsMessage(){
    this.dataApi.picker = 'mrk-news'
    this.newsListSubs = this.dataApi
    .getNews()
    .subscribe((res: NewsData) => {
      this.NewsList = res;
      this.newsMessageEvent.emit(this.NewsList)
            for(let i=0; i<5; i++){
        this.NewsList[i].image = (this.NewsList[i].image).replace('\"', '')
        this.NewsList[i].url = (this.NewsList[i].url).replace('\"', '')
        this.NewsList[i].title = (this.NewsList[i].title).replace('\"', '')
        this.NewsList[i].site = (this.NewsList[i].site).replace('\"', '')
        this.NewsList[i].text = (this.NewsList[i].text).replace('\"', '')

        this.NewsList[i].image = this.NewsList[i].image.substring(0, this.NewsList[i].image.length-1)
        this.NewsList[i].url = this.NewsList[i].url.substring(0, this.NewsList[i].url.length-1)
        this.NewsList[i].title = this.NewsList[i].title.substring(0, this.NewsList[i].title.length-1)
        this.NewsList[i].site = this.NewsList[i].site.substring(0, this.NewsList[i].site.length-1)
        this.NewsList[i].text = this.NewsList[i].text.substring(0, this.NewsList[i].text.length-1)
      }

      this.NewsList = [this.NewsList[0].title, this.NewsList[0].image, this.NewsList[0].site, this.NewsList[0].text, this.NewsList[0].url,
        this.NewsList[1].title, this.NewsList[1].image, this.NewsList[1].site, this.NewsList[1].text, this.NewsList[1].url,
        this.NewsList[2].title, this.NewsList[2].image, this.NewsList[2].site, this.NewsList[2].text, this.NewsList[2].url,
        this.NewsList[3].title, this.NewsList[3].image, this.NewsList[3].site, this.NewsList[3].text, this.NewsList[3].url,
        this.NewsList[4].title, this.NewsList[4].image, this.NewsList[4].site, this.NewsList[4].text, this.NewsList[4].url];

    },
    console.error
    );
  }
  msftNewsMessage(){
    this.dataApi.picker = 'msft-news'
    this.newsListSubs = this.dataApi
    .getNews()
    .subscribe((res: NewsData) => {
      this.NewsList = res;
      this.newsMessageEvent.emit(this.NewsList)
            for(let i=0; i<5; i++){
        this.NewsList[i].image = (this.NewsList[i].image).replace('\"', '')
        this.NewsList[i].url = (this.NewsList[i].url).replace('\"', '')
        this.NewsList[i].title = (this.NewsList[i].title).replace('\"', '')
        this.NewsList[i].site = (this.NewsList[i].site).replace('\"', '')
        this.NewsList[i].text = (this.NewsList[i].text).replace('\"', '')

        this.NewsList[i].image = this.NewsList[i].image.substring(0, this.NewsList[i].image.length-1)
        this.NewsList[i].url = this.NewsList[i].url.substring(0, this.NewsList[i].url.length-1)
        this.NewsList[i].title = this.NewsList[i].title.substring(0, this.NewsList[i].title.length-1)
        this.NewsList[i].site = this.NewsList[i].site.substring(0, this.NewsList[i].site.length-1)
        this.NewsList[i].text = this.NewsList[i].text.substring(0, this.NewsList[i].text.length-1)
      }

      this.NewsList = [this.NewsList[0].title, this.NewsList[0].image, this.NewsList[0].site, this.NewsList[0].text, this.NewsList[0].url,
        this.NewsList[1].title, this.NewsList[1].image, this.NewsList[1].site, this.NewsList[1].text, this.NewsList[1].url,
        this.NewsList[2].title, this.NewsList[2].image, this.NewsList[2].site, this.NewsList[2].text, this.NewsList[2].url,
        this.NewsList[3].title, this.NewsList[3].image, this.NewsList[3].site, this.NewsList[3].text, this.NewsList[3].url,
        this.NewsList[4].title, this.NewsList[4].image, this.NewsList[4].site, this.NewsList[4].text, this.NewsList[4].url];

    },
    console.error
    );
  }
  nkeNewsMessage(){
    this.dataApi.picker = 'nke-news'
    this.newsListSubs = this.dataApi
    .getNews()
    .subscribe((res: NewsData) => {
      this.NewsList = res;
      this.newsMessageEvent.emit(this.NewsList)
            for(let i=0; i<5; i++){
        this.NewsList[i].image = (this.NewsList[i].image).replace('\"', '')
        this.NewsList[i].url = (this.NewsList[i].url).replace('\"', '')
        this.NewsList[i].title = (this.NewsList[i].title).replace('\"', '')
        this.NewsList[i].site = (this.NewsList[i].site).replace('\"', '')
        this.NewsList[i].text = (this.NewsList[i].text).replace('\"', '')

        this.NewsList[i].image = this.NewsList[i].image.substring(0, this.NewsList[i].image.length-1)
        this.NewsList[i].url = this.NewsList[i].url.substring(0, this.NewsList[i].url.length-1)
        this.NewsList[i].title = this.NewsList[i].title.substring(0, this.NewsList[i].title.length-1)
        this.NewsList[i].site = this.NewsList[i].site.substring(0, this.NewsList[i].site.length-1)
        this.NewsList[i].text = this.NewsList[i].text.substring(0, this.NewsList[i].text.length-1)
      }

      this.NewsList = [this.NewsList[0].title, this.NewsList[0].image, this.NewsList[0].site, this.NewsList[0].text, this.NewsList[0].url,
        this.NewsList[1].title, this.NewsList[1].image, this.NewsList[1].site, this.NewsList[1].text, this.NewsList[1].url,
        this.NewsList[2].title, this.NewsList[2].image, this.NewsList[2].site, this.NewsList[2].text, this.NewsList[2].url,
        this.NewsList[3].title, this.NewsList[3].image, this.NewsList[3].site, this.NewsList[3].text, this.NewsList[3].url,
        this.NewsList[4].title, this.NewsList[4].image, this.NewsList[4].site, this.NewsList[4].text, this.NewsList[4].url];

    },
    console.error
    );
  }
  pgNewsMessage(){
    this.dataApi.picker = 'pg-news'
    this.newsListSubs = this.dataApi
    .getNews()
    .subscribe((res: NewsData) => {
      this.NewsList = res;
      this.newsMessageEvent.emit(this.NewsList)
            for(let i=0; i<5; i++){
        this.NewsList[i].image = (this.NewsList[i].image).replace('\"', '')
        this.NewsList[i].url = (this.NewsList[i].url).replace('\"', '')
        this.NewsList[i].title = (this.NewsList[i].title).replace('\"', '')
        this.NewsList[i].site = (this.NewsList[i].site).replace('\"', '')
        this.NewsList[i].text = (this.NewsList[i].text).replace('\"', '')

        this.NewsList[i].image = this.NewsList[i].image.substring(0, this.NewsList[i].image.length-1)
        this.NewsList[i].url = this.NewsList[i].url.substring(0, this.NewsList[i].url.length-1)
        this.NewsList[i].title = this.NewsList[i].title.substring(0, this.NewsList[i].title.length-1)
        this.NewsList[i].site = this.NewsList[i].site.substring(0, this.NewsList[i].site.length-1)
        this.NewsList[i].text = this.NewsList[i].text.substring(0, this.NewsList[i].text.length-1)
      }

      this.NewsList = [this.NewsList[0].title, this.NewsList[0].image, this.NewsList[0].site, this.NewsList[0].text, this.NewsList[0].url,
        this.NewsList[1].title, this.NewsList[1].image, this.NewsList[1].site, this.NewsList[1].text, this.NewsList[1].url,
        this.NewsList[2].title, this.NewsList[2].image, this.NewsList[2].site, this.NewsList[2].text, this.NewsList[2].url,
        this.NewsList[3].title, this.NewsList[3].image, this.NewsList[3].site, this.NewsList[3].text, this.NewsList[3].url,
        this.NewsList[4].title, this.NewsList[4].image, this.NewsList[4].site, this.NewsList[4].text, this.NewsList[4].url];

    },
    console.error
    );
  }
  trvNewsMessage(){
    this.dataApi.picker = 'trv-news'
    this.newsListSubs = this.dataApi
    .getNews()
    .subscribe((res: NewsData) => {
      this.NewsList = res;
      this.newsMessageEvent.emit(this.NewsList)
            for(let i=0; i<5; i++){
        this.NewsList[i].image = (this.NewsList[i].image).replace('\"', '')
        this.NewsList[i].url = (this.NewsList[i].url).replace('\"', '')
        this.NewsList[i].title = (this.NewsList[i].title).replace('\"', '')
        this.NewsList[i].site = (this.NewsList[i].site).replace('\"', '')
        this.NewsList[i].text = (this.NewsList[i].text).replace('\"', '')

        this.NewsList[i].image = this.NewsList[i].image.substring(0, this.NewsList[i].image.length-1)
        this.NewsList[i].url = this.NewsList[i].url.substring(0, this.NewsList[i].url.length-1)
        this.NewsList[i].title = this.NewsList[i].title.substring(0, this.NewsList[i].title.length-1)
        this.NewsList[i].site = this.NewsList[i].site.substring(0, this.NewsList[i].site.length-1)
        this.NewsList[i].text = this.NewsList[i].text.substring(0, this.NewsList[i].text.length-1)
      }

      this.NewsList = [this.NewsList[0].title, this.NewsList[0].image, this.NewsList[0].site, this.NewsList[0].text, this.NewsList[0].url,
        this.NewsList[1].title, this.NewsList[1].image, this.NewsList[1].site, this.NewsList[1].text, this.NewsList[1].url,
        this.NewsList[2].title, this.NewsList[2].image, this.NewsList[2].site, this.NewsList[2].text, this.NewsList[2].url,
        this.NewsList[3].title, this.NewsList[3].image, this.NewsList[3].site, this.NewsList[3].text, this.NewsList[3].url,
        this.NewsList[4].title, this.NewsList[4].image, this.NewsList[4].site, this.NewsList[4].text, this.NewsList[4].url];

    },
    console.error
    );
  }
  unhNewsMessage(){
    this.dataApi.picker = 'unh-news'
    this.newsListSubs = this.dataApi
    .getNews()
    .subscribe((res: NewsData) => {
      this.NewsList = res;
      this.newsMessageEvent.emit(this.NewsList)
            for(let i=0; i<5; i++){
        this.NewsList[i].image = (this.NewsList[i].image).replace('\"', '')
        this.NewsList[i].url = (this.NewsList[i].url).replace('\"', '')
        this.NewsList[i].title = (this.NewsList[i].title).replace('\"', '')
        this.NewsList[i].site = (this.NewsList[i].site).replace('\"', '')
        this.NewsList[i].text = (this.NewsList[i].text).replace('\"', '')

        this.NewsList[i].image = this.NewsList[i].image.substring(0, this.NewsList[i].image.length-1)
        this.NewsList[i].url = this.NewsList[i].url.substring(0, this.NewsList[i].url.length-1)
        this.NewsList[i].title = this.NewsList[i].title.substring(0, this.NewsList[i].title.length-1)
        this.NewsList[i].site = this.NewsList[i].site.substring(0, this.NewsList[i].site.length-1)
        this.NewsList[i].text = this.NewsList[i].text.substring(0, this.NewsList[i].text.length-1)
      }

      this.NewsList = [this.NewsList[0].title, this.NewsList[0].image, this.NewsList[0].site, this.NewsList[0].text, this.NewsList[0].url,
        this.NewsList[1].title, this.NewsList[1].image, this.NewsList[1].site, this.NewsList[1].text, this.NewsList[1].url,
        this.NewsList[2].title, this.NewsList[2].image, this.NewsList[2].site, this.NewsList[2].text, this.NewsList[2].url,
        this.NewsList[3].title, this.NewsList[3].image, this.NewsList[3].site, this.NewsList[3].text, this.NewsList[3].url,
        this.NewsList[4].title, this.NewsList[4].image, this.NewsList[4].site, this.NewsList[4].text, this.NewsList[4].url];

    },
    console.error
    );
  }
  vNewsMessage(){
    this.dataApi.picker = 'v-news'
    this.newsListSubs = this.dataApi
    .getNews()
    .subscribe((res: NewsData) => {
      this.NewsList = res;
      this.newsMessageEvent.emit(this.NewsList)
            for(let i=0; i<5; i++){
        this.NewsList[i].image = (this.NewsList[i].image).replace('\"', '')
        this.NewsList[i].url = (this.NewsList[i].url).replace('\"', '')
        this.NewsList[i].title = (this.NewsList[i].title).replace('\"', '')
        this.NewsList[i].site = (this.NewsList[i].site).replace('\"', '')
        this.NewsList[i].text = (this.NewsList[i].text).replace('\"', '')

        this.NewsList[i].image = this.NewsList[i].image.substring(0, this.NewsList[i].image.length-1)
        this.NewsList[i].url = this.NewsList[i].url.substring(0, this.NewsList[i].url.length-1)
        this.NewsList[i].title = this.NewsList[i].title.substring(0, this.NewsList[i].title.length-1)
        this.NewsList[i].site = this.NewsList[i].site.substring(0, this.NewsList[i].site.length-1)
        this.NewsList[i].text = this.NewsList[i].text.substring(0, this.NewsList[i].text.length-1)
      }

      this.NewsList = [this.NewsList[0].title, this.NewsList[0].image, this.NewsList[0].site, this.NewsList[0].text, this.NewsList[0].url,
        this.NewsList[1].title, this.NewsList[1].image, this.NewsList[1].site, this.NewsList[1].text, this.NewsList[1].url,
        this.NewsList[2].title, this.NewsList[2].image, this.NewsList[2].site, this.NewsList[2].text, this.NewsList[2].url,
        this.NewsList[3].title, this.NewsList[3].image, this.NewsList[3].site, this.NewsList[3].text, this.NewsList[3].url,
        this.NewsList[4].title, this.NewsList[4].image, this.NewsList[4].site, this.NewsList[4].text, this.NewsList[4].url];

    },
    console.error
    );
  }
  vzNewsMessage(){
    this.dataApi.picker = 'vz-news'
    this.newsListSubs = this.dataApi
    .getNews()
    .subscribe((res: NewsData) => {
      this.NewsList = res;
      this.newsMessageEvent.emit(this.NewsList)
            for(let i=0; i<5; i++){
        this.NewsList[i].image = (this.NewsList[i].image).replace('\"', '')
        this.NewsList[i].url = (this.NewsList[i].url).replace('\"', '')
        this.NewsList[i].title = (this.NewsList[i].title).replace('\"', '')
        this.NewsList[i].site = (this.NewsList[i].site).replace('\"', '')
        this.NewsList[i].text = (this.NewsList[i].text).replace('\"', '')

        this.NewsList[i].image = this.NewsList[i].image.substring(0, this.NewsList[i].image.length-1)
        this.NewsList[i].url = this.NewsList[i].url.substring(0, this.NewsList[i].url.length-1)
        this.NewsList[i].title = this.NewsList[i].title.substring(0, this.NewsList[i].title.length-1)
        this.NewsList[i].site = this.NewsList[i].site.substring(0, this.NewsList[i].site.length-1)
        this.NewsList[i].text = this.NewsList[i].text.substring(0, this.NewsList[i].text.length-1)
      }

      this.NewsList = [this.NewsList[0].title, this.NewsList[0].image, this.NewsList[0].site, this.NewsList[0].text, this.NewsList[0].url,
        this.NewsList[1].title, this.NewsList[1].image, this.NewsList[1].site, this.NewsList[1].text, this.NewsList[1].url,
        this.NewsList[2].title, this.NewsList[2].image, this.NewsList[2].site, this.NewsList[2].text, this.NewsList[2].url,
        this.NewsList[3].title, this.NewsList[3].image, this.NewsList[3].site, this.NewsList[3].text, this.NewsList[3].url,
        this.NewsList[4].title, this.NewsList[4].image, this.NewsList[4].site, this.NewsList[4].text, this.NewsList[4].url];

    },
    console.error
    );
  }
  wbaNewsMessage(){
    this.dataApi.picker = 'wba-news'
    this.newsListSubs = this.dataApi
    .getNews()
    .subscribe((res: NewsData) => {
      this.NewsList = res;
      this.newsMessageEvent.emit(this.NewsList)
            for(let i=0; i<5; i++){
        this.NewsList[i].image = (this.NewsList[i].image).replace('\"', '')
        this.NewsList[i].url = (this.NewsList[i].url).replace('\"', '')
        this.NewsList[i].title = (this.NewsList[i].title).replace('\"', '')
        this.NewsList[i].site = (this.NewsList[i].site).replace('\"', '')
        this.NewsList[i].text = (this.NewsList[i].text).replace('\"', '')

        this.NewsList[i].image = this.NewsList[i].image.substring(0, this.NewsList[i].image.length-1)
        this.NewsList[i].url = this.NewsList[i].url.substring(0, this.NewsList[i].url.length-1)
        this.NewsList[i].title = this.NewsList[i].title.substring(0, this.NewsList[i].title.length-1)
        this.NewsList[i].site = this.NewsList[i].site.substring(0, this.NewsList[i].site.length-1)
        this.NewsList[i].text = this.NewsList[i].text.substring(0, this.NewsList[i].text.length-1)
      }

      this.NewsList = [this.NewsList[0].title, this.NewsList[0].image, this.NewsList[0].site, this.NewsList[0].text, this.NewsList[0].url,
        this.NewsList[1].title, this.NewsList[1].image, this.NewsList[1].site, this.NewsList[1].text, this.NewsList[1].url,
        this.NewsList[2].title, this.NewsList[2].image, this.NewsList[2].site, this.NewsList[2].text, this.NewsList[2].url,
        this.NewsList[3].title, this.NewsList[3].image, this.NewsList[3].site, this.NewsList[3].text, this.NewsList[3].url,
        this.NewsList[4].title, this.NewsList[4].image, this.NewsList[4].site, this.NewsList[4].text, this.NewsList[4].url];

    },
    console.error
    );
  }
  wmtNewsMessage(){
    this.dataApi.picker = 'wmt-news'
    this.newsListSubs = this.dataApi
    .getNews()
    .subscribe((res: NewsData) => {
      this.NewsList = res;
      this.newsMessageEvent.emit(this.NewsList)
            for(let i=0; i<5; i++){
        this.NewsList[i].image = (this.NewsList[i].image).replace('\"', '')
        this.NewsList[i].url = (this.NewsList[i].url).replace('\"', '')
        this.NewsList[i].title = (this.NewsList[i].title).replace('\"', '')
        this.NewsList[i].site = (this.NewsList[i].site).replace('\"', '')
        this.NewsList[i].text = (this.NewsList[i].text).replace('\"', '')

        this.NewsList[i].image = this.NewsList[i].image.substring(0, this.NewsList[i].image.length-1)
        this.NewsList[i].url = this.NewsList[i].url.substring(0, this.NewsList[i].url.length-1)
        this.NewsList[i].title = this.NewsList[i].title.substring(0, this.NewsList[i].title.length-1)
        this.NewsList[i].site = this.NewsList[i].site.substring(0, this.NewsList[i].site.length-1)
        this.NewsList[i].text = this.NewsList[i].text.substring(0, this.NewsList[i].text.length-1)
      }

      this.NewsList = [this.NewsList[0].title, this.NewsList[0].image, this.NewsList[0].site, this.NewsList[0].text, this.NewsList[0].url,
        this.NewsList[1].title, this.NewsList[1].image, this.NewsList[1].site, this.NewsList[1].text, this.NewsList[1].url,
        this.NewsList[2].title, this.NewsList[2].image, this.NewsList[2].site, this.NewsList[2].text, this.NewsList[2].url,
        this.NewsList[3].title, this.NewsList[3].image, this.NewsList[3].site, this.NewsList[3].text, this.NewsList[3].url,
        this.NewsList[4].title, this.NewsList[4].image, this.NewsList[4].site, this.NewsList[4].text, this.NewsList[4].url];

    },
    console.error
    );
  }


  ngOnChanges(changes: SimpleChanges) {
    this.newsCaller = (this.newsCaller).join('')
    switch(this.newsCaller) {
      case 'aapl':
        this.aaplNewsMessage();
        break;
      case 'amgn':
        this.amgnNewsMessage();
        break;
      case 'axp':
        this.axpNewsMessage();
        break;
      case 'ba':
        this.baNewsMessage();
        break;
      case 'cat':
        this.catNewsMessage();
        break;
      case 'crm':
        this.crmNewsMessage();
        break;
      case 'csco':
        this.cscoNewsMessage();
        break;
      case 'cvx':
        this.cvxNewsMessage();
        break;
      case 'dis':
        this.disNewsMessage();
        break;
      case 'dow':
        this.dowNewsMessage();
        break;
      case 'gs':
        this.gsNewsMessage();
        break;
      case 'hd':
        this.hdNewsMessage();
        break;
      case 'hon':
        this.honNewsMessage();
        break;
      case 'ibm':
        this.ibmNewsMessage();
        break;
      case 'intc':
        this.intcNewsMessage();
        break;
      case 'jnj':
        this.jnjNewsMessage();
        break;
      case 'jpm':
        this.jpmNewsMessage();
        break;
      case 'ko':
        this.koNewsMessage();
        break;
      case 'mcd':
        this.mcdNewsMessage();
        break;
      case 'mmm':
        this.mmmNewsMessage();
        break;
      case 'mrk':
        this.mrkNewsMessage();
        break;
      case 'msft':
        this.msftNewsMessage();
        break;
      case 'nke':
        this.nkeNewsMessage();
        break;
      case 'pg':
        this.pgNewsMessage();
        break;
      case 'trv':
        this.trvNewsMessage();
        break;
      case 'unh':
        this.unhNewsMessage();
        break;
      case 'v':
        this.vNewsMessage();
        break;
      case 'vz':
        this.vzNewsMessage();
        break;
      case 'wba':
        this.wbaNewsMessage();
        break;
      case 'wmt':
        this.wmtNewsMessage();
        break;


      default:
        console.log("Not recognized")

    }



  }
}
