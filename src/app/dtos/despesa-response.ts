import { ECategoriaDespesa } from "../enums/categoria-despesa.enum";
import { EStatusDespesa } from "../enums/status-despesa.enum";

export interface DespesaResponse {

  id:number;

  descricao:string;

  valor:number;

  categoria:ECategoriaDespesa;

  dataDespesa:string;

  status:EStatusDespesa;

}