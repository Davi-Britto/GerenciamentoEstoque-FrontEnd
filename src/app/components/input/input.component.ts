import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() type:string = "text"
  @Input() placeholder:string = "";
  @Input() valorJaSelecionado: number | null = null;

  @Output()
  valorDigitado = new EventEmitter<any>();

  onInput(event: Event){
    const valorDigitado = (event.target as HTMLInputElement).value;
    this.valorDigitado.emit(valorDigitado);
  }
}
