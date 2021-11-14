export interface Igrid {
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
}

export class grid implements Igrid {
  HoraAgendada: Date = undefined;;
  NomeServico: string = "";
  Valor: number = undefined;
  Descricao: string = "";
  NomeDono: string = "";
  Email: string = "";
  NomeAnimal: string = "";
  PorteAnimal: number = undefined;
  GeneroBiologico: number = undefined;
  NomeRaca: string = "";
}
