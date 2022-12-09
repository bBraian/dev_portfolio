import styled from "styled-components";

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100vh);
    max-width: 1366px;
    align-items: center;
    margin: 0 auto;
    padding-top: 6rem;
    width: 100%;

    @media (max-width: 1245px) {
        height: calc(100vh - 3.5rem);
        padding-top: 3.5vh;
    }
`;