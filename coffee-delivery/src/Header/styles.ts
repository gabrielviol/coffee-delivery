import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
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