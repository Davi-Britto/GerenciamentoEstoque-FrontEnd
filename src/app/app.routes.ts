import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { CadastroComponent } from './pages/auth/cadastro/cadastro.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'cadastro', component: CadastroComponent},
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];
