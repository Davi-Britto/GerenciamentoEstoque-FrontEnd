import { Component, Input, OnInit } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-column-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.css']
})
export class ColumnChartComponent implements OnInit {

  @Input() values: number[] = [];
  @Input() labels: string[] = [];
  @Input() chartTitle: string = '';

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
          horizontal: false,
          columnWidth: '20%',
          distributed: true
        }
      },

      dataLabels: {
        enabled: true
      },

      xaxis: {
        categories: this.labels
      },

      colors: this.values.map(value => this.getColor(value)),

      title: {
        text: this.chartTitle,
        align: 'left',
        style: {
          fontSize: '16px',
          color: '#fff'
        }
      },

      tooltip: {
        enabled: true
      }
    };
  }

  private getColor(value: number): string {

    if (value < 50) {
      return '#EF4444';
    }

    if (value <= 150) {
      return '#F59E0B';
    }

    return '#22C55E';
  }
}