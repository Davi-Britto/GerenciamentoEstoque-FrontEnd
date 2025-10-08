import { Component, Input } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.css'
})
export class BarChartComponent {

  @Input() seriesData: number[] = [1000, 900, 800, 700, 600, 500];
  @Input() categories: string[] = ["Coxinha","Empada","Esfiha","Kibe","Croquete","Queijo"];
  @Input() chartTitle: string = 'Top Produtos';

  chartOptions: any = {
  series: [{ name: this.chartTitle, data: this.seriesData }],
  chart: { type: 'bar', height: 350 },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '50%',
    }
  },
  xaxis: { categories: this.categories },
  dataLabels: { enabled: true },
  tooltip: { enabled: true },
  title: { text: this.chartTitle, align: 'left', style: { fontSize: '16px', color: '#fff' } },
  colors: ['var(--color-chart)']
};
}
