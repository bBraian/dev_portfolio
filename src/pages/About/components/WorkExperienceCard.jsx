import { Box, Company, Dates, Infos, Location, Period, TitleCard, WorkExperienceCardContainer } from "./WorkExperienceStyle";
import { HiBuildingOffice } from "react-icons/hi2";
import { HiLocationMarker, HiCalendar } from "react-icons/hi";

export function WorkExperienceCard(props) {
    return (
        <WorkExperienceCardContainer>
            <Box align="flex-start" flex={2}>
                <TitleCard>{props.title}</TitleCard> 
                <Infos align="space-between">
                    <Company>
                        <HiBuildingOffice /> {props.company}
                    </Company>
                    <Location>
                        <HiLocationMarker /> Brochier
                    </Location>
                </Infos> 
            </Box>
            <Box align="flex-end" flex={1}>
                <Period>Full Time</Period> 
                <Infos align="end">
                    <Dates>
                        <HiCalendar /> Sep 2021 - Dec 2021
                    </Dates>
                </Infos> 
            </Box>
        </WorkExperienceCardContainer>
    )
}