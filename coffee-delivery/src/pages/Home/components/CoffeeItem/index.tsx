import { useContext, useState } from "react";
import { useCart } from "../../../../hooks/useCart";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { CoffeeType } from "../../../../coffees";

import { 
    Badges, 
    ButtonDecrement, 
    ButtonIncrement, 
    CartButton, 
    CoffeeItemActions, 
    CoffeeItemContainer, 
    Description, 
    InputNumber, 
    Title 
  } from "./styles";

interface CoffeeItemProps {
  coffee: CoffeeType
}

export function CoffeeItem({ coffee }: CoffeeItemProps) {
  
  const cart = useContext(useCart);
  const [amount, setAmount] = useState(1);

  function handleIncrementAmount(){
    setAmount(state => state + 1);
  }

  function handleDecrementAmount(){
    if(amount > 1) setAmount(state => state - 1);    
  }

  function handleAddToCart(){
    cart.addItem({
      id: coffee.id,
      amount
    });
    setAmount(1)
  }
  


  return (
    <CoffeeItemContainer>
      <img src={`./images/${coffee.image}.svg`} alt={coffee.title} />

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

        <InputNumber>
          <ButtonDecrement type="button" onClick={handleDecrementAmount}>
            <Minus size={15}/>
          </ButtonDecrement>

          <input 
            type="number"
            min="1"
            max="50"
            step="1"
            value={amount}
            onChange={() => {}}
          />

          <ButtonIncrement type="button" onClick={handleIncrementAmount}>
            <Plus size={15} />
          </ButtonIncrement>
        </InputNumber>

        <CartButton type="button" onClick={handleAddToCart}>
          <ShoppingCart weight="fill" />
        </CartButton>
      </CoffeeItemActions>
    </CoffeeItemContainer>
  )
}