import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #e7e7e7;
        --blue: #0d1970;
        --blue-light: #0089ff;
        --green: #33CC95;
        --red: #E52E4D;
        --shape: #fff;
        --text-title: #363F5F;
        --text-body: #898a8b;
    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media(max-width: 1080px){
            font-size: 93.75%;
        }
        @media(max-width: 720px){
            font-size: 87.5%;
        }
    }

    body, button, input, textarea {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6{
        font-weight: 600;
    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: .6;
        cursor: not-allowed;
    }

    .react-modal-overlay{
        align-items: center;
        background: rgba(0,0,0,.5);
        display: flex;
        top:0;
        left:0;
        bottom:0;
        right: 0;
        justify-content: center;
        position: fixed;
    }

    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.24rem;
    }

    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        &:hover{
            filter: brightness(.8);
        }
    }
`