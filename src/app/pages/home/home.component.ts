import { Component } from '@angular/core';
import { MainLayoutComponent } from '../../components/main-layout/main-layout.component';
import { CardsComponent } from '../../components/cards/cards.component';
import { LineChartComponent } from "../../components/dashboards/line-chart/line-chart.component";
import { BarChartComponent } from "../../components/dashboards/bar-chart/bar-chart.component";
import { ColumnChartComponent } from '../../components/dashboards/column-chart/column-chart.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainLayoutComponent, CardsComponent, LineChartComponent, BarChartComponent, ColumnChartComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
