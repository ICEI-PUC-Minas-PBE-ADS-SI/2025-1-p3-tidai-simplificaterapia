import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LoginStateService } from '../login-state.service';

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
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!: FormGroup;
  tipoSelecionado: string = 'paciente';  
  mostrarAlerta: boolean = false;

  constructor(
    private fb: FormBuilder,
    private loginState: LoginStateService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.mostrarAlerta = true;  
    setTimeout(() => {
      this.mostrarAlerta = false;
    }, 5000);
    
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  onSubmit(): void {
    this.loginState.logado = true;
    this.router.navigate(['/']);
  }

  isChecked(tipo: string): boolean {
    return this.tipoSelecionado === tipo;
  }

  selecionarTipo(tipo: string): void {
    this.tipoSelecionado = tipo;
  }
}
