import {
    CreditCard,
    Bank,
    Money
  } from 'phosphor-react';
  
  import {
    PaymentContainer,
    PaymentOptions
  } from "./styles";
  
  export function Payment(){
    return (
      <PaymentContainer>
          <p>Pagamento</p>
          <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
  
        <PaymentOptions >
          <button type="button">
            <CreditCard />
            Cartão de Crédito
          </button>
  
          <button type="button">
            <Bank />
            Cartão de Débito
          </button>
  
          <button type="button">
            <Money />
            Dinheiro
          </button>
        </PaymentOptions>
      </PaymentContainer>
    );
  }