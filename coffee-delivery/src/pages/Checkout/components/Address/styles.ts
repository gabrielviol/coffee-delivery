import styled from "styled-components";

export const AddressContainer = styled.div`
    font-family: 'Baloo 2', cursive;
    font-size: 1rem;
`
export const AddressContent = styled.div`
  font-family: 'Roboto', sans-serif;    
  background-color: ${props => props.theme.grey_200};
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  margin-top: 1rem;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 3px 0px;
  padding: 2.5rem;
  box-sizing: border-box;
  svg {
    color: ${props => props.theme.yellow_700};
    margin-right: 1rem;
  }
  span {
    font-size: 0.875rem;
    color: ${props => props.theme.grey_700};
    line-height: 1.5rem; 
  }
`

export const AddressForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.875rem;
  margin-top: 2rem;
  input {
    height: 3rem;
    padding: 0 1rem;
    background-color: ${props => props.theme.grey_300};
    border: 1px solid ${props => props.theme.grey_400};
    border-radius: 6px;
    outline: none;
    &:focus {
      transition: border 0.3s;
      border: 1px solid ${props => props.theme.yellow_500};
    }
  }
`

export const AddressFormGroup = styled.div`
  display: flex;
  gap: 0.875rem;
  align-items: center;
  position: relative;
  input {
    width: 50%;
  }
  span {
    color: red;
    position: absolute;
    right: 0;
    margin-right: 1rem;
    font-size: 0.75rem;
    color: ${props => props.theme.grey_600};
    font-style: italic;
  }
`