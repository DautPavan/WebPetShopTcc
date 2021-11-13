export interface IRaca {
  Id: number;
  Nome: string;
  PorteRaca: number;
}

export class Raca implements IRaca {
  Id: number;
  Nome: string = "";
  PorteRaca: number;
}
