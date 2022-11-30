import styled from "styled-components";

export const HeaderContainer = styled.header`
    @media (max-width: 1024px) {
        height: 3.5rem;
        border-bottom: 1px solid ${props => props.theme['project-bg']};
    }
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 6rem;
    width: 100%;
    position: fixed;
    backdrop-filter: blur(20px);
    background: rgba(0,0,0,0, 0.5);
`;

export const HeaderDesktop = styled.div`
    @media (max-width: 1024px) {
        display: none;
    }
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 6rem;
    width: 100%;
    position: fixed;
    backdrop-filter: blur(20px);
    background: rgba(0,0,0,0, 0.5);
`;

export const Links = styled.div`
    display: flex;
    gap: 4rem;
    align-items: center;

    a {
        text-decoration: none;
        color: ${props => props.theme['contents']};
        font-family: 'DM Sans', sans-serif;
        font-size: 1.25rem;
        font-weight: 500;
    }
`;

export const Icons = styled.div`
    display: flex;
    gap: 1.25rem;
    align-items: center;
`;



/** MOBILE */

export const HeaderMobile = styled.div`
    @media (max-width: 1024px) {
        display: flex;
    }
    display: none;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 1.6rem;
`;

export const ProfileHeader = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.6rem;
    align-items: center;
`;

export const HeaderName = styled.h1`
    font-size: 1.2rem;
    font-weight: 500;
    color: ${props => props.theme['titles']};
`;

export const BackgroundGradient = styled.div`
    width: 1.9rem;
    height: 1.9rem;
    border-radius: 50%;
    background: linear-gradient(180deg, rgba(231,15,170,1) 0%, rgba(0,192,253,1) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ProfileImage = styled.img`
    width: 1.6rem;
    height: 1.6rem;
`;

export const ButtonOpenNav = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
`;

