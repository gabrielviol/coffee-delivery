import { Minus, Plus, Trash } from "phosphor-react";
import { useContext, useState } from "react";
import { formatPrice } from '../../../../util/format';
import { UpdateCartItem, useCart } from "../../../../hooks/useCart";

import {
  CoffeeItemContainer,
  Icon,
  Summary,
  Price,
  SummaryOptions,
  InputNumber,
  RemoveButton,
  ButtonIncrement,
  ButtonDecrement
} from "./styles";

export function CoffeeSummaryItem() {

  const { items, removeItem, updatedAmount } = useContext(useCart);
  const [amount, setAmount] = useState(1);

  const itemFormatted = items.map(product => ({
    ...product,
    priceFormatted: formatPrice(product.price),
    subTotal: formatPrice(product.price * product.amount)
  }))

  function handleRemoveItem(item: UpdateCartItem){
    removeItem(item)
  }

  function handleIncrementItem(item: UpdateCartItem){
    updatedAmount({...item, id: item.id, amount: item.amount + 1});
  }

  function handleDecrementItem(item: UpdateCartItem){  
    updatedAmount({...item, id: item.id, amount: item.amount - 1});
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
            <ButtonDecrement onClick={() => handleDecrementItem(item)} type="button">
              <Minus />
            </ButtonDecrement>

            <input
              type="number"
              min="1"
              max="50"
              step="1"
              value={item.amount}
              onChange={() => { }}
            />

            <ButtonIncrement onClick={() => handleIncrementItem(item)} type="button">
              <Plus />
            </ButtonIncrement>
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