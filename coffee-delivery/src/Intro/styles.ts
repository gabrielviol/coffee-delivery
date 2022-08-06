import styled from "styled-components"

export const Container = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
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
    align-items: center;
    justify-content: space-between;

    section {
        display: flex;
        flex-direction: column;
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
        }
    }

    table{
        display: flex;
        justify-content: space-between;
        border: 2px solid;
        width: 567px;
        height: 84px;
        tr{
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            border: 2px solid;
        }
    }
`