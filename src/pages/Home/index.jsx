import { BackgroundGradient, HomeContainer, HomeSection, HomeTitle, ProfileImage, TextGradient } from "./styles";
import profile from "../../assets/images/profile_pic.png";

import { ProjectSection } from "../../components/ProjectSection";
import { Footer } from "../../components/Footer";
import { SkillSection } from "../../components/SkillSection";
import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { useLocation } from "react-router-dom";


export function Home() {
    const { language, homeRef, skillsRef, projectsRef, scrollToSection } = useContext(AppContext);
    const { state } = useLocation();
    const { targetSection } = state || {};
    useEffect(() => {
        if(targetSection != "") {
            switch (targetSection) {
                case 'homeRef':
                    scrollToSection(homeRef);
                    break;
                case 'skillsRef':
                    scrollToSection(skillsRef);
                    break;
                case 'projectsRef':
                    scrollToSection(projectsRef);
                    break;
            }
            
        }
    }, [])
    return (
        <HomeContainer ref={homeRef}>
            <HomeSection>
                <div>
                    <HomeTitle>
                        {language.hi} 👋,
                        <br />
                        {language.my_name_is}
                        <br />
                        <TextGradient>
                            Braian Viacava de Ávila
                        </TextGradient>
                        {language.im_a_software_developer}
                    </HomeTitle>
                </div>
                <div>
                    <BackgroundGradient>
                        <ProfileImage src={profile} />
                    </BackgroundGradient>
                </div>
            </HomeSection>

            <SkillSection />

            <ProjectSection />

            <Footer />

        </HomeContainer>
    )
}