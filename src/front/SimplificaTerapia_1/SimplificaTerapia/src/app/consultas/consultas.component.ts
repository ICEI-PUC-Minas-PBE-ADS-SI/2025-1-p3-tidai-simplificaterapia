import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChangeDetectionStrategy } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTimepickerModule } from '@angular/material/timepicker';

@Component({
  selector: 'app-consultas',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MenuComponent,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatTimepickerModule,
    MatDatepickerModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './consultas.component.html',
  styleUrl: './consultas.component.scss',
})
export class ConsultasComponent implements OnInit {
  marcada: boolean = false;
  editada: boolean = false;
  desmarcada: boolean = false;
  consultas = [
    {
      data: '11/06/2025',
      medico: 'Vitor Schmidt Ribeiro',
      horario: '14:00',
      duracao: '60 min',
      situacao: 'Agendada',
      formaPagamento: 'Pix',
      valor: 'R$120,00',
      linkTeams: 'https://teams.microsoft.com/l/meetup-join/abc123...',
    },
    {
      data: '12/04/2025',
      medico: 'Gabriel Araujo Alvarenga',
      horario: '15:30',
      duracao: '30 min',
      situacao: 'Agendada',
      valor: 'R$120,00',
      formaPagamento: 'Cartão',
      linkTeams: 'https://teams.microsoft.com/l/meetup-join/abc123...',
    },
    {
      data: '23/04/2025',
      medico: 'Vânia Lourenço Gonçalves',
      duracao: '120 min',
      situacao: 'Finalizada',
      valor: 'R$120,00',
      formaPagamento: 'Cartão',
      horario: '17:30',
      tipoAtendimento: 'Retorno',
    },
    {
      data: '16/05/2025',
      medico: 'Maria Eduarda Ferreira Reais',
      duracao: '30 min',
      situacao: 'Finalizada',
      valor: 'R$60,00',
      formaPagamento: 'Pix',
      horario: '08:30',
      tipoAtendimento: 'Retorno',
    },
    {
      data: '27/04/2025',
      medico: 'Mariany Karla Abranches de Melo',
      duracao: '120 min',
      situacao: 'Finalizada',
      valor: 'R$120,00',
      formaPagamento: 'Boleto',
      horario: '10:30',
      tipoAtendimento: 'Primeira consulta',
    },
  ];

  consultaSelecionada: any = {
    data: '09/05/2025',
    horario: '15:30',
    duracao: '30 min',
    situacao: 'Finalizada',
    tipoAtendimento: 'Consulta',
    formaPagamento: 'Pix',
    planoSaude: false,
    profissional: 'Gabriel Araujo Alvarenga',
    crm: '00859970',
    especialidade: 'Terapeuta',
    valorConsulta: 'R$ 60,00',
    contatoMedico: '(31) 3595-4142',
    paciente: 'Maria Eduarda Ferreira de Souza',
    contatoPaciente: '(38) 98645-2293',
    observacoes: 'Consulta de rotina',
  };

  duracoes = [
    { value: '30', viewValue: '30 minutos' },
    { value: '60', viewValue: '1 hora' },
    { value: '90', viewValue: '1 hora e 30 minutos' },
  ];

  situacoes = [
    { value: 'agendada', viewValue: 'Agendada' },
    { value: 'cancelada', viewValue: 'Cancelada' },
    { value: 'realizada', viewValue: 'Realizada' },
  ];

  tiposAtendimento = [
    { value: 'presencial', viewValue: 'Presencial' },
    { value: 'online', viewValue: 'Online' },
  ];

  formasPagamento = [
    { value: 'boleto', viewValue: 'Boleto' },
    { value: 'cartao', viewValue: 'Cartão' },
    { value: 'pix', viewValue: 'PIX' },
  ];

  // Modais

  modalDetalhesVisivel = false;
  consulta: any = {};

  verDetalhes(dadosConsulta: any) {
    this.consultaSelecionada = { ...dadosConsulta };
    this.consulta = {
      ...dadosConsulta,
      valorConsulta: dadosConsulta.valor, // mapeia 'valor' para 'valorConsulta'
      horario: dadosConsulta.horario || 'Indisponível', // caso não tenha horário
      formaPagamento: dadosConsulta.formaPagamento || 'Não informada',
      tiposAtendimento: dadosConsulta.tipoAtendimento || 'Não informada'
    };
    this.modalDetalhesVisivel = true;
  }

  fecharModalEditar() {
    this.modalDetalhesVisivel = false;
  }

  // Desmarcar

  modalDesmarcarConsultaVisivel = false;

  constructor() {}

  ngOnInit(): void {}

  desmarcar(consulta: any) {
    this.consultaSelecionada = consulta;
    this.modalDesmarcarConsultaVisivel = true;
  }

  fecharModalDesmarcar() {
    this.modalDesmarcarConsultaVisivel = false;
    this.consultaSelecionada = null;
  }

  confirmarDesmarcamento() {
    console.log('Cancelando:', this.consultaSelecionada);
    this.modalDesmarcarConsultaVisivel = false;
    this.desmarcada = true;
    this.marcada = true;
    setTimeout(() => {
      this.marcada = false;
    }, 5000);
  }

  // Editar

  modalEditarConsultaVisivel = false;
  formatoSelecionado: string = 'pdf';

  editarConsulta(consulta: any) {
    this.consultaSelecionada = consulta;
    this.modalEditarConsultaVisivel = true;
  }

  fecharModalDetalhes() {
    this.modalEditarConsultaVisivel = false;
    this.modalDetalhesVisivel = false;
    this.consultaSelecionada = null;
  }

  confirmarEdicao() {
    console.log(
      'Imprimindo:',
      this.consultaSelecionada,
      'Formato:',
      this.formatoSelecionado
    );
    this.modalEditarConsultaVisivel = false;

    this.editada = true;
    setTimeout(() => {
      this.editada = false;
    }, 5000);
  }

  abrirTeams(consulta: any) {
    if (!consulta.linkTeams) {
      alert('Teams não está disponível para esta consulta.');
      return;
    }
    window.open(consulta.linkTeams, '_blank', 'noopener,noreferrer');
  }

  isHoje(dataConsulta: string): boolean {
    const [dia, mes, ano] = dataConsulta.split('/').map(Number);
    const data = new Date(ano, mes - 1, dia);

    const hoje = new Date();

    return (
      data.getDate() === hoje.getDate() &&
      data.getMonth() === hoje.getMonth() &&
      data.getFullYear() === hoje.getFullYear()
    );
  }
}