import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BasicSyntaxComponent } from './basic-syntax/basic-syntax.component';
import { OtherSyntaxComponent } from './other-syntax/other-syntax.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { TemplateControllerFormComponent } from './template-controller-form/template-controller-form.component';
import { FormControlComponent } from './form-control/form-control.component';
import { FormControlAdvancedComponent } from './form-control-advanced/form-control-advanced.component';
import { FormControlValidationComponent } from './form-control-validation/form-control-validation.component';
import { ProfileManagerComponent } from './profile-manager/profile-manager.component';
import { DarkLightModeComponent } from './dark-light-mode/dark-light-mode.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule,
    BasicSyntaxComponent, OtherSyntaxComponent,
    TemplateFormComponent, TemplateControllerFormComponent,
    FormControlComponent, FormControlAdvancedComponent,
    FormControlValidationComponent, ProfileManagerComponent,
    DarkLightModeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
