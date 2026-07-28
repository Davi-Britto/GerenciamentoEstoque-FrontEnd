import { Component } from '@angular/core';
import { InputComponent } from '../../components/input/input.component';
import { ButtonComponent } from '../../components/button/button.component';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../../components/table/table.component';
import { InputSelectComponent } from "../../components/input-select/input-select.component";
import { TIPO_MOVIMENTACAO } from '../../constants/tipo-movimentacao.constants';
import { ETipoMovimentacao } from '../../enums/tipo-movimentacao.enum';
import { MOTIVOS_MOVIMENTACAO } from '../../constants/motivo-movimentacao.constants';

@Component({
  selector: 'app-movimentacao',
  standalone: true,
  imports: [InputComponent, ButtonComponent, CommonModule, TableComponent, InputSelectComponent],
  templateUrl: './movimentacao.component.html',
  styleUrl: './movimentacao.component.css'
})
export class MovimentacaoComponent {

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

  tipoMovimentacao = TIPO_MOVIMENTACAO;

  tipoMovimentacaoSelecionado: string | null = null;

  motivoMovimentacao: any[] = [];

  receberIdProdutoSelecionado(id : string){
    const idProduto = Number(id);
    console.log(id)
  }

  receberTipoMovimentacaoSelecionado(tipoMovimentacao : string){
    this.tipoMovimentacaoSelecionado = tipoMovimentacao;

    this.motivoMovimentacao = [];

    this.motivoMovimentacao = MOTIVOS_MOVIMENTACAO.filter(
      motivo =>
        motivo.tiposPermitidos.includes(tipoMovimentacao)
    );
  }


  receberMotivoSelecionado(motivo : string){
    console.log(motivo)
  }

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
      header: 'Tipo Movimentação',
      field: 'tipoMovimentacao'
    },
    {
      header: 'Motivo Movimentação',
      field: 'motivoMovimentacao'
    },
    {
      header: 'Quantidade',
      field: 'quantidade'
    }
  ];

  movimentacao = [
    {id: 1, nome: "Empada", tipoMovimentacao: "Entrada", motivoMovimentacao: "Compra", quantidade: 80},
    {id: 2, nome: "Nhoque", tipoMovimentacao: "Saída", motivoMovimentacao: "Venda", quantidade: 2},
    {id: 3, nome: "Nhoque", tipoMovimentacao: "Entrada", motivoMovimentacao: "Compra", quantidade: 10},
    {id: 4, nome: "Coxinha", tipoMovimentacao: "Entrada", motivoMovimentacao: "Compra", quantidade: 250},
    {id: 5, nome: "Esfiha", tipoMovimentacao: "Entrada", motivoMovimentacao: "Compra", quantidade: 250},
    {id: 6, nome: "Esfiha", tipoMovimentacao: "Saída", motivoMovimentacao: "Consumo Interno", quantidade: 30},
    {id: 7, nome: "Croquete de Carne", tipoMovimentacao: "Entrada", motivoMovimentacao: "Compra", quantidade: 200},
    {id: 8, nome: "Empada", tipoMovimentacao: "Entrada", motivoMovimentacao: "Compra", quantidade: 110},
    {id: 9, nome: "Coxinha", tipoMovimentacao: "Saída", motivoMovimentacao: "Perda", quantidade: 100},
    {id: 10, nome: "Coxinha", tipoMovimentacao: "Entrada", motivoMovimentacao: "Compra", quantidade: 250},
    {id: 11, nome: "Coxinha", tipoMovimentacao: "Entrada", motivoMovimentacao: "Compra", quantidade: 250},
    {id: 12, nome: "Coxinha", tipoMovimentacao: "Entrada", motivoMovimentacao: "Compra", quantidade: 250},
    {id: 13, nome: "Coxinha", tipoMovimentacao: "Entrada", motivoMovimentacao: "Compra", quantidade: 250},
    {id: 14, nome: "Coxinha", tipoMovimentacao: "Entrada", motivoMovimentacao: "Compra", quantidade: 250},
    {id: 15, nome: "Coxinha", tipoMovimentacao: "Entrada", motivoMovimentacao: "Compra", quantidade: 250},
    {id: 16, nome: "Coxinha", tipoMovimentacao: "Entrada", motivoMovimentacao: "Compra", quantidade: 250},
    {id: 17, nome: "Coxinha", tipoMovimentacao: "Entrada", motivoMovimentacao: "Compra", quantidade: 250},
  ];

}
