import { EMotivoMovimentacao } from "../enums/motivo-movimentacao.enum";
import { ETipoMovimentacao } from "../enums/tipo-movimentacao.enum";

export interface MovimentacaoRequest {

  idProduto:number;

  tipoMovimentacao:ETipoMovimentacao;

  motivoMovimentacao:EMotivoMovimentacao;

  quantidade:number;

}