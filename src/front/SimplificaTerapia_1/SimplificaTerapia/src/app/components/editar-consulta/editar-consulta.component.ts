import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
  @Input() consultaParaEditar: any;

  @Output() fechar = new EventEmitter<void>();
  @Output() salvar = new EventEmitter<any>();

  editForm!: FormGroup;

  duracoes = [
    { value: '30', viewValue: '30 minutos' },
    { value: '60', viewValue: '1 hora' },
    { value: '90', viewValue: '1 hora e 30 minutos' },
    { value: '120', viewValue: '2 horas' }
  ];
  situacoes = ['Agendada', 'Finalizada', 'Cancelada'];
  tiposAtendimento = ['Presencial', 'Online'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.editForm = this.fb.group({
      data_consulta: ['', Validators.required],
      horario: ['', Validators.required],
      duracao: [''],
      situacao: ['', Validators.required],
      tipo_atendimento: [''],
      observacoes: ['']
    });

    if (this.consultaParaEditar && this.consultaParaEditar.dadosOriginais) {
      const dados = this.consultaParaEditar.dadosOriginais;
      this.editForm.patchValue({
        data_consulta: new Date(dados.data_consulta),
        horario: dados.horario,
        duracao: dados.duracao ? dados.duracao.toString(): '',
        situacao: dados.situacao,
        tipo_atendimento: dados.tipo_atendimento,
        observacoes: dados.observacoes
      });
    }
  }

  salvarEdicao(): void {
    if (this.editForm.invalid) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const dadosAtualizados = {
      ...this.consultaParaEditar.dadosOriginais,
      ...this.editForm.value
    };

    this.salvar.emit(dadosAtualizados);
  }

  fecharModal(): void {
    this.fechar.emit();
  }
}
