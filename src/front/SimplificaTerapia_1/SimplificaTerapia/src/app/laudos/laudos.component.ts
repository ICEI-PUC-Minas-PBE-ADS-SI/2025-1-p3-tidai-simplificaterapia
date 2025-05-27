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
      MatNativeDateModule 
    ],
  templateUrl: './laudos.component.html',
  styleUrl: './laudos.component.scss'
})

export class LaudosComponent implements OnInit {

  revogarr: boolean = false;
  Imprimir: boolean = false;
  Baixar: boolean = false;

  laudos = [
    {
      codigo: '00256891',
      medico: 'Vitória Mendes Souza',
      crm: '5241869',
      dataEmissao: '23/05/2025',
      dataVencimento: '29/05/2025',
      tipo: 'Receita Médica'
    },
    {
      codigo: '00854891',
      medico: 'Gabriel Araujo Alvarenga',
      crm: '9586869',
      dataEmissao: '26/04/2025',
      dataVencimento: '31/04/2025',
      tipo: 'Laudo Médico'
    },
    {
      codigo: '00854891',
      medico: 'Gabriel Araujo Alvarenga',
      crm: '9586869',
      dataEmissao: '15/01/2025',
      dataVencimento: '21/01/2025',
      tipo: 'Receita Médica'
    }
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
    console.log("Revogando:", this.laudoSelecionado);
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
    console.log("Imprimindo:", this.laudoSelecionado, "Formato:", this.formatoSelecionado);
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
    console.log("Imprimindo:", this.laudoSelecionado, "Formato:", this.formatoEscolhido);
    this.modalBaixarVisivel = false;
    this.Baixar = true;  
    setTimeout(() => {
      this.Baixar = false;
    }, 5000);
  }

  // Receita médica

  modalVisualizacaoVisivel = false;
  imagemReceita = "assets/images/receita_medica.png";
  zoom = 1;

  abrirModalVisualizacao(laudo: any) {
    this.laudoSelecionado = laudo;
    this.modalVisualizacaoVisivel = true;
    this.zoom = 1;
  }

  fecharModalVisualizacao() {
    this.modalVisualizacaoVisivel = false;
    this.laudoSelecionado = null;
  }

  aumentarZoom() {
    this.zoom += 0.1;
  }

  diminuirZoom() {
    this.zoom = Math.max(0.1, this.zoom - 0.1);
  }
}

