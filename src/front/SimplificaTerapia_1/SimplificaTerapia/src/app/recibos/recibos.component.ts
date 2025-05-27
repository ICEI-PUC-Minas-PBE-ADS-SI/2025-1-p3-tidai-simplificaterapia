import { Component } from '@angular/core';
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
  selector: 'app-recibos',
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
  templateUrl: './recibos.component.html',
  styleUrl: './recibos.component.scss'
})
export class RecibosComponent {
  recibos = [
    {
      titulo: 'Recibo em Aberto',
      dataPagamento: '24/05/2025',
      valor: '130,00',
      formaPagamento: 'Pix',
      descricao: 'Consulta psicológica online - 1 hora'
    },
    {
      titulo: 'Recibo em Aberto',
      dataPagamento: '24/05/2025',
      valor: '130,00',
      formaPagamento: 'Pix',
      descricao: 'Consulta psicológica online - 1 hora'
    },
    {
      titulo: 'Recibo em Aberto',
      dataPagamento: '24/05/2025',
      valor: '130,00',
      formaPagamento: 'Pix',
      descricao: 'Consulta psicológica online - 1 hora'
    },
    {
      titulo: 'Recibo em Aberto',
      dataPagamento: '24/05/2025',
      valor: '130,00',
      formaPagamento: 'Pix',
      descricao: 'Consulta psicológica online - 1 hora'
    }
  ];
  
  // Modais

  // Revogar

  modalVisivel = false;
  reciboSelecionado: any = null;

  constructor() {}

  ngOnInit(): void {}

  fecharModal() {
    this.modalVisivel = false;
    this.reciboSelecionado = null;
  }

  // Imprimir

  modalImpressaoVisivel = false;
  formatoSelecionado: string = 'pdf';

  abrirModalImpressao(recibo: any) {
    this.reciboSelecionado = recibo;
    this.modalImpressaoVisivel = true;
  }

  fecharModalImpressao() {
    this.modalImpressaoVisivel = false;
    this.reciboSelecionado = null;
  }

  confirmarImpressao() {
    console.log("Imprimindo:", this.reciboSelecionado, "Formato:", this.formatoSelecionado);
    this.modalImpressaoVisivel = false;
  }

  // Baixar

  modalBaixarVisivel = false;
  formatoEscolhido: string = 'pdf';

  abrirModalBaixar(recibo: any) {
    this.reciboSelecionado = recibo;
    this.modalBaixarVisivel = true;
  }

  fecharModalBaixar() { 
  this.modalBaixarVisivel = false;
  this.reciboSelecionado = null;
  }

  confirmarBaixar() {
    console.log("Imprimindo:", this.reciboSelecionado, "Formato:", this.formatoEscolhido);
    this.modalBaixarVisivel = false;
  }

  // Receita médica

  modalVisualizacaoVisivel = false;
  imagemRecibo = "assets/images/recibos.png";
  zoom = 1;

  abrirModalVisualizacao(recibo: any) {
    this.reciboSelecionado = recibo;
    this.modalVisualizacaoVisivel = true;
    this.zoom = 1;
  }

  fecharModalVisualizacao() {
    this.modalVisualizacaoVisivel = false;
    this.reciboSelecionado = null;
  }

  aumentarZoom() {
    this.zoom += 0.1;
  }

  diminuirZoom() {
    this.zoom = Math.max(0.1, this.zoom - 0.1);
  }
}
