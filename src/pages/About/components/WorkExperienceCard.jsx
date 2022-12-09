import { Box, Infos, Period, TitleCard, WorkExperienceCardContainer } from "./WorkExperienceStyle";
import { HiBuildingOffice } from "react-icons/hi2";
import { HiLocationMarker, HiCalendar } from "react-icons/hi";

export function WorkExperienceCard(props) {
    return (
        <WorkExperienceCardContainer>
            <Box align="flex-start">
                <TitleCard>{props.title}</TitleCard> 
                <Infos>
                    <HiBuildingOffice /> {props.company}
                    <HiLocationMarker /> Brochier
                </Infos> 
            </Box>
            <Box align="flex-end">
                <Period>Full Time</Period> 
                <Infos><HiCalendar /> Sep 2021 - Dec 2021</Infos> 
            </Box>
        </WorkExperienceCardContainer>
    )
}