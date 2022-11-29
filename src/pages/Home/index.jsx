import { BackgroundGradient, HomeContainer, HomeSection, HomeTitle, ProfileImage, TextGradient } from "./styles";
import profile from "../../assets/images/profile_pic.png";

import { ProjectSection } from "../../components/ProjectSection";
import { Footer } from "../../components/Footer";
import { SkillSection } from "../../components/SkillSection";

export function Home() {
    return (
        <HomeContainer>
            <HomeSection>
                <div>
                    <HomeTitle>
                        Hi 👋,
                        <br />
                        My name is
                        <br />
                        <TextGradient>
                            Braian Viacava de Ávila
                        </TextGradient>
                        I'm a Software Developer
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

            {/* <Footer /> */}

        </HomeContainer>
    )
}