import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { CarrinhoModel } from '../../models/CarrinhoModel';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cart$: Observable<CarrinhoModel>;

  constructor(private store: Store<CarrinhoModel>) { 
    // this.cart$ = store.pipe(select('cart'));
  }

  ngOnInit(): void {
  }

}
