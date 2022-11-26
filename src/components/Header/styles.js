import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 2.5rem 0;
    width: 100%;
    position: fixed;
`;

export const Links = styled.div`
    display: flex;
    gap: 4rem;

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
`;

