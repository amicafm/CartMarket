import { ActionTypes } from '../actions/ActionTypes';
import { ActionModel } from '../models/ActionModel';
import { CarrinhoModel } from '../models/CarrinhoModel';
import { ProdutoModel } from '../models/ProdutoModel';

export const cart = new CarrinhoModel();

export function carrinhoReducer(state = cart, action: ActionModel) {
    switch (action.type) {
        case ActionTypes.Add:
            {
                state.produtos.push(action.payload);
                state.total = calcularTotal(state.produtos);

                console.log(state);
                return state;
            };

        case ActionTypes.Remove:
            {
                const index = state.produtos.indexOf(action.payload);
                state.produtos.splice(index, 1);
                state.total = calcularTotal(state.produtos);

                console.log(state);
                return state;
            };

        case ActionTypes.Clear:
            {
                state = new CarrinhoModel();
                state.total = calcularTotal(state.produtos);

                console.log(state);
                return state;
            }

        default:
            return state;
    }


}

function calcularTotal(produtos: ProdutoModel[]): number {
    let total: number = 0;
    produtos.forEach(produto => {
        total += produto.preco;
    });
    return total;
}