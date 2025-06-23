import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MedicoService } from '../services/medico.service';
import { PacienteService } from '../services/paciente.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  cadastroForm!: FormGroup;
  imagemPreview: string | ArrayBuffer | null = null;
  tipoUsuarioSelecionado: 'paciente' | 'medico' = 'paciente';

  constructor(
    private fb: FormBuilder,
    private medicoService: MedicoService,
    private pacienteService: PacienteService
  ) {}

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  inicializarFormulario(): void {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      uf: ['', Validators.required],
      municipio: ['', Validators.required],
      cpf: ['', Validators.required],
      sexo: ['Feminino', Validators.required],
      sobre: [''],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmarSenha: ['', Validators.required],
      imagem: [null],
    });
    this.atualizarCamposPorTipo('paciente');
  }

  selecionarTipo(tipo: 'paciente' | 'medico'): void {
    if (this.tipoUsuarioSelecionado !== tipo) {
      this.tipoUsuarioSelecionado = tipo;
      this.atualizarCamposPorTipo(tipo);
    }
  }

  isChecked(tipo: string): boolean {
    return this.tipoUsuarioSelecionado === tipo;
  }

  private atualizarCamposPorTipo(tipo: 'paciente' | 'medico'): void {
    const medicoControls = ['crm', 'especialidade', 'valorHora', 'formacao', 'situacao'];
    const pacienteControls = ['rg', 'data_nascimento'];

    if (tipo === 'paciente') {
      medicoControls.forEach(ctrl => this.cadastroForm.removeControl(ctrl));
      this.cadastroForm.addControl('rg', new FormControl(''));
      this.cadastroForm.addControl('data_nascimento', new FormControl('', Validators.required));
    } else {
      pacienteControls.forEach(ctrl => this.cadastroForm.removeControl(ctrl));
      this.cadastroForm.addControl('crm', new FormControl('', Validators.required));
      this.cadastroForm.addControl('especialidade', new FormControl('', Validators.required));
      this.cadastroForm.addControl('valorHora', new FormControl('', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]));
      this.cadastroForm.addControl('formacao', new FormControl('', Validators.required));
      this.cadastroForm.addControl('situacao', new FormControl('Ativo', Validators.required));
    }
  }

  onSubmit(): void {
    if (this.cadastroForm.invalid) {
      this.cadastroForm.markAllAsTouched();
      alert('Por favor, preencha todos os campos obrigatórios (*).');
      return;
    }

    const dados = this.cadastroForm.value;
    if (dados.senha !== dados.confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    if (this.tipoUsuarioSelecionado === 'paciente') {
      this.cadastrarPaciente(dados);
    } else {
      this.cadastrarMedico(dados);
    }
  }

  private cadastrarPaciente(dados: any): void {
    const novoPaciente = {
      nome_completo: dados.nome,
      uf: dados.uf,
      municipio: dados.municipio,
      situacao: 'Ativo',
      data_nascimento: dados.data_nascimento,
      cpf: dados.cpf,
      rg: dados.rg,
      sexo: dados.sexo,
      sobre: dados.sobre,
      email: dados.email,
      senha: dados.senha
    };

    this.pacienteService.adicionarPaciente(novoPaciente).subscribe({
      next: () => {
        alert('Paciente cadastrado com sucesso!');
        this.cadastroForm.reset();
        this.selecionarTipo('paciente');
      },
      error: (err) => {
        console.error('Erro ao cadastrar paciente:', err);
        alert('Ocorreu um erro ao cadastrar o paciente.');
      }
    });
  }

  private cadastrarMedico(dados: any): void {
    const novoMedico = {
      nome_completo: dados.nome,
      uf: dados.uf,
      municipio: dados.municipio,
      situacao: dados.situacao,
      crm: dados.crm,
      cpf: dados.cpf,
      sexo: dados.sexo,
      especialidade: dados.especialidade,
      valor_por_hora: parseFloat(dados.valorHora),
      formacao: dados.formacao,
      sobre: dados.sobre,
      email: dados.email,
      senha: dados.senha,
    };

    this.medicoService.addMedico(novoMedico).subscribe({
      next: () => {
        alert('Médico cadastrado com sucesso!');
        this.cadastroForm.reset();
        this.selecionarTipo('paciente');
      },
      error: (err) => {
        console.error('Erro ao cadastrar médico:', err);
        alert('Ocorreu um erro ao cadastrar o médico.');
      }
    });
  }

  onImagemSelecionada(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagemPreview = reader.result;
        this.cadastroForm.patchValue({ imagem: reader.result });
      };
      reader.readAsDataURL(file);
    }
  }
}
