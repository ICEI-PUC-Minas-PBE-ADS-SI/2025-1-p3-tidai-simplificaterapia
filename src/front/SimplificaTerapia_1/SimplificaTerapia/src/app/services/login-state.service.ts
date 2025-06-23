import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginStateService {
  constructor(private router: Router) {}

  logout(): void {
    localStorage.removeItem('usuarioLogado');
    localStorage.removeItem('userId');
    this.router.navigate(['/login']);
  }

  isLogado(): boolean {
    return !!localStorage.getItem('usuarioLogado');
  }

  get logado(): boolean {
    return this.isLogado();
  }
}
