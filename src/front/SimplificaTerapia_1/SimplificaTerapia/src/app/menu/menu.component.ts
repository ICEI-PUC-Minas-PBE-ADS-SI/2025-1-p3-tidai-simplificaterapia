import { Component, OnInit } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginStateService } from '../login-state.service';
import { NotificacoesComponent } from '../notificacoes/notificacoes.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    NotificacoesComponent
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  mostrarAlerta: boolean = false;
  showNotifications = false;
  usuarioLogado: any = null;

  constructor(public loginState: LoginStateService) {}

  ngOnInit() {
    const usuario = localStorage.getItem('usuarioLogado');
    if (usuario) {
      this.usuarioLogado = JSON.parse(usuario);
    }

    if (this.loginState.logado) {
      this.mostrarAlerta = true;
      setTimeout(() => this.mostrarAlerta = false, 5000);
    }
  }

  logout() {
    this.loginState.logout();
  }

 get Logado(): boolean {
  return this.loginState.logado;
}

}
