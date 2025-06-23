import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { map } from 'rxjs/operators';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { MenuComponent } from '../menu/menu.component';
import { EditarConsultaComponent } from '../components/editar-consulta/editar-consulta.component';
import { ConsultaService } from '../services/consulta.service';
import { Consulta } from '../models/consulta';

@Component({
  selector: 'app-consultas',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MenuComponent,
    EditarConsultaComponent,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatTimepickerModule,
  ],
  templateUrl: './consultas.component.html',
  styleUrl: './consultas.component.scss',
})
export class ConsultasComponent implements OnInit {
  consultas: any[] = [];
  consultaSelecionada: any = {};

  tipoUsuarioLogado: string = '';

  modalDetalhesVisivel = false;
  modalDesmarcarConsultaVisivel = false;
  modalEditarConsultaVisivel = false;

  constructor(private consultaService: ConsultaService) {}

  ngOnInit(): void {
    const usuarioString = localStorage.getItem('usuarioLogado');
    if (usuarioString) {
      const usuario = JSON.parse(usuarioString);
      this.tipoUsuarioLogado = usuario.tipo;
    }

    this.carregarConsultas();
  }

  carregarConsultas(): void {
    const idUsuario = localStorage.getItem('userId');

    if (!idUsuario) {
      alert('Usuário não identificado. Por favor, faça o login novamente.');
      return;
    }

    let busca$: any;

    if (this.tipoUsuarioLogado === 'paciente') {
      console.log('Buscando consultas para o PACIENTE com ID:', idUsuario);
      busca$ = this.consultaService.getConsultasPorPaciente(parseInt(idUsuario, 10));
    } 
    else if (this.tipoUsuarioLogado === 'medico') {
      console.log('Buscando consultas para o MÉDICO com ID:', idUsuario);
      busca$ = this.consultaService.getConsultasPorMedico(parseInt(idUsuario, 10));
    } 
    else {
      console.error('Tipo de usuário desconhecido:', this.tipoUsuarioLogado);
      return;
    }


    busca$.pipe(
      map((consultasDaApi: any[]) => {
        return consultasDaApi.map(apiItem => ({
          data: new Date(apiItem.data_consulta).toLocaleDateString('pt-BR'),
          medico: apiItem.medico_Nome,
          paciente: apiItem.paciente_Nome,
          horario: apiItem.horario,
          duracao: `${apiItem.duracao}`,
          situacao: apiItem.situacao,
          valor: apiItem.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
          dadosOriginais: apiItem,
        }));
      })
    ).subscribe({
      next: (consultasFormatadas: any[]) => {
        this.consultas = consultasFormatadas;
      },
      error: (err: any) => {
        console.error('Erro ao carregar consultas:', err);
        alert('Não foi possível carregar as consultas.');
      }
    });
  }

  verDetalhes(consultaClicada: any): void {
    this.consultaSelecionada = { ...consultaClicada, ...consultaClicada.dadosOriginais };
    this.modalDetalhesVisivel = true;
  }

  editarConsulta(consultaClicada: any): void {
    this.consultaSelecionada = consultaClicada;
    this.modalEditarConsultaVisivel = true;
  }

  desmarcar(consultaClicada: any): void {
    this.consultaSelecionada = consultaClicada;
    this.modalDesmarcarConsultaVisivel = true;
  }

  fecharModalDetalhes(): void {
    this.modalDetalhesVisivel = false;
  }

  fecharModalEditar(): void {
    this.modalEditarConsultaVisivel = false;
  }

  fecharModalDesmarcar(): void {
    this.modalDesmarcarConsultaVisivel = false;
  }

  confirmarEdicao(dadosEditados: any): void {
    const id = dadosEditados.id;
    this.consultaService.atualizarConsulta(id, dadosEditados).subscribe({
      next: () => {
        alert('Consulta atualizada com sucesso!');
        this.carregarConsultas();
      },
      error: (err) => {
        console.error('Erro ao atualizar consulta', err);
        alert('Falha ao atualizar a consulta.');
      }
    });
    this.fecharModalEditar();
  }

  confirmarDesmarcamento(): void {
    const idParaExcluir = this.consultaSelecionada.dadosOriginais.id;
    this.consultaService.excluirConsulta(idParaExcluir).subscribe({
      next: () => {
        alert('Consulta desmarcada/excluída com sucesso!');
        this.carregarConsultas();
      },
      error: (err) => {
        console.error('Erro ao desmarcar consulta', err);
        alert('Falha ao desmarcar a consulta.');
      }
    });
    this.fecharModalDesmarcar();
  }

  isHoje(dataConsulta: string): boolean {
    const [dia, mes, ano] = dataConsulta.split('/').map(Number);
    const data = new Date(ano, mes - 1, dia);
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    return data.getTime() === hoje.getTime();
  }

  abrirTeams(consulta: any): void {
    const link = consulta.dadosOriginais.linkTeams;
    if (!link) {
      alert('Link para o Teams não disponível para esta consulta.');
      return;
    }
    window.open(link, '_blank', 'noopener,noreferrer');
  }
}
