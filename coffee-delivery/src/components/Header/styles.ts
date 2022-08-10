import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components'

export const HeaderContainer = styled.div`
    height: 6.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1rem;
`

export const SideRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    font-family: 'Roboto';
    font-size: 14px;

    div {
        color: ${(props) => props.theme['purple']};
        display: flex;
        align-items: center;
        gap: 0.2rem;
    }

    a {
        width: 2.5rem;
        height: 2.5rem;

        display: flex;
        align-items: center;
        justify-content: center;
        
        color: ${(props) => props.theme['yellow-dark']};
        background-color: ${(props) => props.theme['yellow-light']};
    }

    
`

export const Link = styled(NavLink)`
  border-radius: 6px;
  background-color: ${props => props.theme.yellow_300};
  color: ${props => props.theme.yellow_700};
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  border: none;
  padding: 0.5rem;
  border: 1px solid ${props => props.theme.yellow_700};
  position: relative;
  transition: all 0.2s;
  &:hover:not(:disabled) {
    filter: brightness(1.05);
    cursor: pointer;
    border: 1px solid ${props => props.theme.yellow_700}
  }
  &:disabled  {
    cursor: not-allowed;
  }
`;

export const Counter = styled.div`
  font-size: 0.875rem;
  font-weight: 700;
  border-radius: 9999px;
  position: absolute;
  background-color: ${props => props.theme.yellow_700};
  color: ${props => props.theme.white};
  padding: 2px 6px;
  right: -8px;
  top: -10px;
  ${
    ({ children }) => children && children.toString().length > 1 && css`
      right: -16px;
    `
  }
`