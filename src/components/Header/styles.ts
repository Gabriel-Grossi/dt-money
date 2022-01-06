import styled from "styled-components";

export const Container = styled.header`
    background-color: var(--blue);
`

export const Content = styled.header`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1120px;
    padding: 2rem 1rem 12rem;

    button {
        font-size: 1rem;
        color: var(--shape);
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: .25rem;
        height: 3rem;
        transition: filter .2s;

        &:hover{
            cursor: pointer;
            filter: brightness(.9);
        }
    }
`