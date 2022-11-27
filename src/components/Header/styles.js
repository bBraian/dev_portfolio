import styled from "styled-components";

export const HeaderContainer = styled.header`
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

