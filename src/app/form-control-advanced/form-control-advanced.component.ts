import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-control-advanced',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-control-advanced.component.html',
  styleUrl: './form-control-advanced.component.scss'
})
export class FormControlAdvancedComponent {
  firstName: string = '';
  lastName: string = '';

  isSaved: boolean = false;


  saveForm(profileForm: NgForm) {
    console.log(profileForm.value);
    this.isSaved = true;
  }

  newProfile() {
    this.isSaved = false;
    this.firstName = '';
    this.lastName = '';
  }
}
