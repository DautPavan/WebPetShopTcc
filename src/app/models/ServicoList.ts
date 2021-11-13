export interface IServicos {
  Id: number;
  NomeServico: string;
  Valor: number;
  Descricao: string;
}

export class Servicos implements IServicos {
  Id: number;
  NomeServico: string = "";
  Valor: number;
  Descricao: string = "";
}
