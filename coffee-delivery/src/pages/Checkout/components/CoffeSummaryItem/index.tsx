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


  return (
    <>
      {items.map(item => (
        <CoffeeItemContainer>
        <Icon key={item.id}>
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
              value="1"
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
        {item.price}
      </Price>
      </CoffeeItemContainer>
      ))}
    </>
  );
}