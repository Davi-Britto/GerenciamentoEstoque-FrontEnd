import { ProdutoResponse } from "./produto-response";

export interface ItemVendaResponse {

  id:number;

  produto:ProdutoResponse;

  quantidade:number;

  precoUnitario:number;

  subTotal:number;

}