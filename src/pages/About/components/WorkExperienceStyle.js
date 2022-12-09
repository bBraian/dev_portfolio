import styled from "styled-components";

export const WorkExperienceCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 1.2rem;
    border-bottom: 1px solid ${props => props.theme['separator']};
    gap: 0.25rem;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
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
    font-size: 1.55rem;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
`;

export const Period = styled.div`
    color: #018C0F;
    background-color: #D7FFE0;
    border-radius: 100px;
    font-size: 0.8rem;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    padding: 7px 26px;
`;

export const Infos = styled.div`
    display: flex;
    flex-direction: row;
    color: ${props => props.theme['infos']};
    font-size: 0.9rem;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    width: 40%;
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