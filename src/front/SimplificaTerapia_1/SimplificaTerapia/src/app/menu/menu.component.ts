import { Component } from '@angular/core';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
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
export class MenuComponent {
  constructor(public loginState: LoginStateService) {}

   mostrarAlerta: boolean = false;
   showNotifications = false;

  ngOnInit(){
    if (this.loginState.logado == true){
      this.mostrarAlerta = true;
  
      setTimeout(() => {
        this.mostrarAlerta = false;
      }, 5000);
    }
  }

  get Logado(): boolean {
    return this.loginState.logado;
  }
}
