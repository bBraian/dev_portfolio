import styled from "styled-components";

export const ProjectContainer = styled.div`
    width: 30%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
`;

export const ProjectImage = styled.img`
    overflow: hidden;
    max-height: 16.25rem;
`;

export const ProjectContent = styled.div`
    overflow: hidden;
    background-color: ${props => props.theme['project-bg']};
    border-radius: 0 0 20px 20px;
    padding: 1.75rem;
`;

export const Title = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 1.75rem;
    font-weight: 500;
    color: ${props => props.theme['titles']};
`;

export const Description = styled.span`
    font-family: 'Poppins', sans-serif;
    font-size: 1.125rem;
    font-weight: 300;
    color: ${props => props.theme['titles']};
`;