import { ProdutoModel } from './ProdutoModel';

export class CarrinhoModel {
    public produtos: ProdutoModel[] = [];
    public total: number = 0;
}