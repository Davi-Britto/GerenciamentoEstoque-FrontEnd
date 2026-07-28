import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  @Input()
  title: string = "";

  @Input()
  aberto: boolean = false;

  @Output()
  fechar = new EventEmitter<boolean>();

  fecharModal(){
    this.fechar.emit()
    console.log("FECHOU")
  }
}
