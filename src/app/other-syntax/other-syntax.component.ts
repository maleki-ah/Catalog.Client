import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-other-syntax',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './other-syntax.component.html',
  styleUrl: './other-syntax.component.scss'
})
export class OtherSyntaxComponent {
  show: boolean = true;
  text: string = 'Hide';
  items: Array<string> = ['item1', 'item2', 'item3'];

  toggle() {
    this.show = !this.show;

    this.text = this.show ? 'Hide' : 'Show';
  }
}
