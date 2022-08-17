import { Minus, Plus, Trash } from "phosphor-react";
import { useContext } from "react";
import { formatPrice } from '../../../../util/format';
import { UpdateCartItem, useCart } from "../../../../hooks/useCart";
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

  const { items, removeItem } = useContext(useCart);

  const itemFormatted = items.map(product => ({
    ...product,
    priceFormatted: formatPrice(product.price),
    subTotal: formatPrice(product.price * product.amount)
  }))

  function handleRemoveItem(itemId: UpdateCartItem){
    removeItem(itemId)
  }

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

          <RemoveButton onClick={() => handleRemoveItem(item)} >
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