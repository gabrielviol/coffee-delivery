import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SummaryContainer = styled.div`
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
  button{
    font-size: 20px;
    font-weight: 700;
    border: none;
    text-transform: uppercase;
    text-decoration: none;
    color: ${(props) => props.theme['white']};
    background-color: ${(props) => props.theme['yellow']}; 
    cursor: pointer;
  } 
`

export const Link = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    height: 3rem;
    border-radius: 6px;
    border: none;
    background-color: ${(props) => props.theme['yellow']}; 
    cursor: pointer; 
    &:hover {
      transition: background 0.3s;
      background-color: ${(props) => props.theme['yellow-dark']};
    }  
`


