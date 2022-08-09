
import styled from "styled-components";

export const Container = styled.main`
border: 1px solid black;
margin-top: 6rem;

    
`
export const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;

            h1{
                display: flex;
                align-items: center;

                font-family: 'Baloo 2';
                font-weight: 800;
                font-size: 32px;
                line-height: 130%;
                color: ${(props) => props.theme['base-subtitle']};
            }
`

export const List = styled.div`
    border: 1px solid;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1.5rem;
    flex-wrap: wrap;
    margin-top: 2rem;
`

export const CoffeeCards = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 256px;
    height: 310px;

    border: 1px solid green;

    img {
        width: 120px;
        height: 120px;
        border: 1px solid black;
    }

    h2 {
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 130%;

        display: flex;
        align-items: flex-end;
        text-align: center; 

        color: ${(props) => props.theme['base-subtitle']};
    }
    p {
        margin: 0 10px;
        margin-top: 5px;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 14px;
        line-height: 130%;
        text-align: center;

        color: ${(props) => props.theme['base-label']};
    }

    title {
        display: flex;
        width: 81px;
        height: 21px;
        justify-content: center;
        align-items: center;
        padding: 0;
        gap: 4px;
        border-radius: 100px;
        background-color: ${(props) => props.theme['yellow-light']};

        font-family: 'Roboto';
        font-weight: 700;
        font-size: 10px;
        line-height: 130%;

        text-transform: uppercase;

        color: ${(props) => props.theme['yellow-dark']};
        border: 1px solid red;
        }
`

export const Buy = styled.div`
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0;
        gap: 20px;

        line-height: 130%;
        font-weight: 400;
        font-family: 'Roboto';
        color: ${(props) => props.theme['base-title']};

        .value{
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 0;

            font-size: 14px;
            font-family: 'Baloo 2';
            color: ${(props) => props.theme['base-label']};
        }
        .value2{
            font-size: 30px;
            font-family: 'Baloo 2';
            color: ${(props) => props.theme['base-subtitle']};
            margin: 0;
        }
        div{
            display: flex;
            align-items: center;
            color: ${(props) => props.theme['purple-dark']};
            gap: 2px;

        div, div {
            color: ${(props) => props.theme['white']};
        }
            p{  
                font-family: 'Roboto';
                font-size: 20px ;
                color: black;
            }
            .cart{
                background-color: ${(props) => props.theme['purple-dark']};
                padding: 8px;
                border-radius: 6px;
                gap: 8px;
            }
        }
`
