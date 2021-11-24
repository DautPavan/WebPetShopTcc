export interface Igrid {
  Id: number;
  HoraAgendada: Date;
  NomeServico: string;
  Valor: number;
  Descricao: string;
  NomeDono: string;
  Email: string;
  NomeAnimal: string;
  PorteAnimal: number
  GeneroBiologico: number;
  NomeRaca: string;
  Status: number;
}

export class grid implements Igrid {
  Id: number = undefined;
  HoraAgendada: Date = undefined;
  NomeServico: string = "";
  Valor: number = undefined;
  Descricao: string = "";
  NomeDono: string = "";
  Email: string = "";
  NomeAnimal: string = "";
  PorteAnimal: number = undefined;
  GeneroBiologico: number = undefined;
  NomeRaca: string = "";
  Status: number = undefined;
}
