import { Component, OnInit } from '@angular/core';
import { InputSelectComponent } from "../../components/input-select/input-select.component";
import { InputComponent } from "../../components/input/input.component";
import { ButtonComponent } from "../../components/button/button.component";
import { CATEGORIA_DESPESA } from '../../constants/categoria-despesa.constants';
import { DespesaRequest } from '../../dtos/despesa-request';
import { ECategoriaDespesa } from '../../enums/categoria-despesa.enum';
import { TableComponent } from "../../components/table/table.component";
import { DespesaResponse } from '../../dtos/despesa-response';
import { EStatusDespesa } from '../../enums/status-despesa.enum';

@Component({
  selector: 'app-despesa',
  standalone: true,
  imports: [InputSelectComponent, InputComponent, ButtonComponent, TableComponent],
  templateUrl: './despesa.component.html',
  styleUrl: './despesa.component.css'
})
export class DespesaComponent implements OnInit{

  despesa: DespesaRequest | null = null;

  descricao: string | null = null;

  valor: number | null = null;

  categoria: ECategoriaDespesa | null = null;

  categoriaDespesa = CATEGORIA_DESPESA;

  despesaResponse: DespesaResponse[] = [];

  ngOnInit(){
    this.buscarDespesas();
  }

  buscarDespesas() {
  this.despesaResponse = [
    {
      id: 1,
      descricao: "Compra de ingredientes",
      valor: 350,
      categoria: ECategoriaDespesa.OUTROS,
      dataDespesa: "28-07-2026",
      status: EStatusDespesa.ATIVA
    },
    {
      id: 2,
      descricao: "Conta de energia",
      valor: 420.80,
      categoria: ECategoriaDespesa.ENERGIA,
      dataDespesa: "27-07-2026",
      status: EStatusDespesa.ATIVA
    },
    {
      id: 3,
      descricao: "Compra de embalagens",
      valor: 185.50,
      categoria: ECategoriaDespesa.OUTROS,
      dataDespesa: "26-07-2026",
      status: EStatusDespesa.CANCELADA
    },
    {
      id: 4,
      descricao: "Alugel",
      valor: 99.90,
      categoria: ECategoriaDespesa.ALUGUEL,
      dataDespesa: "25-07-2026",
      status: EStatusDespesa.ATIVA
    }
  ];
}

  receberCategoriaDespesa(categoria: any){
    this.categoria = categoria;
  }

  receberDescricao(descricao: any){
    this.descricao = descricao;
  }

  receberValor(valor: string){
    this.valor = Number(valor);
  }

  salvarDespesa() {

    if (!this.habilitaBotao) {
      return;
    }

    this.despesa = {
      descricao: this.descricao!,
      valor: this.valor!,
      categoria: this.categoria!
    };

    console.log(this.despesa);

  }

  get habilitaBotao(): boolean {
    return !!this.descricao
        && this.valor !== null
        && this.categoria !== null;
  }

  colunas = [
    {
      header: 'Id',
      field: 'id'
    },
    {
      header: 'Descrição',
      field: 'descricao'
    },
    {
      header: 'Valor',
      field: 'valor'
    },
    {
      header: 'Categoria da Despesa',
      field: 'categoria'
    },
  ]
}
