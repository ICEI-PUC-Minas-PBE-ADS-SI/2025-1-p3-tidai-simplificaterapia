import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MenuComponent } from '../menu/menu.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MedicoService } from '../services/medico.service';
import { Medico } from '../models/medico';

@Component({
  selector: 'app-terapeutas',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MenuComponent,
    FormsModule,
    RouterModule
  ],
  templateUrl: './terapeutas.component.html',
  styleUrl: './terapeutas.component.scss'
})
export class TerapeutasComponent implements OnInit {
  estados = ['MG', 'SP', 'RJ', 'RS'];
  sexos = ['Masculino', 'Feminino', 'Outro'];
  medicos: Medico[] = [];
  filtroNome: string = '';
  filtroUf: string = '';
  filtroSexo: string = '';
  filtroEspecialidade: string = '';
  filtroValor: string = '';

  constructor(private medicoService: MedicoService) { }

  ngOnInit(): void {
    this.carregarMedicos();
  }

  carregarMedicos(): void {
    this.medicoService.getMedicos(
      this.filtroNome,
      this.filtroUf,
      this.filtroSexo,
      this.filtroEspecialidade,
      this.filtroValor
    ).subscribe({
      next: (dados) => this.medicos = dados,
      error: (err) => console.error('Erro ao carregar médicos', err)
    });
  }

  buscarPorNome(): void {
    this.carregarMedicos();
  }

  limparFiltros(): void {
    this.filtroNome = '';
    this.filtroUf = '';
    this.filtroSexo = '';
    this.filtroEspecialidade = '';
    this.filtroValor = '';
    this.carregarMedicos();
  }
}

