import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { CadastroComponent } from './pages/auth/cadastro/cadastro.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'sidebar', component: SideBarComponent},
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full' },
];
