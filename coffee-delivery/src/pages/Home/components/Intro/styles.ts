import styled from "styled-components"

export const Container = styled.main`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 544px;
    left: 0px;
    right: 0px;
    top: 104px;

    img {
        width: 476px;
        height: 360px;
        left: calc(50% - 476px/2 + 322px);
        top: calc(50% - 360px/2);
    }
`

export const ContainerIntro = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 22rem;

    section {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 16px;

        width: 588px;
        height: 192px;
        left: calc(50% - 588px/2 - 266px);
        top: calc(50% - 192px/2 - 82px);

        h1 {
            width: 588px;
            height: 124px;

            font-family: 'Baloo 2', sans-serif;
            font-size: 48px;
            font-weight: 800;
            line-height: 130%;

            flex: none;
            order: 0;
            align-self: stretch;
            flex-grow: 0;

            color: ${(props) => props.theme['base-title']};
        }
        p{
            width: 588px;
            height: 52px;

            font-family: 'Roboto';
            font-weight: 400;
            font-size: 20px;
            line-height: 130%;

            flex: none;
            order: 1;
            align-self: stretch;
            flex-grow: 0;

            color: ${(props) => props.theme['base-subtitle']};
        }
    }

    table{
        display: flex;
        width: 577px;
        height: 84px;
        tbody{
            display: flex;
            tr{
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                div {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    padding: 0px;
                    gap: 12px;
                    
                    width: 294px;
                    height: 32px;
                    left: 271px;
                    top: 52px;

                    a{
                        display: flex;
                        align-items: center;
                        padding: 8px;
                        width: 32px;
                        height: 32px;
                        
                        border-radius: 1rem;
                        color: ${(props) => props.theme['white']};
                    }
                    .Cart{
                        background-color: ${(props) => props.theme['yellow-dark']};
                    }
                    .Timer{
                        background-color: ${(props) => props.theme['yellow']};
                    }
                    .Package{
                        background-color: ${(props) => props.theme['base-text']};
                    }
                    .Coffee{
                        background-color: ${(props) => props.theme['purple']};
                    }
                    
                    p{
                        font-family: 'Roboto';
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 130%;

                        color: ${(props) => props.theme['base-text']}
                    }
                }
            }
        }
    }
`