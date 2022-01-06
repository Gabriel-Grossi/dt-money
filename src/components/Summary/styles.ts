import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;

    div{
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: .25rem;
        color: var(--text-title);
        
        header{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    
        strong{
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }
        &:hover{
            img{
                animation: updown 1.35s;
            }
        }

        &:last-child{
            background-color: var(--green);
            color: var(--shape);
            &:hover{
                img{
                    animation: none;
                }
            }
        }
    }

    @keyframes updown {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(.625rem);
        }
        100% {
            transform: translateY(0);
        }
    }
}
`