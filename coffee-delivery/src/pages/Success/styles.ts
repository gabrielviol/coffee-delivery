import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8rem;
    margin-top: 4rem;

    img{
        display: flex;
        margin-top: 40px;
    }
`
export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    h1{
        font-family: 'Baloo 2';
        font-weight: 800;
        font-size: 2rem;
        line-height: 130%;
        color: ${(props) => props.theme['yellow-dark']};
    }
    span{
        margin-bottom: 30px;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 130%;
        color: ${(props) => props.theme['base-subtitle']};
    }

    p{
        font-size: 16px;
        font-family: 'Roboto';
        font-weight: 400;
        line-height: 130%;
        color: ${(props) => props.theme['base-text']};
        span{
            font-weight: 700;
            font-size: 16px;
        }
    }

    .border{
        position: relative;
        background: ${(props) => props.theme['white']};
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 40px;
        gap: 32px;
        border-radius: 6px 36px;
        

        div{
            display: flex;
            align-items: center;
            gap: 10px;
        }
    }

    .border::after{
        content: '';
        position: absolute;
        z-index: -1;
        top: -1px;
        left: -1px;
        right: -1px;
        bottom: -1px;
        background: linear-gradient(120deg, rgb(219, 172, 44, 1), rgb(128, 71, 248, 1));
        border-radius: 6px 36px;
    }

    a{
        display: flex;
        align-items: center;
        padding: 8px;
        width: 32px;
        height: 32px;
        border-radius: 1rem;
        color: ${(props) => props.theme['white']};
    }
    .Map{
        background-color: ${(props) => props.theme['purple']};      
    }
    .Timer{
        background-color: ${(props) => props.theme['yellow']};
    }
    .Currency{
        background-color: ${(props) => props.theme['yellow-dark']};
    }
`