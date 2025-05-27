import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MenuComponent } from '../menu/menu.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-realizar-pagamento',
  imports: [
    CommonModule,
    MatRadioModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MenuComponent,
    FormsModule
  ],
  templateUrl: './realizar-pagamento.component.html',
  styleUrl: './realizar-pagamento.component.scss'
})
export class RealizarPagamentoComponent {
  selectedPayment: string | null = 'pix'; 

  selectPayment(paymentMethod: string) {
    this.selectedPayment = paymentMethod;
  }
}
