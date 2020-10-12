import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProdutoModel } from '../models/ProdutoModel';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    // bater na API
    public url = 'http://localhost:8080';

  constructor(
    private http: HttpClient
  ) { }

  getProdutos() {
    return this.http.get<ProdutoModel[]>(`${this.url}/produtos`);
  }
}