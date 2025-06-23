import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Imports do Angular Material para o formulário
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-editar-consulta',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
  ],
  templateUrl: './editar-consulta.component.html',
  styleUrls: ['./editar-consulta.component.scss']
})
export class EditarConsultaComponent implements OnInit {
  // 1. Recebe a consulta selecionada do componente pai
  @Input() consultaParaEditar: any;

  // 2. Cria eventos para se comunicar com o componente pai
  @Output() fechar = new EventEmitter<void>();
  @Output() salvar = new EventEmitter<any>();

  editForm!: FormGroup; // Nosso formulário de edição

  // Arrays para os selects do formulário
  situacoes = ['Agendada', 'Finalizada', 'Cancelada'];
  tiposAtendimento = ['Presencial', 'Online'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // 3. Cria a estrutura do formulário
    this.editForm = this.fb.group({
      data_consulta: ['', Validators.required],
      horario: ['', Validators.required],
      duracao: [''],
      situacao: ['', Validators.required],
      tipo_atendimento: [''],
      observacoes: ['']
    });

    // 4. Preenche o formulário com os dados da consulta recebida
    if (this.consultaParaEditar && this.consultaParaEditar.dadosOriginais) {
      const dados = this.consultaParaEditar.dadosOriginais;
      this.editForm.patchValue({
        data_consulta: new Date(dados.data_consulta), // Converte a string para um objeto Date
        horario: dados.horario,
        duracao: dados.duracao.toString(),
        situacao: dados.situacao,
        tipo_atendimento: dados.tipo_atendimento,
        observacoes: dados.observacoes
      });
    }
  }

  // 5. Função chamada quando o formulário é enviado
  salvarEdicao(): void {
    if (this.editForm.invalid) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Pega os dados originais e atualiza com os valores do formulário
    const dadosAtualizados = {
      ...this.consultaParaEditar.dadosOriginais,
      ...this.editForm.value
    };

    // Emite o evento 'salvar' com os dados atualizados para o componente pai
    this.salvar.emit(dadosAtualizados);
  }

  // 6. Função chamada para fechar o modal
  fecharModal(): void {
    // Apenas emite o evento 'fechar'
    this.fechar.emit();
  }
}