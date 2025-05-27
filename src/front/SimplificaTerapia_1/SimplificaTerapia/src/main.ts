import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { LoginComponent } from './app/login/login.component';
import { InicioComponent } from './app/inicio/inicio.component';
import { LayoutComponent } from './app/layout/layout.component';
import { CadastroComponent } from './app/cadastro/cadastro.component';
import { TerapeutasComponent } from './app/terapeutas/terapeutas.component';
import { LaudosComponent } from './app/laudos/laudos.component';
import { RealizarPagamentoComponent } from './app/realizar-pagamento/realizar-pagamento.component';
import { RecibosComponent } from './app/recibos/recibos.component';
import { ConsultasComponent } from './app/consultas/consultas.component';
import { AgendarConsultaComponent } from './app/agendar-consulta/agendar-consulta.component';
import { PerfilMedicoComponent } from './app/perfil-medico/perfil-medico.component';
import { PerfilPacienteComponent } from './app/perfil-paciente/perfil-paciente.component';
import { NotificacoesComponent } from './app/notificacoes/notificacoes.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: InicioComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: LayoutComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'terapeutas', component: TerapeutasComponent },
  { path: 'laudos', component: LaudosComponent },
  { path: 'realizarPagamento', component: RealizarPagamentoComponent },
  { path: 'recibos', component: RecibosComponent },
  { path: 'consultas', component: ConsultasComponent },
  { path: 'agendarconsulta', component: AgendarConsultaComponent },
  { path: 'perfilMedico', component: PerfilMedicoComponent },
  { path: 'perfilPaciente', component: ConsultasComponent },
  { path: 'notificacoes', component: NotificacoesComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
});
