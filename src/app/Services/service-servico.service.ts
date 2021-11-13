import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';
import { Raca } from '../models/Raca';
import { Servicos } from '../models/ServicoList';


@Injectable({
  providedIn: 'root'
})
export class ServiceServicoService {

  private readonly api = "https://localhost:44326/api"

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
    return this.http.post<any>(`${this.api}/Servico/Create`, body).pipe(first())
  }
  deleteRaca(id: number){
    return this.http.delete<any>(`${this.api}/Servico/Delete/${id}`).pipe(first())
  }
}
