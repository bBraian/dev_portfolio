import styled from "styled-components";

export const WorkExperienceCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 1.2rem;
    border-bottom: 1px solid ${props => props.theme['separator']};
    align-items: center;
`;

export const Box = styled.div`
    display: flex;
    flex: ${props => props.flex};
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    align-items: ${(props) => props.align};
`;

export const TitleCard = styled.h2`
    color: ${props => props.theme['contents']};
    font-size: 1.25rem;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
`;

export const Period = styled.div`
    color: #018C0F;
    background-color: #D7FFE0;
    border-radius: 100px;
    font-size: 0.6rem;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    padding: 5px 22px;
`;

export const Infos = styled.div`
    display: flex;
    flex-direction: row;
    color: ${props => props.theme['infos']};
    font-size: 0.75rem;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    width: 75%;
    align-items: center;
    justify-content: ${props => props.align};
`;

export const Company = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 4px;
`;

export const Location = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 4px;
`;

export const Dates = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 4px;
`;