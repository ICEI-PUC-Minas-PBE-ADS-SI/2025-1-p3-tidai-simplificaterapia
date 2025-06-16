import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginStateService {
  logado: boolean = false;

  constructor() {
    const usuario = localStorage.getItem('usuarioLogado');
    this.logado = !!usuario;
  }

  logout() {
    this.logado = false;
    localStorage.removeItem('usuarioLogado');
  }
}
