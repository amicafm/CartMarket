import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Add } from '../../actions/ActionTypes';
import { DataService } from '../../services/dataService';
import { CarrinhoModel } from '../../models/CarrinhoModel';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {
  public produtos: any[] = null;

  constructor(
    private store: Store<CarrinhoModel>,
    private toastCtrl: ToastController,
    private service: DataService,
  ) { }

  ngOnInit(): void {
    this.service
    .getProdutos()
    .subscribe((data) => {
        this.produtos = data;
    });
  }

  async add(produto) {
    this.store.dispatch(Add(produto));
    const toast = await this.toastCtrl.create({
    message: `${produto.title} adicionado ao carrinho`,
    duration: 2000,
    buttons: [
      {
        text: 'OK',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
    });
    toast.present();
}

}
