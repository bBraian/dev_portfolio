import styled from "styled-components";

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100vh);
    max-width: 1366px;
    margin: 0 auto;
    padding-top: 6.625rem;
    width: 100%;
    margin-bottom: 5rem;

    @media (max-width: 1245px) {
        height: calc(100vh - 3.5rem);
        padding-top: 3.5vh;
    }
`;

export const Title = styled.h1`
    margin-top: 2.375rem;
    color: ${props => props.theme['home-title']};
    font-size: 2.625rem;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    letter-spacing: -1px;
    line-height: 5rem;

    
    @media (max-width: 1245px) {
        font-size: 2rem;
        line-height: 1.4;
        text-align: center;
    }
`;

export const TextAboutMe = styled.p`
    margin-top: 2.375rem;
    color: ${props => props.theme['contents']};
    font-size: 1.125rem;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    max-width: 50%;
`;

export const WorkExperienceBox = styled.div`
    margin-top: 2.375rem;
    display: flex;
    width: 50%;
    flex-direction: column;
    gap: 1.875rem;
`;