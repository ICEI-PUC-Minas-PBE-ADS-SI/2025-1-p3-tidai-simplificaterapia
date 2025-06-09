import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet, 
    MenuComponent,
    RouterModule,
    CommonModule
  ],
  template: `
    <app-menu></app-menu>
    <router-outlet></router-outlet>
  `,
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
