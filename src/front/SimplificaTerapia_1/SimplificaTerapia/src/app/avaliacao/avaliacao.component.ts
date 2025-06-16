import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MenuComponent } from "../menu/menu.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-avaliacao',
  imports: [
    CommonModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatExpansionModule,
    MenuComponent,
    MatFormFieldModule,
    MatSelectModule,
    MatPaginatorModule,
    MatInputModule,
    MatTooltipModule,
    RouterModule,
    FormsModule
],
  templateUrl: './avaliacao.component.html',
  styleUrl: './avaliacao.component.scss'
})
export class AvaliacaoComponent {
  expanded = false;
  modalAvaliacaoVisivel = false;
  avaliacaoEstrelas: number = 0;
  comentarioAvaliacao: string = '';

  abrirModalAvaliacao(consulta: any) {
    this.modalAvaliacaoVisivel = true;
    this.avaliacaoEstrelas = 0;
    this.comentarioAvaliacao = '';
  }

  fecharModalAvaliacao() {
    this.modalAvaliacaoVisivel = false;
  }

  enviarAvaliacao() {
    const avaliacao = {
      estrelas: this.avaliacaoEstrelas,
      comentario: this.comentarioAvaliacao,
      //idConsulta: this.consultaSelecionada?.id,
    };

    this.modalAvaliacaoVisivel = false;
  }


  toggleExpanded(): void {
    this.expanded = !this.expanded;
  }

  avaliacoes = [
    {
      nome: "Arthur Castro Ribeiro Neves",
      email: "arthurcribeiron@gmail.com",
      crm: 5241869,
      cpf: "702.456.789.22",
      nota: 4.8,
      quantidadeAvaliacoes: 26,
      avaliacoesPacientes: [
        {
          nomePaciente: "Alan Ferreira de Souza",
          quantidadeEstrelas: 4,
          dataAvaliacao: "25/04/2025",
          comentario: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        },
        {
          nomePaciente: "Gabriel Araujo Alvarenga",
          quantidadeEstrelas: 5,
          dataAvaliacao: "31/05/2025",
          comentario: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        },
        {
          nomePaciente: "Claudia Gabriela de Paula",
          quantidadeEstrelas: 3,
          dataAvaliacao: "12/06/2025",
          comentario: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        },
        {
          nomePaciente: "Vitor Henrique dos Santos",
          quantidadeEstrelas: 5,
          dataAvaliacao: "21/06/2025",
          comentario: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        }
      ],
    },
    {
      nome: "Vitória Helena Gonçalves Mendes",
      email: "vitoriamendesh@gmail.com",
      crm: 5849632,
      cpf: "125.456.854.96",
      nota: 3.4,
      quantidadeAvaliacoes: 15,
      avaliacoesPacientes: [
        {
          nomePaciente: "Gabrielle Fernandes de Souza",
          quantidadeEstrelas: 4,
          dataAvaliacao: "01/03/2025",
          comentario: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        },
        {
          nomePaciente: "Junior Costa da Silva",
          quantidadeEstrelas: 2,
          dataAvaliacao: "21/04/2025",
          comentario: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        },
        {
          nomePaciente: "Danilo Henrique Mendes",
          quantidadeEstrelas: 3,
          dataAvaliacao: "13/05/2025",
          comentario: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        },
        {
          nomePaciente: "João Pedro Santos Cordeiro",
          quantidadeEstrelas: 5,
          dataAvaliacao: "21/06/2025",
          comentario: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        }
      ],
    }
  ]
}