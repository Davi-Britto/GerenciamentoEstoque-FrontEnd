import { Component } from '@angular/core';
import { InputComponent } from '../../components/input/input.component';
import { ButtonComponent } from '../../components/button/button.component';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-gerenciamento',
  standalone: true,
  imports: [InputComponent, ButtonComponent, CommonModule, TableComponent],
  templateUrl: './gerenciamento.component.html',
  styleUrl: './gerenciamento.component.css'
})
export class GerenciamentoComponent {

  produtos = [
    {
      id: 1,
      nome: 'Coxinha',
    },
    {
      id: 2,
      nome: 'Empada',
    },
    {
      id: 3,
      nome: 'Nhoque',
    },
    {
      id: 4,
      nome: 'Esfiha',
    },
    {
      id: 5,
      nome: 'Croquete de Carne',
    },
  ];

  colunas = [
    {
      header: 'ID',
      field: 'id'
    },
    {
      header: 'Nome',
      field: 'nome'
    },
    {
      header: 'Ação',
      field: 'acao'
    },
    {
      header: 'Quantidade',
      field: 'quantidade'
    }
  ];

  movimentacao = [
    {id: 1, nome: "Empada", acao: "Entrada", quantidade: 80},
    {id: 2, nome: "Nhoque", acao: "Saída", quantidade: 2},
    {id: 3, nome: "Nhoque", acao: "Entrada", quantidade: 10},
    {id: 4, nome: "Coxinha", acao: "Entrada", quantidade: 250},
    {id: 5, nome: "Esfiha", acao: "Entrada", quantidade: 250},
    {id: 6, nome: "Esfiha", acao: "Saída", quantidade: 30},
    {id: 7, nome: "Croquete de Carne", acao: "Entrada", quantidade: 200},
    {id: 8, nome: "Empada", acao: "Entrada", quantidade: 110},
    {id: 9, nome: "Coxinha", acao: "Saída", quantidade: 100},
    {id: 10, nome: "Coxinha", acao: "Entrada", quantidade: 250},
    {id: 11, nome: "Coxinha", acao: "Entrada", quantidade: 250},
    {id: 12, nome: "Coxinha", acao: "Entrada", quantidade: 250},
    {id: 13, nome: "Coxinha", acao: "Entrada", quantidade: 250},
    {id: 14, nome: "Coxinha", acao: "Entrada", quantidade: 250},
    {id: 15, nome: "Coxinha", acao: "Entrada", quantidade: 250},
    {id: 16, nome: "Coxinha", acao: "Entrada", quantidade: 250},
    {id: 17, nome: "Coxinha", acao: "Entrada", quantidade: 250},
  ];

}
