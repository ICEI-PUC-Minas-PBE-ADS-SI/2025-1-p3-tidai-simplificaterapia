import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertaComponent } from '../alerta/alerta.component';
import { HttpClientModule } from '@angular/common/http';
import { MedicoService } from '../services/medico.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule, HttpClientModule
  ],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent {
  cadastroForm: FormGroup;
  imagemPreview: string | ArrayBuffer | null = null;

  @ViewChild('alerta') alerta!: AlertaComponent;
  mensagemAlerta: string = 'Cadastro Realizado com sucesso!';

  constructor(private fb: FormBuilder, private medicoService: MedicoService) {
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
      return;
    }

    const dadosCadastro = this.cadastroForm.value;

    if (dadosCadastro.senha !== dadosCadastro.confirmarSenha) {
      this.mensagemAlerta = 'As senhas não coincidem!';
      this.alerta.exibir();
      return;
    }

    const novoMedico = {
      nome_completo: dadosCadastro.nome,
      uf: dadosCadastro.uf,
      municipio: dadosCadastro.municipio,
      situacao: dadosCadastro.situacao,
      crm: dadosCadastro.crm,
      cpf: dadosCadastro.cpf,
      rg: '', // Você pode adicionar um campo se quiser
      sexo: dadosCadastro.sexo,
      especialidade: dadosCadastro.especialidade,
      valor_por_hora: parseFloat(dadosCadastro.valorHora),
      formacao: dadosCadastro.formacao,
      sobre: dadosCadastro.sobre,
      email: dadosCadastro.email,
      senha: dadosCadastro.senha,
    };

    this.medicoService.addMedico(novoMedico).subscribe({
      next: () => {
        this.mensagemAlerta = 'Cadastro realizado com sucesso!';
        this.alerta.exibir();
        this.cadastroForm.reset();
      },
      error: (err) => {
        console.error('Erro ao cadastrar médico:', err);
        this.mensagemAlerta = 'Erro ao cadastrar médico.';
        this.alerta.exibir();
      }
    });
  }


    isChecked(tipo: string): boolean {
      return tipo === 'paciente'
        ? this.cadastroForm.get('tipoPaciente')?.value
        : this.cadastroForm.get('tipoMedico')?.value;
    }

    selecionarTipo(tipo: string): void {
      if(tipo === 'paciente') {
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
