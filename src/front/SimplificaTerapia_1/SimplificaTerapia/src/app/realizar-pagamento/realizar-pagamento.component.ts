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
  standalone: true,
  imports: [
    CommonModule,
    MatRadioModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MenuComponent,
    FormsModule,
  ],
  templateUrl: './realizar-pagamento.component.html',
  styleUrl: './realizar-pagamento.component.scss',
})
export class RealizarPagamentoComponent {
  selectedPayment: string | null = 'pix';

  mostrarPixQRCode: boolean = false;
  codigoPix: string =
    '00020126360014BR.GOV.BCB.PIX0114+5581999999995204000053039865405120.005802BR5925SIMPLIFICA TERAPIA6009MINAS GERAIS62070503***6304ABCD';

  boletoSucesso: boolean = false;

  numeroCartao: string = '';
  nomeCartao: string = '';
  mesValidade: string = '';
  anoValidade: string = '';
  cvv: string = '';
  parcelamento: string = '';

  meses: string[] = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];
  anos: string[] = ['2025', '2026', '2027', '2028', '2029'];

  selectPayment(paymentMethod: string) {
    this.selectedPayment = paymentMethod;
  }

  mensagemErro: string | null = null;
  mensagemSucesso: string | null = null;

  fecharModal() {
    this.mensagemErro = null;
    this.mensagemSucesso = null;
  }

  confirmarPagamento() {
    if (this.selectedPayment === 'credit_card') {
      if (this.numeroCartao.length < 16) {
        this.mensagemErro = 'Número do cartão inválido. Digite os 16 números.';
        return;
      }

      if (this.cvv.length < 3) {
        this.mensagemErro =
          'CVV inválido. Digite os 3 números do código de segurança.';
        return;
      }

      if (
        !this.nomeCartao ||
        !this.mesValidade ||
        !this.anoValidade ||
        !this.parcelamento
      ) {
        this.mensagemErro = 'Por favor, preencha todos os campos obrigatórios.';
        return;
      }

      this.mensagemSucesso = 'Pagamento com cartão confirmado com sucesso!';
    } else if (this.selectedPayment === 'pix') {
      this.mostrarPixQRCode = true;
    } else if (this.selectedPayment === 'boleto') {
      this.boletoSucesso = true;
    }
  }

  fecharModalBoleto() {
    this.boletoSucesso = false;
  }

  copiarCodigoPix() {
    navigator.clipboard.writeText(this.codigoPix).then(() => {
      this.mensagemSucesso = 'Código Pix copiado para a área de transferência!';
    });
  }

  imprimirBoleto() {
    const boletoHTML = `
  <html>
    <head>
      <title>Boleto Bancário</title>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          margin: 20px;
          color: #000;
        }
        .boleto-container {
          width: 600px;
          border: 1px solid #000;
          padding: 15px;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }
        .header h2 {
          margin: 0;
          font-size: 18px;
        }
        .linha-digitavel {
          font-family: monospace;
          font-size: 16px;
          letter-spacing: 3px;
          background-color: #eee;
          padding: 8px;
          margin: 10px 0;
          border: 1px solid #ccc;
          user-select: all;
        }
        .dados-boleto p {
          margin: 5px 0;
          font-size: 14px;
        }
        .codigo-barras {
          margin-top: 15px;
          text-align: center;
        }
        .codigo-barras img {
          width: 100%;
          max-width: 400px;
          height: 60px;
        }
        .footer {
          font-size: 12px;
          margin-top: 20px;
          text-align: center;
          color: #666;
        }
      </style>
    </head>
    <body>
      <div class="boleto-container">
        <div class="header">
          <h2>Boleto Bancário</h2>
          <div><strong>Data de emissão:</strong> 15/06/2025</div>
        </div>
        
        <div class="linha-digitavel">
          23790.12345 12345.678901 23456.789012 3 12340000011000
        </div>
        
        <div class="dados-boleto">
          <p><strong>Valor:</strong> R$ 110,00 à vista</p>
          <p><strong>Vencimento:</strong> 25/04/2025</p>
          <p><strong>Banco:</strong> Banco Exemplo - 237</p>
          <p><strong>Agência/Código do Beneficiário:</strong> 1234 / 5678901</p>
          <p><strong>Nosso Número:</strong> 1234.5678.9012.3456</p>
          <p><strong>Pagador:</strong> João da Silva</p>
          <p><strong>CPF/CNPJ:</strong> 123.456.789-00</p>
        </div>
        
        <div class="codigo-barras">
          <img src="https://barcode.tec-it.com/barcode.ashx?data=2379012345123451234567890123456789012312340000011000&code=Code128&dpi=96" alt="Código de Barras do Boleto" />
        </div>

        <div class="footer">
          <p>Este boleto é uma representação simplificada para demonstração.</p>
        </div>
      </div>
    </body>
  </html>
  `;

    const printWindow = window.open('', '', 'width=700,height=500');
    if (printWindow) {
      printWindow.document.write(boletoHTML);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
      printWindow.close();
    }
  }
}
