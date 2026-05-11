import { Component, Input } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from "@angular/router";
import { NgClass } from '@angular/common';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [SideBarComponent, RouterModule, NgClass],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

  title = '';

  isDark = false;
  isSideBarOpen = true

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      this.isDark = true;
      document.body.classList.add('dark');
    }

    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(() => {
        this.updateTitle();
      });

    // 🔥 pega título também no primeiro carregamento
    this.updateTitle();
  }

  private updateTitle() {
    let route = this.route;

    while (route.firstChild) {
      route = route.firstChild;
    }

    while (route && !route.snapshot.data?.['title'] && route.parent) {
      route = route.parent;
    }

    this.title = route.snapshot.data?.['title'] ?? '';
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
