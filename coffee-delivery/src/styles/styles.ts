import styled from "styled-components";

export const Layout = styled.main`
    flex: 1;
    max-width: 74rem;
    height: 100vh;
    margin: 0 auto;
    padding: 2.5rem;

    background: ${(props) => props.theme['gray-800']};
    border-radius: 8px;

    display: flex;
    flex-direction: column;
`
