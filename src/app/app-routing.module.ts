import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { CarrinhoComprasComponent } from './componentes/carrinho-compras/carrinho-compras.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'carrinho', component: CarrinhoComprasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }