import { Component, OnInit } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-perfil-medico',
  standalone: true,
  imports: [
    MenuComponent,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './perfil-medico.component.html',
  styleUrls: ['./perfil-medico.component.scss']
})
export class PerfilMedicoComponent implements OnInit {
  perfilForm: FormGroup;
  estados: string[] = ['Minas Gerais', 'São Paulo', 'Rio de Janeiro', 'Bahia', 'Paraná'];

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.perfilForm = this.fb.group({
      nome_completo: ['', Validators.required],
      uf: ['', Validators.required],
      municipio: ['', Validators.required],
      situacao: ['Ativo'],
      crm: ['', Validators.required],
      cpf: ['', Validators.required],
      rg: ['', Validators.required],
      sexo: ['Masculino'],
      especialidade: ['', Validators.required],
      valor_por_hora: [0, [Validators.required, Validators.min(0)]],
      formacao: ['', Validators.required],
      sobre: [''],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const userData = localStorage.getItem('usuarioLogado');
    if (userData) {
      const usuario = JSON.parse(userData);
      const medicoId = usuario.id || usuario.medicoId;

      this.http.get<any>(`https://localhost:7222/api/medicos/${medicoId}`).subscribe({
        next: (medico) => {
          this.perfilForm.patchValue({
            nome_completo: medico.nome_completo || '',
            uf: medico.uf || '',
            municipio: medico.municipio || '',
            situacao: medico.situacao || 'Ativo',
            crm: medico.crm || '',
            cpf: medico.cpf || '',
            rg: medico.rg || '',
            sexo: medico.sexo || 'Masculino',
            especialidade: medico.especialidade || '',
            valor_por_hora: medico.valor_por_hora || 0,
            formacao: medico.formacao || '',
            sobre: medico.sobre || '',
            email: medico.email || '',
            senha: medico.senha || ''
          });
        },
        error: (err) => {
          console.error('Erro ao buscar dados do médico:', err);
        }
      });
    }
  }

  onSubmit(): void {
    if (this.perfilForm.valid) {
      const medicoAtualizado = this.perfilForm.value;

      const userData = localStorage.getItem('usuarioLogado');
      if (userData) {
        const usuario = JSON.parse(userData);
        const medicoId = usuario.id || usuario.medicoId;

        this.http.put(`https://localhost:7222/api/medicos/${medicoId}`, medicoAtualizado)
          .subscribe({
            next: () => {
              alert('Dados atualizados com sucesso!');
            },
            error: err => {
              console.error('Erro ao atualizar dados:', err);
              alert('Erro ao atualizar dados!');
            }
          });
      }
    } else {
      alert('Preencha todos os campos obrigatórios!');
    }
  }


  onExcluir(): void {
    const confirmacao = confirm('Tem certeza que deseja excluir seu perfil?');

    if (confirmacao) {
      const userData = localStorage.getItem('usuarioLogado');

      if (userData) {
        const usuario = JSON.parse(userData);
        const medicoId = usuario.id || usuario.medicoId;

        this.http.delete(`https://localhost:7222/api/medicos/${medicoId}`)
          .subscribe({
            next: () => {
              alert('Perfil excluído com sucesso!');
              localStorage.removeItem('usuarioLogado');
              this.router.navigate(['/login']);
            },
            error: (err) => {
              console.error('Erro ao excluir o perfil:', err);
              alert('Erro ao excluir o perfil.');
            }
          });
      } else {
        alert('Usuário não encontrado no localStorage.');
      }
    }
  }

  onCancelar(): void {
    console.log('Edição cancelada!');
    this.perfilForm.reset();
  }
}

