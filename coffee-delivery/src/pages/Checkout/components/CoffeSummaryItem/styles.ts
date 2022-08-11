import styled from "styled-components";

export const CoffeeItemContainer = styled.div`
  height: 100px;
  display: flex;
  flex: 1;
  padding: 1rem 0;
  border-bottom: 1px solid ${props => props.theme.grey_500};
`

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 4.5rem;
  }
`;

export const Summary = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  gap:  0.5rem;
  padding: 0 1.5rem;
  font-size: 0.875rem;
  color: ${props => props.theme.grey_800};
 `;

export const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 700;
 `;

export const SummaryOptions = styled.div`
  display: flex;
  gap: 0.5rem;
 `

export const InputNumber = styled.div`
  input {
    border: none;
    text-align: center;
    outline: none;
    background-color: ${props => props.theme.grey_400};
    color: ${props => props.theme.purple_700};
    pointer-events:none;
    height: 100%;
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
}
`

export const BaseInputNumberButtons = styled.button`
  padding: 6px;
  background-color: ${props => props.theme.grey_400};
  outline: none;
  border: none;
  cursor: pointer;
  svg {
    color: ${props => props.theme.grey_800};
    font-size: 0.65rem;
  }
  &:hover {
    svg {
      color: ${props => props.theme.purple_700};
    }
  }
`

export const ButtonDecrease = styled(BaseInputNumberButtons)`
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
`

export const ButtonIncrease = styled(BaseInputNumberButtons)`
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
`
export const RemoveButton = styled.button`
  padding: 0 0.875rem;
  background-color: ${props => props.theme.grey_400};
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  border-radius: 6px;
  text-transform: uppercase;
  font-size: 0.675rem;
  color: ${props => props.theme.grey_800};
  svg {
    font-size: 1rem;
    color: ${props => props.theme.purple_500};
  }
`