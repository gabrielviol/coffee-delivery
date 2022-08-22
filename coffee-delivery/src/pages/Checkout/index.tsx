import { Address } from "./components/Address";
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
      </LeftContainer>

      <RightContainer>
        <Summary />
      </RightContainer>
    </CheckoutContainer>
  );
}