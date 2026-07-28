import { EStatusVenda } from "../enums/status-venda.enum";

export interface VendaTableResponse {

  id:number;

  quantidadeItens:number;

  valorTotal:number;

  status:EStatusVenda;

  dataVenda:string;

}