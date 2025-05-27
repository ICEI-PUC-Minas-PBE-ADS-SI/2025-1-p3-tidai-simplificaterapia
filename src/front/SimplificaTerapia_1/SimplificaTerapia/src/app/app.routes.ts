import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { TerapeutasComponent } from './terapeutas/terapeutas.component';
import { LaudosComponent } from './laudos/laudos.component';
import { RealizarPagamentoComponent } from './realizar-pagamento/realizar-pagamento.component';
import { RecibosComponent } from './recibos/recibos.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { AgendarConsultaComponent } from './agendar-consulta/agendar-consulta.component';
import { PerfilMedicoComponent } from './perfil-medico/perfil-medico.component';
import { PerfilPacienteComponent } from './perfil-paciente/perfil-paciente.component';
import { NotificacoesComponent } from './notificacoes/notificacoes.component';

export const routes: Routes = [
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
