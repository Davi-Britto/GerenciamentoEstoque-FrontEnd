import { EStatusProduto } from '../enums/status-produto.enum';
import { CategoriaResponse } from './categoria-response';


export interface ProdutoResponse {

  id: number;

  nome: string;

  precoUnitario: number;

  quantidadeEstoque: number;

  categoria: CategoriaResponse;

  status: EStatusProduto;

}