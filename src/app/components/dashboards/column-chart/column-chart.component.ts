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

  @Input() seriesData: number[] = [20, 75, 120, 200, 40, 60];
  @Input() categories: string[] = ["Coxinha", "Empada", "Esfiha", "Kibe", "Croquete", "Queijo"];
  @Input() chartTitle: string = 'Status do Estoque';

  chartOptions: any;

  ngOnInit(): void {
    this.chartOptions = {
      series: [{
        name: this.chartTitle,
        data: this.seriesData
      }],
      chart: { type: 'bar', height: 350 },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '20%',
          distributed: true // <--- importantíssimo para cores por barra
        }
      },
      dataLabels: { enabled: true },
      xaxis: { categories: this.categories },
      colors: this.seriesData.map(value => this.getColor(value)), // array de cores
      title: {
        text: this.chartTitle,
        align: 'left',
        style: { fontSize: '16px', color: '#fff' }
      },
      tooltip: { enabled: true }
    };
  }

  private getColor(value: number): string {
    if (value < 50) return '#575757ff';          // vermelho
    if (value >= 50 && value <= 150) return '#8b8b8bff'; // amarelo
    return '#ffffffff';                          // verde
  }
}
