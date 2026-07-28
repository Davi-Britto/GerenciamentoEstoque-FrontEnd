  import { Routes } from '@angular/router';
  import { LoginComponent } from './pages/auth/login/login.component';
  import { CadastroComponent } from './pages/auth/cadastro/cadastro.component';
  import { MainLayoutComponent } from './components/main-layout/main-layout.component';
  import { ProdutoComponent } from './pages/produto/produto.component';
  import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
  import { CategoriaComponent } from './pages/categoria/categoria.component';
  import { DashboardComponent } from './pages/dashboard/dashboard.component';
  import { MovimentacaoComponent } from './pages/movimentacao/movimentacao.component';
  import { VendaComponent } from './pages/venda/venda.component';
import { DespesaComponent } from './pages/despesa/despesa.component';

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
        { path: 'venda', component: VendaComponent, data: { title: 'Venda' } },
        { path: 'despesa', component: DespesaComponent, data: { title: 'Despesa' } },
        { path: 'movimentacao', component: MovimentacaoComponent, data: { title: 'Movimentação' } },
        { path: 'produto', component: ProdutoComponent, data: { title: 'Produtos' } },
        { path: 'categoria', component: CategoriaComponent, data: { title: 'Categorias' } },
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
      ]
    },

    { path: '', redirectTo: 'auth/login', pathMatch: 'full' }
  ];