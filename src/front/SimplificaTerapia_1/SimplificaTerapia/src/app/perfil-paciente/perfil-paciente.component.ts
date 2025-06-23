import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MenuComponent } from "../menu/menu.component";
import { PacienteService } from '../services/paciente.service';
import { Paciente } from '../models/paciente';

@Component({
  selector: 'app-perfil-paciente',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MenuComponent],
  templateUrl: './perfil-paciente.component.html',
  styleUrls: ['./perfil-paciente.component.scss']
})
export class PerfilPacienteComponent implements OnInit {
  perfilForm: FormGroup;

  private pacienteId!: number;
  private pacienteOriginal!: Paciente;

  ufs: string[] = ['BA', 'MG', 'RJ', 'RS', 'SC', 'SP'];
  municipios: string[] = [];
  sexos: string[] = ['Feminino', 'Masculino', 'Outro', 'Prefiro não informar'];
  situacoes: string[] = ['Ativo', 'Inativo'];

  constructor(
    private fb: FormBuilder,
    private pacienteService: PacienteService
  ) {
    this.perfilForm = this.fb.group({
      nomeCompleto: ['', Validators.required],
      uf: ['', Validators.required],
      municipio: ['', Validators.required],
      situacao: ['Ativo'],
      dataNascimento: ['', Validators.required],
      cpf: [{ value: '', disabled: true }, Validators.required],
      rg: [''],
      sexo: ['Feminino', Validators.required],
      cartaoSUS: [''],
      telefone: ['', Validators.required],
      responsavel: [''],
      contatoResponsavel: [''],
      sobre: [''],
      email: ['', [Validators.required, Validators.email]],
      senha: ['']
    });
  }

  ngOnInit(): void {
    this.carregarDadosDoPaciente();
  }

  carregarDadosDoPaciente(): void {
    const idString = localStorage.getItem('userId');
    if (!idString) {
      alert('ID do paciente não encontrado. Faça o login novamente.');
      return;
    }

    this.pacienteId = parseInt(idString, 10);

    this.pacienteService.getPaciente(this.pacienteId).subscribe({
      next: (paciente) => {
        this.pacienteOriginal = paciente;

        const dataFormatada = paciente.data_nascimento
          ? new Date(paciente.data_nascimento).toISOString().split('T')[0]
          : '';

        this.perfilForm.patchValue({
          nomeCompleto: paciente.nome_completo,
          uf: paciente.uf,
          municipio: paciente.municipio,
          situacao: paciente.situacao,
          dataNascimento: dataFormatada,
          cpf: paciente.cpf,
          rg: paciente.rg,
          sexo: paciente.sexo,
          cartaoSUS: paciente.num_cartao_sus,
          telefone: paciente.telefone,
          responsavel: paciente.responsavel,
          contatoResponsavel: paciente.contato_responsavel,
          sobre: paciente.sobre,
          email: paciente.email
        });

        this.municipios = [paciente.municipio];
      },
      error: (err) => console.error('Erro ao carregar dados do paciente:', err)
    });
  }

  onSubmit(): void {
    if (this.perfilForm.invalid) {
      alert('Formulário inválido. Verifique os campos.');
      return;
    }

    if (!this.pacienteOriginal) {
      alert('Dados originais do paciente não foram carregados. Não é possível salvar.');
      return;
    }

    const dadosFormulario = this.perfilForm.getRawValue();

    const dadosParaAtualizar: Paciente = {
      ...this.pacienteOriginal,
      nome_completo: dadosFormulario.nomeCompleto,
      uf: dadosFormulario.uf,
      municipio: dadosFormulario.municipio,
      situacao: dadosFormulario.situacao,
      data_nascimento: dadosFormulario.dataNascimento,
      sexo: dadosFormulario.sexo,
      num_cartao_sus: dadosFormulario.cartaoSUS,
      telefone: dadosFormulario.telefone,
      responsavel: dadosFormulario.responsavel,
      contato_responsavel: dadosFormulario.contatoResponsavel,
      sobre: dadosFormulario.sobre,
      email: dadosFormulario.email,
      senha: dadosFormulario.senha ? dadosFormulario.senha : this.pacienteOriginal.senha
    };

    console.log('Enviando objeto ATUALIZADO para a API:', dadosParaAtualizar);

    this.pacienteService.atualizarPaciente(this.pacienteId, dadosParaAtualizar).subscribe({
      next: () => {
        alert('Perfil atualizado com sucesso!');
      },
      error: (err) => {
        console.error('Erro ao atualizar perfil:', err);
        alert('Ocorreu um erro ao salvar as alterações.');
      }
    });
  }

  onExcluir(): void {
    if (confirm('Tem certeza que deseja excluir seu perfil? Esta ação não pode ser desfeita.')) {
      this.pacienteService.excluirPaciente(this.pacienteId).subscribe({
        next: () => {
          alert('Perfil excluído com sucesso.');
        },
        error: (err) => alert('Erro ao excluir o perfil.')
      });
    }
  }

  onCancelar(): void {
    this.carregarDadosDoPaciente();
    alert('Alterações canceladas!');
  }
}
