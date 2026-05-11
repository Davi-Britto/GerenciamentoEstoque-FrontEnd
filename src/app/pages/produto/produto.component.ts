import { Component } from '@angular/core';
import { InputComponent } from "../../components/input/input.component";
import { ButtonComponent } from "../../components/button/button.component";
import { CommonModule } from '@angular/common';
import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [InputComponent, ButtonComponent, TableComponent, CommonModule],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {

  categorias = [
    { id: 1, nome: 'Frito' },
    { id: 2, nome: 'Assado' },
    { id: 3, nome: 'Congelado' },
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
      header: 'Preço',
      field: 'preco'
    },
    {
      header: 'Categoria',
      field: 'categoria'
    }
  ];

  produtos = [
    {
      id: 1,
      nome: 'Coxinha',
      preco: 59.90,
      categoria: 'Fritos'
    },
    {
      id: 2,
      nome: 'Empada',
      preco: 120.00,
      categoria: 'Assados'
    },
    {
      id: 3,
      nome: 'Nhoque',
      preco: 250.00,
      categoria: 'Congelados'
    },
  ];

  editar(produto: any) {
    console.log('Editar', produto);
  }

  deletar(produto: any) {
    console.log('Deletar', produto);
  }
}