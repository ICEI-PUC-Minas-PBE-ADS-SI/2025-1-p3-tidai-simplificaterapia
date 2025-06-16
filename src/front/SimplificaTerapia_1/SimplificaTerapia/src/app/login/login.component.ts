import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LoginStateService } from '../login-state.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatTooltipModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  tipoSelecionado: string = 'paciente';
  mostrarErro: boolean = false;

  constructor(
    private fb: FormBuilder,
    private loginState: LoginStateService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Email: ['', [Validators.required, Validators.email]],
      Senha: ['', Validators.required]
    });
  }

  isChecked(tipo: string): boolean {
    return this.tipoSelecionado === tipo;
  }

  selecionarTipo(tipo: string): void {
    this.tipoSelecionado = tipo;
  }

  onSubmit(): void {
    if (this.loginForm.invalid) return;

    const { Email, Senha } = this.loginForm.value;

    this.http.post<any>('https://localhost:7222/api/auth/login', {
      email: Email,
      senha: Senha,
      tipo: this.tipoSelecionado
    }).subscribe({
      next: (res) => {
        localStorage.setItem('usuarioLogado', JSON.stringify(res));
        this.loginState.logado = true;

        this.router.navigate(['/']);
      },
      error: (err) => {
        this.mostrarErro = true;
        setTimeout(() => this.mostrarErro = false, 5000);
      }
    });
  }
}
