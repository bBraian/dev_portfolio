import { BackgroundGradient, HomeContainer, HomeSection, HomeTitle, ProfileImage, TextGradient } from "./styles";
import profile from "../../assets/images/profile_pic.png";

import { ProjectSection } from "../../components/ProjectSection";
import { Footer } from "../../components/Footer";
import { SkillSection } from "../../components/SkillSection";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export function Home() {
    const { language } = useContext(AppContext);
    return (
        <HomeContainer>
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