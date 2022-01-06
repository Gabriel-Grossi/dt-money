import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
    h2{
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input{
        width: 100%;
        padding: 0 1.5rem;
        height:4rem;
        border-radius: .25rem;
        border: .0625rem solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder{
            color: var(--text-body);
        }

        & + input{
            margin-top: 1rem;
        }
    }

    button[type="submit"]{
        background: var(--green);
        border: 0;
        color: var(--shape);
        font-size: 1rem;
        font-weight: 600;
        height: 4rem;
        margin-top: 1.5rem;
        padding: 0 1.5rem;
        transition: filter .2s;
        width: 100%;

        &:hover{
            filter: brightness(.9);
        }
    }
`;

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: .5rem;
`;


interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'green' | 'red';
}

const colors ={
    green:'#33CC95',
    red:'#E52E4D'
};


export const RadioBox = styled.button<RadioBoxProps>`
    align-items: center;
    background: ${(props) => props.isActive ?
     transparentize( 0.9, colors[props.activeColor]) : 'transparent'}; 
    border: .0625rem solid #d7d7d7;
    border-radius: .25rem;
    display: flex;
    height: 4rem;
    justify-content: center;

    transition: border-color .2s;

    &:hover{
        border-color: ${darken(0.1, '#d7d7d7')};
    }


    img{
        height: 1.25rem;
        width: 1.25rem;
    }

    span{
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        color: var(--text-title);
    }
`;