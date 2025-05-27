import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from '../menu/menu.component'; 

@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet, 
    MenuComponent
  ],
  template: `
    <app-menu></app-menu>
    <router-outlet></router-outlet>
  `,
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}

