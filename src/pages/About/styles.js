import styled from "styled-components";

export const AboutContainer = styled.div`
    display: flex;
    height: calc(100vh);
    justify-content: space-evenly;
    max-width: 1366px;
    align-items: center;
    margin: 0 auto;
    padding-top: 6rem;
    width: 100%;

    @media (max-width: 1245px) {
        flex-direction: column;
        height: calc(100vh - 3.5rem);
        padding-top: 3.5vh;
        justify-content: space-evenly;
    }
`;