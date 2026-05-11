import { CommonModule, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  @Input() colunas: any[] = [];

  @Input() dados: any[] = [];

  @Input() mostrarAcoes: boolean = false;

  @Input() maximoItens: number | null = null;

  @Input() paginacao: boolean = false;

  @Input() itensPorPagina: number = 15;

  paginaAtual: number = 1;

  getDados() {

    let dadosTabela = this.dados;

    if (this.maximoItens) {
      dadosTabela = dadosTabela.slice(0, this.maximoItens);
    }

    if (this.paginacao) {

      const inicio = (this.paginaAtual - 1) * this.itensPorPagina;

      const fim = inicio + this.itensPorPagina;

      return dadosTabela.slice(inicio, fim);
    }

    return dadosTabela;
  }

  proximaPagina() {
    if (this.paginaAtual < this.getTotalPaginas()) {
      this.paginaAtual++;
    }
  }

  paginaAnterior() {
    if (this.paginaAtual > 1) {
      this.paginaAtual--;
    }
  }

  getTotalPaginas() {
    return Math.ceil(
      this.dados.length / this.itensPorPagina
    );
  }
}