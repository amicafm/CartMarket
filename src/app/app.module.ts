import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { carrinhoReducer } from './reducers/CarrinhoReducer';
import { ListaProdutosComponent } from './componentes/lista-produtos/lista-produtos.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { CarrinhoComprasComponent } from './componentes/carrinho-compras/carrinho-compras.component';
import { HomeComponent } from './componentes/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ListaProdutosComponent,
    NavbarComponent,
    CarrinhoComprasComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    HttpClientModule,
    StoreModule.forRoot({cart: carrinhoReducer}, {}),
    AppRoutingModule
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
