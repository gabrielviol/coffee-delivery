import { useContext, useState } from "react";
import { UseCart } from "../../../../hooks/UseCart";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { CoffeeType } from "../../../../@types/coffees";

import { Badges, CoffeeItemActions, CoffeeItemContainer, Description, Title } from "./styles";

interface CoffeeItemProps {
  coffee: CoffeeType
}

export function CoffeeItem({ coffee }: CoffeeItemProps) {
  
  const cart = useContext(UseCart);

  return (
    <CoffeeItemContainer>
      <img src={`./images/coffees/${coffee.image}.svg`} alt={coffee.title} />

      <Badges>
        <span>
          {coffee.label}
        </span>
      </Badges>

      <Title>
        {coffee.title}
      </Title>

      <Description>
        {coffee.description}
      </Description>

      <CoffeeItemActions>
        <span>
          R$
          <strong>
            {coffee.price.toFixed(2)}
          </strong>
        </span>
      </CoffeeItemActions>

    </CoffeeItemContainer>
  )
}