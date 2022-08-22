import styled from "styled-components";

export const AddressContainer = styled.div`
    font-family: 'Baloo 2', cursive;
    font-size: 1rem;
`
export const AddressContent = styled.div`
  font-family: 'Roboto', sans-serif;    
  background-color: ${(props) => props.theme['base-card']}; 
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  margin-top: 1rem;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 3px 0px;
  padding: 2.5rem;
  box-sizing: border-box;
  svg {
    color: ${(props) => props.theme['yellow-dark']}; 
    margin-right: 1rem;
  }
  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']}; 
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
    background-color: ${(props) => props.theme['base-input']}; 
    border: 1px solid ${(props) => props.theme['base-button']}; 
    border-radius: 6px;
    outline: none;
    &:focus {
      transition: border 0.3s;
      border: 1px solid ${(props) => props.theme['yellow']}; 
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
    color: ${(props) => props.theme['base-label']}; 
    font-style: italic;
  }
`

export const PaymentContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};  
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
    color: ${(props) => props.theme['base-text']}; 
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
    color: ${(props) => props.theme['base-text']}; 
    text-transform: uppercase;
    font-size: 0.775rem;
    border: 1px solid transparent;
    background-color: ${(props) => props.theme['base-button']}; 
    border-radius: 6px;
    cursor: pointer;
    min-width: 200px;
    &:hover {
      transition: all 0.3s;
      background-color: ${(props) => props.theme['base-hover']}; 
    }
    &:focus {
      background-color: ${(props) => props.theme['purple-light']};  
      border: 1px solid ${(props) => props.theme['purple']}; 
      color: ${(props) => props.theme['purple']}; 
    }
  }
  svg {
    font-size: 1rem;
    color: ${(props) => props.theme['purple']};
  }
`