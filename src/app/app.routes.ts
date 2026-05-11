import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { CadastroComponent } from './pages/auth/cadastro/cadastro.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GerenciamentoComponent } from './pages/gerenciamento/gerenciamento.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'cadastro', component: CadastroComponent }
    ]
  },

  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' } },
      { path: 'gerenciar', component: GerenciamentoComponent, data: { title: 'Gerenciar' } },
      { path: 'produto', component: ProdutoComponent, data: { title: 'Produtos' } },
      { path: 'categoria', component: CategoriaComponent, data: { title: 'Categorias' } },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },

  { path: '', redirectTo: 'auth/login', pathMatch: 'full' }
];