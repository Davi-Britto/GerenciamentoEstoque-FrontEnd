import { ECategoriaDespesa } from '../enums/categoria-despesa.enum';


export interface DespesaRequest {

  descricao: string;

  valor: number;

  categoria: ECategoriaDespesa;

}