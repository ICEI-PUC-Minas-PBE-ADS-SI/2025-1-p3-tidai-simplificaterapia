import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertaComponent } from '../alerta/alerta.component';

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
export class CadastroComponent {
  cadastroForm: FormGroup;
  imagemPreview: string | ArrayBuffer | null = null;

  @ViewChild('alerta') alerta!: AlertaComponent;
  mensagemAlerta: string = 'Cadastro Realizado com sucesso!';

  constructor(private fb: FormBuilder) {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      uf: ['', Validators.required],
      municipio: ['', Validators.required],
      situacao: ['Ativo', Validators.required],
      usuario: ['', Validators.required],
      crm: ['', Validators.required],
      cpf: ['', Validators.required],
      sexo: ['Feminino', Validators.required],
      especialidade: ['', Validators.required],
      valorHora: ['', Validators.required],
      formacao: ['', Validators.required],
      sobre: [''],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      confirmarSenha: ['', Validators.required],
      tipoPaciente: [true],
      tipoMedico: [false],
      imagem: [null],
    });
  }

  onSubmit(): void {
    if (this.cadastroForm.invalid) {
      this.cadastroForm.markAllAsTouched();
      console.log('Formulário inválido');
      return;
    }

    const dadosCadastro = this.cadastroForm.value;

    if (dadosCadastro.senha !== dadosCadastro.confirmarSenha) {
      console.error('As senhas não coincidem');
      this.mensagemAlerta = 'As senhas não coincidem!';
      this.alerta.exibir();
      return;
    }

    console.log('Cadastro enviado com sucesso:', dadosCadastro);
    this.mensagemAlerta = 'Cadastro realizado com sucesso!';
    this.alerta.exibir();
  }

  isChecked(tipo: string): boolean {
    return tipo === 'paciente'
      ? this.cadastroForm.get('tipoPaciente')?.value
      : this.cadastroForm.get('tipoMedico')?.value;
  }

  selecionarTipo(tipo: string): void {
    if (tipo === 'paciente') {
      this.cadastroForm.patchValue({ tipoPaciente: true, tipoMedico: false });
    } else {
      this.cadastroForm.patchValue({ tipoPaciente: false, tipoMedico: true });
    }
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
