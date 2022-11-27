import styled from "styled-components";

export const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
`;

export const HomeSection = styled.section`
    display: flex;
    height: 100vh;
    justify-content: space-evenly;
    max-width: 1366px;
    align-items: center;
    margin: 0 auto;
`;

export const BackgroundGradient = styled.div`
    width: 23.75rem;
    height: 23.75rem;
    border-radius: 50%;
    background: linear-gradient(180deg, rgba(231,15,170,1) 0%, rgba(0,192,253,1) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HomeTitle = styled.h1`
    color: ${props => props.theme['home-title']};
    font-size: 3.625rem;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    letter-spacing: -1px;
    line-height: 5rem;
`;

export const TextGradient = styled.h1`
    background: linear-gradient(270deg, rgba(231,15,170,1) 0%, rgba(0,192,253,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 3.625rem;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    letter-spacing: -1px;
    line-height: 5rem;
`;

export const ProfileImage = styled.img`
    width: 22.8rem;
    height: 22.8rem;
`;

export const SkillsSection = styled.section`
    display: flex;
    flex-direction: column;
    margin: 3.375rem 0 13.375rem 0;
    justify-content: space-around;
    align-items: center;
`;

export const Title = styled.h1`
    color: ${props => props.theme['titles']};
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 3rem;
`;

export const Subtitle = styled.h2`
    color: ${props => props.theme['contents']};
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 2rem;
    margin-top: 2rem;
`;

export const SkillsBox = styled.div`
    display: flex;
    width: 100%;
    max-width: 1280px;
    gap: 5.6875rem 6.4375rem;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 8.75rem;
`;

export const Skill = styled.img`
    max-width: 8rem;
    max-height: 8rem;
    object-fit: fill;
`;