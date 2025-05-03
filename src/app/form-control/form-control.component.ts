import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.scss'
})
export class FormControlComponent {
  firstName: string = '';
  lastName: string = '';

  save() {
    console.log(`FirstName: ${this.firstName}`);
    console.log(`LastName: ${this.lastName}`);
  }

  saveForm(profileForm: HTMLFormElement) {
    console.log(profileForm);
  }

  saveFormAngular(profileForm: NgForm) {
    console.log(profileForm.value);
  }
}
