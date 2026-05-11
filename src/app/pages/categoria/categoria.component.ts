import { Component } from '@angular/core';
import { InputComponent } from "../../components/input/input.component";
import { ButtonComponent } from "../../components/button/button.component";
import { CommonModule } from '@angular/common';
import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [InputComponent, ButtonComponent, TableComponent, CommonModule],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent {

  colunas = [
    {
      header: 'Id',
      field: 'id'
    },
    {
      header: 'Nome',
      field: 'nome'
    }
  ]

  categorias = [
    {id: 1, nome: 'Frito'},
    {id: 2, nome: 'Assado'},
    {id: 3, nome: 'Congelado'},
  ]

  editar(produto: any) {
    console.log('Editar', produto);
  }

  deletar(produto: any) {
    console.log('Deletar', produto);
  }

}
