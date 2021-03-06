import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';
import { grid } from '../models/grid';
import { Raca } from '../models/Raca';
import { Servicos } from '../models/ServicoList';


@Injectable({
  providedIn: 'root'
})
export class ServiceServicoService {

  //private readonly api = "https://localhost:44326/api"
  private readonly api = "http://192.168.0.6:45600/api"

  constructor(private http: HttpClient) { }

  getServicos(){
    return this.http.get<Servicos[]>(`${this.api}/Servico/BuscarTodos`).pipe(first())
  }
  postServicos(body: Servicos){
    return this.http.post<any>(`${this.api}/Servico/Create`, body).pipe(first())
  }
  deleteServicos(id: number){
    return this.http.delete<any>(`${this.api}/Servico/Delete/${id}`).pipe(first())
  }

  getRaca(){
    return this.http.get<Raca[]>(`${this.api}/Raca/Buscar`).pipe(first())
  }
  postRaca(body: Raca){
    return this.http.post<any>(`${this.api}/Raca/Create`, body).pipe(first())
  }
  deleteRaca(id: number){
    return this.http.delete<any>(`${this.api}/Raca/Delete/${id}`).pipe(first())
  }

  deleteAgenda(id: number){
    return this.http.delete<any>(`${this.api}/Agenda/Delete/${id}`).pipe(first())
  }
  getMontarGrid(data: Date){
    return this.http.get<grid[]>(`${this.api}/Agenda/MontarGrid?Data=${data.toISOString()}`).pipe(first())
  }
  getIniciar(id: number){
    return this.http.get<any>(`${this.api}/Agenda/Iniciar/${id}`).pipe(first())
  }
  getFinalizar(id: number){
    return this.http.get<any>(`${this.api}/Agenda/Finalizar/${id}`).pipe(first())
  }
}
