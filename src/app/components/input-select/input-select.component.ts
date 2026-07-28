import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-select.component.html',
  styleUrl: './input-select.component.css'
})
export class InputSelectComponent {

  @Input()
  itens: any[] = [];

  @Input()
  valorJaSelecionado: any = null;

  @Input()
  placeHolder = "";

  @Input()
  labelKey = "";
  
  @Input()
  valueKey = "";

  @Output()
  valorSelecionado = new EventEmitter<string>();

  @Input()
  disabled: boolean = false;

  onChange(event : Event){
    const idDoItemSelecionado = (event.target as HTMLSelectElement).value;

    this.valorSelecionado.emit(idDoItemSelecionado);
  }
}
