import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil-medico',
  imports: [
    MenuComponent,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './perfil-medico.component.html',
  styleUrl: './perfil-medico.component.scss'
})
export class PerfilMedicoComponent {
  perfilForm: FormGroup;
  estados: string[] = ['Minas Gerais', 'São Paulo', 'Rio de Janeiro', 'Bahia', 'Paraná'];

  constructor(private fb: FormBuilder) {
    this.perfilForm = this.fb.group({
      nomeCompleto: ['', Validators.required],
      uf: ['', Validators.required],
      municipio: ['', Validators.required],
      situacao: ['Ativo'],
      crm: ['', Validators.required],
      cpf: ['', Validators.required],
      rg: ['', Validators.required],
      sexo: ['Masculino'],
      especialidade: ['', Validators.required],
      valorHora: [0, [Validators.required, Validators.min(0)]],
      formacao: ['', Validators.required],
      sobre: [''],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.perfilForm.valid) {
      console.log('Dados salvos:', this.perfilForm.value);
      // Aqui pode chamar um serviço para salvar os dados no backend.
    }
  }

  onExcluir(): void {
    const confirmacao = confirm('Tem certeza que deseja excluir seu perfil?');
    if (confirmacao) {
      console.log('Perfil excluído!');
      // Aqui pode chamar um serviço de exclusão.
    }
  }

  onCancelar(): void {
    console.log('Edição cancelada!');
    // Pode navegar para outra rota ou resetar o formulário.
    this.perfilForm.reset();
  }
}
