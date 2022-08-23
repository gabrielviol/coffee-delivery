import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    position: absolute;
`
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
  label {
    border: 1px solid black;
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
    
    input{
      
    }
    
    
  }
  svg {
    font-size: 1rem;
    color: ${(props) => props.theme['purple']};
  }
`

export const SummaryContainer = styled.div`
    display: flex;
    width: 30rem;
    flex-direction: column;
    font-family: 'Baloo 2', cursive;
    font-size: 1rem;
`
export const SummaryContent = styled.div`
  font-family: 'Roboto', sans-serif;
  background-color: ${(props) => props.theme['base-card']}; 
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 3px 0px;
  padding: 2.5rem;
  box-sizing: border-box;
  border-top-right-radius: 3rem;
  border-bottom-left-radius: 3rem;
`

export const SummaryTotal = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  div {
    display: flex;
    justify-content: space-between;
  }
  p, span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};  
  }
  h2 {
    margin-top: 0.5rem;
    font-size: 1.25rem;
  }
  
`

export const Link = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    text-decoration: none;
    height: 3rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme['yellow']}; 
    cursor: pointer; 
    &:hover:not(:disabled) {
      transition: background 0.3s;
      background-color: ${(props) => props.theme['yellow-dark']};
    } 
    &[aria-disabled="true"] {
      display: none;
      cursor: not-allowed;
   }

    p {
      font-size: 20px;
      font-weight: 700;
      text-transform: uppercase;
      color: ${(props) => props.theme['white']};
    } 
`