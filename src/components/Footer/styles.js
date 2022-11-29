import styled from "styled-components";

export const FooterContainer = styled.footer`
    margin: 0 auto; 
    display: flex;
    max-width: 1366px;
    padding: 0 3rem;
    flex-direction: column;
    padding-bottom: 3.5rem;
`;

export const RowSpaceBetween = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const FooterContact = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4rem;
`;

export const Separator = styled.hr`
    margin: 2.5rem 0;
    border: 1px solid #232333;
`;

export const Icons = styled.div`
    display: flex;
    gap: 1.25rem;
    align-items: center;
`;

export const FooterLinks = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4rem;

    a {
        text-decoration: none;
        color: ${props => props.theme['contents']};
    }
`;