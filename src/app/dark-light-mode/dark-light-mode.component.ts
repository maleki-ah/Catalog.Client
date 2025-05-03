import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dark-light-mode',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dark-light-mode.component.html',
  styleUrl: './dark-light-mode.component.scss'
})
export class DarkLightModeComponent {
  isDarkMode: boolean = false;

  constructor(private renderer: Renderer2) { }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    const theme: string = this.isDarkMode ? 'dark' : 'light';
    this.renderer.setAttribute(document.body, 'data-bs-theme', theme);
  }

  get btnTitle(): string {
    return this.isDarkMode ? 'dark mode' : 'light mode';
  }

}
