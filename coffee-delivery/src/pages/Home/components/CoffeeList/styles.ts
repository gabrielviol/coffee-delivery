
import styled from "styled-components";

export const ContainerHeader = styled.section`
    margin-bottom: 2rem;

    h2 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.875rem;
    color: ${props => props.theme.grey_900};
    margin-bottom: 2rem;
    }

    div {
    display: flex;
    flex-wrap: wrap;
    }
`

export const Loading = styled.h1`
  color: ${props => props.theme.grey_600};
  font-size: 1rem;
`

