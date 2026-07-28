import { EMotivoMovimentacao } from "../enums/motivo-movimentacao.enum";

export const MOTIVOS_MOVIMENTACAO = [
  {
    label: 'Compra',
    value: EMotivoMovimentacao.COMPRA,
    tiposPermitidos: ['ENTRADA']
  },
  {
    label: 'Perda',
    value: EMotivoMovimentacao.PERDA,
    tiposPermitidos: ['SAIDA']
  },
  {
    label: 'Ajuste',
    value: EMotivoMovimentacao.AJUSTE,
    tiposPermitidos: ['ENTRADA', 'SAIDA']
  },
  {
    label: 'Consumo interno',
    value: EMotivoMovimentacao.CONSUMO_INTERNO,
    tiposPermitidos: ['SAIDA']
  },
];