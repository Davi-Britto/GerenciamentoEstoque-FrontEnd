import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  @Input() values: number[] = [];

  @Input() labels: string[] = [];

  @Input() chartTitle: string = '';

  @Input() chartColor: string = '';

  @ViewChild('chartContainer')
  chartContainer!: ElementRef;

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
        type: 'line',
        height: 300,
        foreColor: '#ffffff'
      },

      xaxis: {
        categories: this.labels
      },

      stroke: {
        curve: 'smooth',
        colors: [this.chartColor]
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
      }
    };
  }

  private resizeObserver!: ResizeObserver;

  ngAfterViewInit() {

    this.resizeObserver = new ResizeObserver(() => {
      window.dispatchEvent(new Event('resize'));
    });

    this.resizeObserver.observe(this.chartContainer.nativeElement);
  }

  ngOnDestroy() {

    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }
}