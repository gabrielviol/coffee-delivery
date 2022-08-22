import { Address } from "./components/Address";
import { Payment } from "./components/Address/Payment";
import { Summary } from "./components/Summary";

import {
  CheckoutContainer,
  LeftContainer,
  RightContainer
} from "./styles";

export const Checkout = () => {
  return (
    <CheckoutContainer>
      <LeftContainer>
          <Address />
          <Payment />
      </LeftContainer>

      <RightContainer>
        <Summary />
      </RightContainer>
    </CheckoutContainer>
  );
}