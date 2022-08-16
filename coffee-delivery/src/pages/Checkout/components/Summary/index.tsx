import { useContext } from "react";
import { UpdateCartItem, useCart } from "../../../../hooks/useCart";

import { CoffeeItemProps } from "../../../Home/components/CoffeeItem";
import { CoffeeSummaryItem } from "../CoffeSummaryItem";

import {
    SummaryContainer,
    SummaryContent,
    SummaryTotal
  } from "./styles";
  
  
  export function Summary({ coffee } : CoffeeItemProps){


    return (
      <SummaryContainer>
        <h1>Cafés selecionados</h1>
  
       <SummaryContent>
        
          <CoffeeSummaryItem  />
        
  
          <SummaryTotal>
            <div>
              <p>Total de Itens</p>
              <span>R$ 29,70</span>
            </div>
  
            <div>
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </div>
  
            <div>
              <h2>Total</h2>
              <h2>R$ 33,20</h2>
            </div>
  
            <button type="button">Confirmar Pedido</button>
          </SummaryTotal>
  
       </SummaryContent>
  
       
      </SummaryContainer>
    );
  }
  