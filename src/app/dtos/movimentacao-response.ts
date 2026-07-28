import { EMotivoMovimentacao } from "../enums/motivo-movimentacao.enum";
import { ETipoMovimentacao } from "../enums/tipo-movimentacao.enum";
import { ProdutoResponse } from "./produto-response";

export interface MovimentacaoResponse {

  id:number;

  produto:ProdutoResponse;

  tipoMovimentacao:ETipoMovimentacao;

  motivoMovimentacao:EMotivoMovimentacao;

  quantidade:number;

  dataMovimentacao:string;

}