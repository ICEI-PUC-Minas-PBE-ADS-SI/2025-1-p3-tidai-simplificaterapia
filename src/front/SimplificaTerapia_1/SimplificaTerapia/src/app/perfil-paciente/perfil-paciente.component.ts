import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MenuComponent } from "../menu/menu.component";

@Component({
  selector: 'app-perfil-paciente',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MenuComponent],
  templateUrl: './perfil-paciente.component.html',
  styleUrl: './perfil-paciente.component.scss'
})
export class PerfilPacienteComponent {
  perfilForm: FormGroup;

  ufs: string[] = ['São Paulo', 'Minas Gerais', 'Rio de Janeiro', 'Bahia', 'Paraná'];
  municipios: string[] = ['São Paulo', 'Campinas', 'Santos', 'Ribeirão Preto'];
  sexos: string[] = ['Masculino', 'Feminino', 'Outro'];
  situacoes: string[] = ['Ativo', 'Inativo'];

  constructor(private fb: FormBuilder) {
    this.perfilForm = this.fb.group({
      nomeCompleto: ['', Validators.required],
      uf: ['', Validators.required],
      municipio: ['', Validators.required],
      situacao: ['Ativo'],
      dataNascimento: ['', Validators.required],
      cpf: ['', Validators.required],
      rg: ['', Validators.required],
      sexo: ['Masculino', Validators.required],
      cartaoSUS: ['', Validators.required],
      responsavel: [''],
      telefone: ['', Validators.required],
      contatoResponsavel: [''],
      sobre: [''],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.perfilForm.valid) {
      console.log('Dados salvos:', this.perfilForm.value);
    }
  }

  onExcluir(): void {
    if (confirm('Tem certeza que deseja excluir seu perfil?')) {
      console.log('Perfil excluído!');
    }
  }

  onCancelar(): void {
    this.perfilForm.reset();
    console.log('Edição cancelada!');
  }
}
