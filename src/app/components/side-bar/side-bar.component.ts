import { Component, EventEmitter, Output } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [NgClass, NgIf, RouterModule],
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  isOpen = true;

  @Output()
  sidebarStateChange = new EventEmitter<boolean>();

  ngOnInit(){
    const saved = localStorage.getItem('sideBar');
    if(saved === 'close'){
      this.isOpen = false;
    }
    this.sidebarStateChange .emit(this.isOpen)
  }

  toggleSidebarVisibility() {
    this.isOpen = !this.isOpen;
    localStorage.setItem('sideBar', this.isOpen ? 'open' : 'close')
    this.sidebarStateChange .emit(this.isOpen)

  }
}
