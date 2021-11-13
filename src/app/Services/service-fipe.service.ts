import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceFipeService {

  private readonly api = "https://brasilapi.com.br/api/fipe/preco/v1/"

  constructor(private http: HttpClient) { }

  get(codigo: string){
    //return this.http.get<model[]>(`${this.api}${codigo}`).pipe(first())
  }

}

