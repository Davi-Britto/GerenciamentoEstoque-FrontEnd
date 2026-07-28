import { EStatusVenda } from "../enums/status-venda.enum";
import { ItemVendaResponse } from "./item-venda-response";

export interface VendaResponse {

  id:number;

  itens:ItemVendaResponse[];

  valorTotal:number;

  status:EStatusVenda;

  dataVenda:string;

}