import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
    height: 6.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1080px;
    margin: 0 auto;
    padding: 0 1rem;
`

export const SideRight = styled.div`
    display: flex;
    gap: 0.5rem;   

    & > div:first-child {
      padding: 0.5rem 1rem;
      border-radius: 6px;
      display: flex;
      align-items: center;
      gap: 0.25rem;
      background: ${(props) => props.theme['purple-light']};
      color: ${(props) => props.theme['purple-dark']};
      cursor: default;
    }

    & > div > svg {
    color: ${(props) => props.theme['purple-dark']};
    font-size: 1.25rem;
    } 
    
`

export const Link = styled(NavLink)`
  border-radius: 6px;
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  border: none;
  padding: 0.5rem;
  border: 1px solid ${(props) => props.theme['yellow-dark']};
  position: relative;
  transition: all 0.2s;
  &:hover:not(:disabled) {
    filter: brightness(1.05);
    cursor: pointer;
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }
  &:disabled  {
    cursor: not-allowed;
  }
`

export const Counter = styled.div`
  font-size: 0.875rem;
  font-weight: 700;
  border-radius: 9999px;
  position: absolute;
  background-color: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme['white']};
  padding: 2px 6px;
  right: -8px;
  top: -10px;
  ${({ children }) => children && children.toString().length > 1 && css`
      right: -16px;
    `
  }
`