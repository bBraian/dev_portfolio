import styled from "styled-components";
import * as Switch from '@radix-ui/react-switch';

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



export const SwitchRoot = styled(Switch.Root)`
    width: 42px;
    height: 25px;
    border-radius: 9999px;
    position: relative;
    border: 0;
    background-color: black;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    &[data-state='checked'] {
        background-color: white;
    }
`;

export const SwitchThumb = styled(Switch.Thumb)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 21px;
    height: 21px;
    border: 0;
    background-color: white;
    border-radius: 9999px;
    transition: transform 100ms;
    transform: translateX(2px);
    will-change: transform;

    &[data-state='checked'] {
        transform: translateX(19px);
    }
`;