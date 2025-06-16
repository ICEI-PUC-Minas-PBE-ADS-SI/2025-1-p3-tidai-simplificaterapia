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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-laudos',
  standalone: true,
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
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './laudos.component.html',
  styleUrls: ['./laudos.component.scss'],
})
export class LaudosComponent implements OnInit {
  revogarr: boolean = false;
  Imprimir: boolean = false;
  Baixar: boolean = false;

  laudos = [
    {
      codigo: 1,
      clinica: 'Simplifica Terapia',
      endereco: 'Rua da Saúde, 123 - Centro',
      email: 'contato@simplificaterapia.com',
      telefone: '(31) 1234-5678',
      cidade: 'Betim',
      data: '08 de junho de 2025',
      paciente: 'João da Silva',
      produto: 'Paracetamol 500mg',
      quantidade: '20 comprimidos',
      modoUso: 'Tomar 1 comprimido a cada 6 horas.',
      medico: 'Dra. Ana Beatriz',
      crm: '123456/MG',
      cpf: '123.456.789-00',
      tipo: 'médico',
      dataVencimento: '20/06/2025',
      dataEmissao: '25/04/2025',
    },
    {
      codigo: 2,
      simplificaterapia: 'Simplifica Terapia',
      endereco: 'Rua da Saúde, 123 - Centro',
      email: 'contato@simplificaterapia.com',
      telefone: '(31) 1234-5678',
      cidade: 'Betim',
      data: '08 de junho de 2025',
      paciente: 'Mariany Karla',
      produto: 'Paracetamol 500mg',
      quantidade: '20 comprimidos',
      modoUso: 'Tomar 1 comprimido a cada 6 horas.',
      medico: 'Dra. Ana Beatriz',
      crm: '123456/MG',
      cpf: '123.456.789-00',
      tipo: 'médico',
      dataVencimento: '20/06/2025',
      dataEmissao: '25/04/2025',
    },
    {
      codigo: 3,
      clinica: 'Simplifica Terapia',
      endereco: 'Rua da Saúde, 123 - Centro',
      email: 'contato@clinica.com',
      telefone: '(31) 1234-5678',
      cidade: 'Betim',
      data: '08 de junho de 2025',
      paciente: 'Maria Eduarda',
      produto: 'Paracetamol 500mg',
      quantidade: '20 comprimidos',
      modoUso: 'Tomar 1 comprimido a cada 6 horas.',
      medico: 'Dra. Ana Beatriz',
      crm: '123456/MG',
      cpf: '123.456.789-00',
      tipo: 'médico',
      dataVencimento: '20/06/2025',
      dataEmissao: '25/04/2025',
    },
  ];

  // Modais

  // Revogar

  modalVisivel = false;
  laudoSelecionado: any = null;

  constructor() {}

  ngOnInit(): void {}

  revogar(laudo: any) {
    this.laudoSelecionado = laudo;
    this.modalVisivel = true;
  }

  fecharModal() {
    this.modalVisivel = false;
    this.laudoSelecionado = null;
  }

  confirmarRevogacao() {
    console.log('Revogando:', this.laudoSelecionado);
    this.modalVisivel = false;
    this.revogarr = true;
    setTimeout(() => {
      this.revogarr = false;
    }, 5000);
  }

  // Imprimir

  modalImpressaoVisivel = false;
  formatoSelecionado: string = 'pdf';

  abrirModalImpressao(laudo: any) {
    this.laudoSelecionado = laudo;
    this.modalImpressaoVisivel = true;
  }

  fecharModalImpressao() {
    this.modalImpressaoVisivel = false;
    this.laudoSelecionado = null;
  }

  confirmarImpressao() {
    console.log(
      'Imprimindo:',
      this.laudoSelecionado,
      'Formato:',
      this.formatoSelecionado
    );
    this.modalImpressaoVisivel = false;
    this.Imprimir = true;
    setTimeout(() => {
      this.Imprimir = false;
    }, 5000);
  }

  // Baixar

  modalBaixarVisivel = false;
  formatoEscolhido: string = 'pdf';

  abrirModalBaixar(laudo: any) {
    this.laudoSelecionado = laudo;
    this.modalBaixarVisivel = true;
  }

  fecharModalBaixar() {
    this.modalBaixarVisivel = false;
    this.laudoSelecionado = null;
  }

  confirmarBaixar() {
    console.log(
      'Imprimindo:',
      this.laudoSelecionado,
      'Formato:',
      this.formatoEscolhido
    );
    this.modalBaixarVisivel = false;
    this.Baixar = true;
    setTimeout(() => {
      this.Baixar = false;
    }, 5000);
  }

  // Receita médica

  modalVisualizacaoVisivel = false;
  imagemReceita = 'assets/images/receita_medica.png';

  abrirModalVisualizacao(laudo: any) {
    this.laudoSelecionado = laudo;
    this.modalVisualizacaoVisivel = true;
  }

  fecharModalVisualizacao() {
    this.modalVisualizacaoVisivel = false;
  }

  modalNovoLaudoVisivel = false;

  novoLaudo = {
    medico: '',
    crm: '',
    paciente: '',
    dataEmissao: '',
    dataVencimento: '',
    tipo: '',
    medicamentos: '',
  };

  abrirModalNovoLaudo() {
    this.modalNovoLaudoVisivel = true;
    this.novoLaudo = {
      medico: '',
      crm: '',
      paciente: '',
      dataEmissao: '',
      dataVencimento: '',
      tipo: '',
      medicamentos: '',
    };
  }

  fecharModalNovoLaudo() {
    this.modalNovoLaudoVisivel = false;
  }

  confirmarNovoLaudo() {
    const formatarData = (data: any) => {
      if (!data) return '';
      return new Date(data).toLocaleDateString('pt-BR');
    };
    const novo = {
      ...this.novoLaudo,
      codigo: this.laudos.length + 1,
      clinica: 'Simplifica Terapia',
      endereco: 'Rua da Saúde, 123 - Centro',
      email: 'contato@simplificaterapia.com',
      telefone: '(31) 1234-5678',
      cidade: 'Betim',
      data: new Date().toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
      produto: 'Produto Exemplo',
      quantidade: '10 unidades',
      modoUso: 'Usar conforme orientação médica',
      cpf: '000.000.000-00',
      dataEmissao: formatarData(this.novoLaudo.dataEmissao),
      dataVencimento: formatarData(this.novoLaudo.dataVencimento),
    };

    this.laudos.unshift(novo);
    this.modalNovoLaudoVisivel = false;
  }
}
