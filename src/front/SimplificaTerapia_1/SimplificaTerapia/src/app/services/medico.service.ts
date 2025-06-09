import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medico } from '../models/medico';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class MedicoService {
  private apiUrl = 'https://localhost:7222/api/medicos';

  constructor(private http: HttpClient) { }


  getMedicos(nome?: string): Observable<Medico[]> {
    let params = new HttpParams();
    if (nome) {
      params = params.set('nome', nome);
    }

    return this.http.get<Medico[]>(this.apiUrl, { params });
  }


  getMedico(id: number): Observable<Medico> {
    return this.http.get<Medico>(`${this.apiUrl}/${id}`);
  }

  addMedico(medico: any): Observable<any> {
    return this.http.post<Medico>(this.apiUrl, medico);
  }

  updateMedico(id: number, medico: Medico): Observable<Medico> {
    return this.http.put<Medico>(`${this.apiUrl}/${id}`, medico);
  }

  deleteMedico(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
