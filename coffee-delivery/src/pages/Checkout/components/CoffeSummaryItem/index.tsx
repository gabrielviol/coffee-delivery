import { Minus, Plus , Trash} from "phosphor-react";

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
  return (
    <CoffeeItemContainer>
      <Icon>
        <img src={`./images/coffees/expresso-tradicional.svg`} alt="Coffee" />
      </Icon>
      <Summary>
        <p>Expresso Tradicional</p>
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
        R$ 9,90
      </Price>
    </CoffeeItemContainer>
  );
}