import { Component, OnInit, OnDestroy, ViewChild, Input, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StockCardComponent } from '../stock-card/stock-card.component';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexLegend
} from "ng-apexcharts";
import * as ApexCharts from 'apexcharts';

export interface ApexOptions {
  chart?: ApexChart;
  colors?: any[];
  dataLabels?: ApexDataLabels;
  grid?: ApexGrid;
  labels?: string[];
  legend?: ApexLegend;
  markers?: ApexMarkers;
  stroke?: ApexStroke;
  subtitle?: ApexTitleSubtitle;
  title?: ApexTitleSubtitle;
  xaxis?: ApexXAxis;
  yaxis?: ApexYAxis | ApexYAxis[];
}

@Component({
  selector: 'app-stock-chart',
  templateUrl: './stock-chart.component.html',
  styleUrls: ['./stock-chart.component.css']
})
export class StockChartComponent implements OnInit{
  @Input() xer: any = [];
  @Input() ser: any = [];

  updateSeries() {
    this.chartOptions.series = [{
      data: this.xer
    }];
    this.chartOptions.yaxis = {
      min: Math.trunc(this.xer[0]) - 30,
      max: Math.trunc(this.xer[0]) + 30
    }
  }

  @ViewChild("chart", {static: false}) chart!: ChartComponent;
  public chartOptions: Partial<ApexOptions> | any ;
  constructor() {
  }

  ngOnInit() {
    this.chartOptions = {
      series: [
        {
          name: "Price",
          data: []
        }
      ],
      chart: {
        redrawOnWindowResize: true,
        height: 450,
        width: 440,
        type: "area",
        background: '#fff',
        dropShadow: {
          enabled: false
        },
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
      }
      },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
            enabled: true,
            delay: 10
        },
        dynamicAnimation: {
            enabled: true,
            speed: 10
        }
      },
      colors: ["#77B6EA", "#545454"],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      title: {
        text: "Stock Price",
        align: "center"
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5
        }
      },
      markers: {
        size: 0
      },
      xaxis: {
        categories: this.ser,
        tickAmount: 6

      },
      yaxis: {
        min:  0,
        max: 200
      },
      tooltip: {
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5
      },
      toolbar: {
        tools: {
          download: false
        }
      }
    };
}

  ngOnChanges(changes: SimpleChanges) {
    this.updateSeries();
  }

}




