import styled from "styled-components";

export const ProjectSectionContainer = styled.header`
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

export const ProjectsBox = styled.div`
    margin-top: 6rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;