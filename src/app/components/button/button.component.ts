import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  @Input()
  icon: string = "";

  @Input()
  textButton: string = "";

  @Input()
  variant: 'primary' | 'secondary' = 'primary';

  @Input() 
  disabled: boolean = false;
}
