import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;

    div {
        padding: 1.5rem 2rem;
        background: var(--shape);
        border-radius: 0.25rem;
        color: var(--text-title);

        header {
            text-align: center;
            justify-content: space-between;
            display: flex;
        }

        strong {
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }

        &.highlight-background {
            background: var(--green);
            color: #FFF;
        }
    }
`;