import { useContext } from "react";
import { UpdateCartItem, useCart } from "../../../../hooks/useCart";
import { formatPrice } from "../../../../util/format";

import { CoffeeItemProps } from "../../../Home/components/CoffeeItem";
import { CoffeeSummaryItem } from "../CoffeSummaryItem";

import {
  SummaryContainer,
  SummaryContent,
  SummaryTotal
} from "./styles";


export function Summary() {
  
  const { items } = useContext(useCart);

  const totalItens =
      items.reduce((sumTotal, product) => {
        return sumTotal + product.price * product.amount
      }, 0)

    const frete = 3.5

    const total = frete + totalItens


  return (
    <SummaryContainer>
      <h1>Cafés selecionados</h1>

      <SummaryContent>

        <CoffeeSummaryItem />

        <SummaryTotal >
            <div>
              <p>Total de Itens</p>
              <span>{formatPrice(totalItens)}</span>
            </div>

            <div>
              <p>Entrega</p>
              <span>{formatPrice(frete)}</span>
            </div>

            <div>
              <h2>Total</h2>
              <h2>{formatPrice(total)}</h2>
            </div>

            <button type="button">Confirmar Pedido</button>

          </SummaryTotal>
      </SummaryContent>
    </SummaryContainer>
  );
}
