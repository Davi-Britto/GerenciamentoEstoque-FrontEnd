import { EStatusCategoria } from "../enums/status-categoria.enum";


export interface CategoriaResponse {

  id: number;

  nome: string;

  status: EStatusCategoria;

}