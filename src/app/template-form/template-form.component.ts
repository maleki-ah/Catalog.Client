import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.scss'
})
export class TemplateFormComponent {
  data: string = '';
  save(data: string) {
    console.log(data);
    this.data = data;
  }

  saveElement(dataElement: HTMLInputElement) {
    console.log(dataElement.value);
    this.data = dataElement.value;
  }
}
