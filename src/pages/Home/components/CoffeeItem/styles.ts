import styled from "styled-components";

export const CoffeeItemContainer = styled.div`
    width: 14rem;
    flex-direction: column;
    text-align: center;
    height: 16rem;
    background-color: ${(props) => props.theme['base-card']};
    border-top-right-radius: 2rem;
    border-bottom-left-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px px;
    align-items: center;
    position: relative;
    margin-right: 2rem;
    margin-bottom: 2rem;
    box-sizing: border-box;

    img {
    width: 6rem;
    position: absolute;
    top: -20px;
  }
`

export const Badges = styled.div`
  margin-bottom: 1rem;
  span {
    margin-top: 5.5rem;
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    padding: 0.4rem 0.8rem;
    border-radius: 99999px;
    font-size: 0.6rem;
    text-transform: uppercase;
    font-weight: 700;
  }
`

export const Title = styled.h1`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme['base-title']};
`

export const Description = styled.p`
  font-size: 0.725rem;
  text-align: center;
  padding: 0 1rem;
  color: ${(props) => props.theme['base-text']};
`

export const CoffeeItemActions = styled.div`
  margin: auto;
  gap: 0.5rem;
  color: ${(props) => props.theme['base-subtitle']};
  
  span {
    font-size: 0.725rem;
  }
  strong {
    font-family: 'Baloo 2', cursive;
      
    font-weight: 800;
    font-size: 1.25rem;
    margin: 0rem 1rem 0rem 0.25rem;
  }
`

export const InputNumber = styled.div`
    input {
      border: none;
      text-align: center;
      outline: none;
      background-color: ${(props) => props.theme['base-button']};
      pointer-events:none;
      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        -webkit-appearance: none;
      }
    }
`
export const BaseInputNumberButtons = styled.button`
  background-color: ${(props) => props.theme['base-button']};
  outline: none;
  border: none;
  cursor: pointer;
  svg {
    color: ${(props) => props.theme['purple-dark']};
  }
  &:hover {
    svg {
      color: ${(props) => props.theme['purple']};
    }
  }
`

export const ButtonDecrement = styled(BaseInputNumberButtons)`
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
`

export const ButtonIncrement = styled(BaseInputNumberButtons)`
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
`

export const CartButton = styled.button`
  cursor: pointer;
  padding: 0 0.5rem;
  border: none;
  background-color: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme['background']}; 
  font-size: 1rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  &:hover {
    filter: brightness(1.5);
  }
`
