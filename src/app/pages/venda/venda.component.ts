import { Component, Input, OnInit } from '@angular/core';
import { InputComponent } from "../../components/input/input.component";
import { InputSelectComponent } from "../../components/input-select/input-select.component";
import { ButtonComponent } from "../../components/button/button.component";
import { CommonModule } from '@angular/common';
import { ModalComponent } from "../../components/modal/modal.component";
import { ItemVendaRequest } from '../../dtos/item-venda-request';
import { ProdutoResponse } from '../../dtos/produto-response';
import { EStatusCategoria } from '../../enums/status-categoria.enum';
import { EStatusProduto } from '../../enums/status-produto.enum';
import { VendaRequest } from '../../dtos/venda-request';
import { TableComponent } from "../../components/table/table.component";
import { EStatusVenda } from '../../enums/status-venda.enum';
import { VendaResponse } from '../../dtos/venda-response';
import { VendaTableResponse } from '../../dtos/venda-table-response';
import { ItemVendaResponse } from '../../dtos/item-venda-response';

@Component({
  selector: 'app-venda',
  standalone: true,
  imports: [InputComponent, InputSelectComponent, ButtonComponent, CommonModule, ModalComponent, TableComponent],
  templateUrl: './venda.component.html',
  styleUrl: './venda.component.css'
})
export class VendaComponent implements OnInit {

  venda: VendaRequest | null = null;

  itensVenda: ItemVendaRequest[] = [
    {
      idProduto: null,
      quantidade: null
    }
  ];

  produtos: ProdutoResponse[] = [];

  vendas: VendaResponse[] = [];

  vendasTabela: VendaTableResponse[] = [];

  itensVendaTabela: any[] = [];

  mostrarModal: boolean = false;

  mostrarDetalhes: boolean = false;

  ngOnInit() {
    this.buscarProdutos();
    this.buscarVendas();
  }

  buscarProdutos() {
    this.produtos = [
      {
        id: 1,
        nome: "Coxinha",
        precoUnitario: 5,
        quantidadeEstoque: 20,
        categoria: {
          id: 1,
          nome: "Fritos",
          status: EStatusCategoria.ATIVA
        },
        status: EStatusProduto.ATIVO
      },
      {
        id: 2,
        nome: "Empada",
        precoUnitario: 2.5,
        quantidadeEstoque: 80,
        categoria: {
          id: 2,
          nome: "Assados",
          status: EStatusCategoria.ATIVA
        },
        status: EStatusProduto.ATIVO
      },
      {
        id: 3,
        nome: "Nhoque",
        precoUnitario: 1.5,
        quantidadeEstoque: 100,
        categoria: {
          id: 3,
          nome: "Congelados",
          status: EStatusCategoria.ATIVA
        },
        status: EStatusProduto.ATIVO
      },
    ]
  }

  buscarVendas() {
    this.vendas = [
      {
        id: 1,
        itens: [
          {
            id: 1,
            produto: {
              id: 1,
              nome: "Coxinha",
              precoUnitario: 5,
              quantidadeEstoque: 20,
              categoria: {
                id: 1,
                nome: "Fritos",
                status: EStatusCategoria.ATIVA
              },
              status: EStatusProduto.ATIVO
            },
            quantidade: 2,
            precoUnitario: 5,
            subTotal: 10
          },
          {
            id: 2,
            produto: {
              id: 2,
              nome: "Empada",
              precoUnitario: 2.5,
              quantidadeEstoque: 80,
              categoria: {
                id: 2,
                nome: "Assados",
                status: EStatusCategoria.ATIVA
              },
              status: EStatusProduto.ATIVO
            },
            quantidade: 3,
            precoUnitario: 2.5,
            subTotal: 7.5
          }
        ],
        valorTotal: 17.5,
        status: EStatusVenda.CONCLUIDA,
        dataVenda: "28-07-2026"
      },
      {
        id: 2,
        itens: [
          {
            id: 3,
            produto: {
              id: 3,
              nome: "Nhoque",
              precoUnitario: 1.5,
              quantidadeEstoque: 100,
              categoria: {
                id: 3,
                nome: "Congelados",
                status: EStatusCategoria.ATIVA
              },
              status: EStatusProduto.ATIVO
            },
            quantidade: 5,
            precoUnitario: 1.5,
            subTotal: 7.5
          }
        ],
        valorTotal: 7.5,
        status: EStatusVenda.CONCLUIDA,
        dataVenda: "28-07-2026"
      }
    ];

    this.montarTabelaVendas();

  }

  montarTabelaVendas(){

    this.vendasTabela = this.vendas.map(venda => ({
        id: venda.id,
        quantidadeItens: venda.itens.length,
        valorTotal: venda.valorTotal,
        status: venda.status,
        dataVenda: venda.dataVenda
    }));

  }

  alterarProduto(id: string, indice: number) {
    this.itensVenda[indice].idProduto = Number(id);
  }

  alterarQuantidade(valor: number, indice: number) {
    this.itensVenda[indice].quantidade = Number(valor);
  }

  adicionarLinha() {
    this.itensVenda.push({
      idProduto: null,
      quantidade: null
    });
  }

  removerLinha(indice: number) {
    this.itensVenda.splice(indice, 1);
  }

  abrirModal() {
    this.mostrarModal = true;
  }

  fecharModal() {
    this.mostrarModal = false;
  }

  podeAdicionarItem(indice: number): boolean {
    return this.itensVenda[indice].idProduto !== null
      && this.itensVenda[indice].quantidade !== null
      && this.itensVenda[indice].quantidade > 0
  }

  get podeExcluir(): boolean {
    return this.itensVenda.length > 1;
  }

  salvarVenda() {

    this.venda = {
      itens: this.itensVenda
    }

    console.log(this.venda)
  }

  abrirDetalhes(vendaTable: any) {
    const vendaSelecionada = this.vendas.find(venda => venda.id === vendaTable.id) ?? null;

    if(!vendaSelecionada){
        return;
    }

    this.itensVendaTabela = vendaSelecionada.itens.map(item => ({
      id:item.id,
      produto:item.produto.nome,
      quantidade:item.quantidade,
      precoUnitario:item.precoUnitario,
      subTotal:item.subTotal
    }));

    this.mostrarDetalhes = true;
  }

  colunasVenda = [
    {
      header: 'ID',
      field: 'id'
    },
    {
      header: 'Quantidade de Itens',
      field: 'quantidadeItens'
    },
    {
      header: 'Valor Total ($)',
      field: 'valorTotal'
    },
    {
      header: 'Status',
      field: 'status'
    },
    {
      header: 'Data da Venda',
      field: 'dataVenda'
    }
  ];

  colunasItensVenda = [
    {
      header: 'Produto',
      field: 'produto'
    },
    {
      header: 'Quantidade',
      field: 'quantidade'
    },
    {
      header: 'Preço Unitário',
      field: 'precoUnitario'
    },
    {
      header: 'Subtotal',
      field: 'subTotal'
    }
  ];
}