//? Core Angular
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//? Custom Components
//#region Basic Project
//! import { BasicSyntaxComponent } from './basic-syntax/basic-syntax.component';
//! import { OtherSyntaxComponent } from './other-syntax/other-syntax.component';
//! import { TemplateFormComponent } from './template-form/template-form.component';
//! import { TemplateControllerFormComponent } from './template-controller-form/template-controller-form.component';
//! import { FormControlComponent } from './form-control/form-control.component';
//! import { FormControlAdvancedComponent } from './form-control-advanced/form-control-advanced.component';
//! import { FormControlValidationComponent } from './form-control-validation/form-control-validation.component';
//! import { ProfileManagerComponent } from './profile-manager/profile-manager.component';
//! import { DarkLightModeComponent } from './dark-light-mode/dark-light-mode.component';
//#endregion

//? Material Components
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

//? App Components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,

  //#region Basic Project
  //! imports: [CommonModule, FormsModule,
  //!   BasicSyntaxComponent, OtherSyntaxComponent,
  //!   TemplateFormComponent, TemplateControllerFormComponent,
  //!   FormControlComponent, FormControlAdvancedComponent,
  //!   FormControlValidationComponent, ProfileManagerComponent,
  //!   DarkLightModeComponent],
  //#endregion

  imports: [CommonModule, FormsModule, RouterModule,
    //? Material Modules
    MatToolbarModule, MatIconModule, MatTableModule,
    HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title: any;
}
