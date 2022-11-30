import styled from "styled-components";

export const MobileMenuContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme['background']};
    top: 3.5rem;
    position: fixed;
    z-index: 999;
`;

export const NavbarMobile = styled.nav`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1.8rem 3.4rem;
`;

export const Link = styled.a`
    color: ${props => props.theme['titles']};
    border-bottom: 1px solid ${props => props.theme['project-bg']};
    padding: 0.75rem 0 0.6875rem;
    font-size: 1rem;
    font-weight: 500;
`;

export const LanguageBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 1.5rem;
`;

export const Language = styled.a`
    width: 2.9rem;
    height: 1.8rem;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: left;
    }
`;

export const ThemeSwitcherBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: ${props => props.theme['project-bg']};
    margin-top: 1.5rem;
    border-radius: 8px;
    padding: 0.75rem 1rem;
`;

export const SocialLinkBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    margin-top: 1.5rem;
`;