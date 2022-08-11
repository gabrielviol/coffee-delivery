import styled from "styled-components";

export const PaymentContainer = styled.div`
  background-color: ${props => props.theme.grey_200};
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  margin-top: 1rem;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 3px 0px;
  padding: 3rem;
  box-sizing: border-box;
  font-size: 1rem;
  span {
    font-size: 0.875rem;
    color: ${props => props.theme.grey_700};
    line-height: 1.5rem;  
  }
`

export const PaymentOptions = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    height: 3rem;
    width: 100%;
    color: ${props => props.theme.grey_700};
    text-transform: uppercase;
    font-size: 0.775rem;
    border: 1px solid transparent;
    background-color: ${props => props.theme.grey_400};
    border-radius: 6px;
    cursor: pointer;
    min-width: 200px;
    &:hover {
      transition: all 0.3s;
      background-color: ${props => props.theme.grey_500};
    }
    &:focus {
      background-color: ${props => props.theme.purple_300};
      border: 1px solid ${props => props.theme.purple_500};
      color: ${props => props.theme.purple_500};
    }
  }
  svg {
    font-size: 1rem;
    color: ${props => props.theme.purple_500};
  }
`