import { Address } from "./components/Address";

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
      </RightContainer>
    </CheckoutContainer>
  );
}