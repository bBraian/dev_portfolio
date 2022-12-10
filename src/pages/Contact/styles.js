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

    h1 {
        font-weight: bold;
        font-family: 'Poppins', sans-serif;
        letter-spacing: -1px;
        line-height: 5rem;
        font-size: 3.625rem;
        color: ${props => props.theme['contact-title-color']}
    }
`;

export const ContactBox = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`;

export const TextGradient = styled.div`
    background: linear-gradient(270deg, rgba(231,15,170,1) 0%, rgba(0,192,253,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 3.625rem;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    letter-spacing: -1px;
    line-height: 5rem;

    @media (max-width: 1245px) {
        font-size: 2.6rem;
        line-height: 1.4;
    }
`;