import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgApexchartsModule } from 'ng-apexcharts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockCardComponent } from './stock-card/stock-card.component';
import { HttpCallerComponent } from './http-caller/http-caller.component';
import { StockNewsComponent } from './stock-news/stock-news.component';
import { StockChartComponent } from './stock-chart/stock-chart.component';
import { StocksApiService } from 'src/app/stocks/stocks-api.service';
import { CardDataComponent } from './card-data/card-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    StockCardComponent,
    HttpCallerComponent,
    StockNewsComponent,
    StockChartComponent,
    CardDataComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgApexchartsModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [StocksApiService, CardDataComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
