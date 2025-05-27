import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerta',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './alerta.component.html',
  styleUrl: './alerta.component.scss'
})
export class AlertaComponent {
  @Input() texto: string = '';
  mostrar: boolean = false;

  ngOnInit(): void {}

  exibir(): void {
    this.mostrar = true;

    setTimeout(() => {
      this.mostrar = false;
    }, 5000);
  }
}
