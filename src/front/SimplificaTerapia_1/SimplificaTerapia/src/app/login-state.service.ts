import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginStateService {

  constructor() { }

  private _logado = false;

  get logado(): boolean {
    return this._logado;
  }

  set logado(value: boolean) {
    this._logado = value;
  }
}
