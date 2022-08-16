import { Minus, Plus, Trash } from "phosphor-react";
import { useContext } from "react";
import { formatPrice } from '../../../../util/format';
import { useCart } from "../../../../hooks/useCart";
import { CoffeeItemProps } from "../../../Home/components/CoffeeItem";

import {
  CoffeeItemContainer,
  Icon,
  Summary,
  Price,
  SummaryOptions,
  InputNumber,
  ButtonDecrease,
  ButtonIncrease,
  RemoveButton
} from "./styles";

export function CoffeeSummaryItem() {

  const { items } = useContext(useCart);

  const itemFormatted = items.map(product => ({
    ...product,
    priceFormatted: formatPrice(product.price),
    subTotal: formatPrice(product.price * product.amount)
  }))

  return (
    <>
      {itemFormatted.map(item => (
        <CoffeeItemContainer key={item.id}>
        <Icon >
        <img src={`./images/${item.image}.svg`} alt="Coffee" />
      </Icon>
      <Summary>
        <p>{item.title}</p>
        <SummaryOptions>

          <InputNumber>
            <ButtonDecrease type="button">
              <Minus />
            </ButtonDecrease>

            <input
              type="number"
              min="1"
              max="100"
              step="1"
              value={item.amount}
              onChange={() => { }}
            />

            <ButtonIncrease type="button">
              <Plus />
            </ButtonIncrease>
          </InputNumber>

          <RemoveButton>
            <Trash />
            Remover
          </RemoveButton>
        </SummaryOptions>
      </Summary>
      <Price>
        {item.subTotal}
      </Price>
      </CoffeeItemContainer>
      ))}
    </>
  );
}