import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { ChangeDetectionStrategy } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-agendar-consulta',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MenuComponent,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatTimepickerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    FormsModule,
    RouterModule
],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './agendar-consulta.component.html',
  styleUrl: './agendar-consulta.component.scss'
})
export class AgendarConsultaComponent {
  duracoes = [
    { value: 30, viewValue: '30 minutos' },
    { value: 60, viewValue: '60 minutos' },
    { value: 90, viewValue: '90 minutos' },
    { value: 120, viewValue: '120 minutos' },
  ];

  situacoes = [
    { value: 1, viewValue: 'Agendada' }
  ];

  tiposAtendimento = [
    { value: 0, viewValue: 'Primeira Consulta' },
    { value: 1, viewValue: 'Rotina' }
  ];

  formasPagamento = [
    { value: 0, viewValue: 'Pix' },
    { value: 1, viewValue: 'Cartão de Crédito' },
    { value: 2, viewValue: 'Cartão de Débito' },
    { value: 3, viewValue: 'Boleto Bancário' }
  ];
}
