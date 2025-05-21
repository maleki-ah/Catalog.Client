import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-syntax',
  standalone: true,
  imports: [],
  templateUrl: './basic-syntax.component.html',
  styleUrls: ['./basic-syntax.component.scss']
})

export class BasicSyntaxComponent {
  title = 'Catalog.Client';
  btnTitle: string = 'Catalog.Client';
  txtValue: string = 'Sample Data';

  firstName: string = 'Amirhossein';
  lastName: string = 'Maleki';

  foreColor: string = 'blue';
  bgColor: string = 'green';

  get fullName(): string {
    return this.firstName + ' ' + this.lastName;
  }

  ok() {
    console.log('OK ...');
    this.title = 'New Title';
  }

  cancel() {
    console.log('Cancel ...');
    this.txtValue = 'After Canceling';
  }
}
