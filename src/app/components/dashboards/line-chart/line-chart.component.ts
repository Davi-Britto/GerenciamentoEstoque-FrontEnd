import { Component, Input } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {
  @Input() seriesData: number[] = [10, 41, 35, 51, 49, 62, 69, 91, 148];
  @Input() categories: string[] = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set"];
  @Input() chartTitle: string = 'Vendas';

  chartOptions: any = {
    series: [{ name: this.chartTitle, data: this.seriesData }],
    chart: { type: 'line', height: 350 },
    xaxis: { categories: this.categories},
    stroke: { curve: 'smooth', colors: ['var(--color-chart)']},
    dataLabels: { enabled: true},
    tooltip: { enabled: true },
    title: { text: this.chartTitle, align: 'left', style: { fontSize: '16px', color: '#fff' } }
  };
}
