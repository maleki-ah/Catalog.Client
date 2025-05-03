import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-controller-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-controller-form.component.html',
  styleUrl: './template-controller-form.component.scss'
})
export class TemplateControllerFormComponent {
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
