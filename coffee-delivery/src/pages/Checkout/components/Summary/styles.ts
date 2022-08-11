import styled from "styled-components";

export const SummaryContainer = styled.div`
    font-family: 'Baloo 2', cursive;
    font-size: 1rem;
`
export const SummaryContent = styled.div`
  font-family: 'Roboto', sans-serif;
  background-color: ${props => props.theme.grey_200};
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
    color: ${props => props.theme.grey_700};
  }
  h2 {
    margin-top: 0.5rem;
    font-size: 1.25rem;
  }
  button {
    margin-top: 2rem;
    height: 3rem;
    border-radius: 6px;
    outline: none;
    border: none;
    background-color: ${props => props.theme.yellow_500};
    text-transform: uppercase;
    color: ${props => props.theme.white};
    font-weight: 700;
    cursor: pointer;
    &:hover {
      transition: background 0.3s;
      background-color: ${props => props.theme.yellow_700};
    }
  }
`