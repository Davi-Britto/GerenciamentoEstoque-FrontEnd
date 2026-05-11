import { Component } from '@angular/core';
import { CardsComponent } from "../../components/cards/cards.component";
import { LineChartComponent } from "../../components/dashboards/line-chart/line-chart.component";
import { BarChartComponent } from "../../components/dashboards/bar-chart/bar-chart.component";
import { ColumnChartComponent } from "../../components/dashboards/column-chart/column-chart.component";
import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardsComponent, LineChartComponent, BarChartComponent, ColumnChartComponent, TableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  colunas = [
    {
      header: 'Nome',
      field: 'nome'
    },
    {
      header: 'Movimentação',
      field: 'movimentacao'
    },
    {
      header: 'Quantidade',
      field: 'quantidade'
    }
  ];

  movimentacoes = [
    {
      nome: 'Coxinha',
      movimentacao: "Saida",
      quantidade: 50
    },
    {
      nome: 'Empada',
      movimentacao: "Entrada",
      quantidade: 200
    },
    {
      nome: 'Empada',
      movimentacao: "Saida",
      quantidade: 30
    },
    {
      nome: 'Esfiha',
      movimentacao: "Entrada",
      quantidade: 80
    },
    
  ];
}
