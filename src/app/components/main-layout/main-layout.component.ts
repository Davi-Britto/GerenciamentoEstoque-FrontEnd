import { Component, Input } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { RouterModule } from "@angular/router";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [SideBarComponent, RouterModule, NgClass],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

  @Input()
  title: string = "";

  isDark = false;
  isSideBarOpen = true

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDark = true;
      document.body.classList.add('dark');
    }
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    document.body.classList.toggle('dark', this.isDark);
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
  }

  onSideBarToggle(isOpen: boolean) {
    this.isSideBarOpen = isOpen;
    window.dispatchEvent(new Event('resize'));
  }
}
