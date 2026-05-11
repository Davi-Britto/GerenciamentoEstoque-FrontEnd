import { Component, Input, OnInit } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.css'
})
export class BarChartComponent implements OnInit {

  @Input() values: number[] = [];
  @Input() labels: string[] = [];
  @Input() chartTitle: string = '';
  @Input() chartColor: string = '#ffffff';

  chartOptions: any;

  ngOnInit(): void {

    this.chartOptions = {

      series: [
        {
          name: this.chartTitle,
          data: this.values
        }
      ],

      chart: {
        type: 'bar',
        height: 300,
        foreColor: '#ffffff'
      },

      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '50%'
        }
      },

      xaxis: {
        categories: this.labels
      },

      dataLabels: {
        enabled: true
      },

      tooltip: {
        enabled: true
      },

      title: {
        text: this.chartTitle,
        align: 'left',
        style: {
          fontSize: '16px',
          color: '#fff'
        }
      },

      colors: [this.chartColor]
    };
  }
}