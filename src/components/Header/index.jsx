import { BackgroundGradient, ButtonOpenNav, ConfigBox, HeaderContainer, HeaderDesktop, HeaderMobile, HeaderName, Icons, LangImg, LangSelect, Links, ProfileHeader, ProfileImage, SelectContent, SelectIcon, SelectItem, SelectItemIndicator, SelectScrollButton, SelectTrigger, SelectValue, SelectViewport, SwitchRoot, SwitchThumb } from './styles';
import twitter from "../../assets/ant-design_twitter-circle-filled.svg";
import linkedin from "../../assets/entypo-social_linkedin-with-circle.svg";
import github from "../../assets/Vector.svg";
import profile from "../../assets/images/profile_pic.png";

import { portuguese } from "../../data/languages/portuguese";
import { english } from "../../data/languages/english";

import * as Select from '@radix-ui/react-select';

import brazil from "../../assets/brazil_flag.svg";
import usa from "../../assets/us_flag.svg";

import { FiMoon, FiSun, FiCheck } from "react-icons/fi";
import { RiArrowDownSLine } from "react-icons/ri";
import { IoLanguageOutline } from "react-icons/io5";

import { light } from "../../styles/themes/light";

import { CgMenuRightAlt } from "react-icons/cg"
import { CgClose } from "react-icons/cg"
import { MobileMenu } from '../MobileMenu';
import { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

export function Header() {
    const { changeTheme, theme, setLanguage, scrollToSection, homeRef, skillsRef, projectsRef } = useContext(AppContext);
    const [mobileNav, setMobileNav] = useState(false);

    function changeLanguage(lang) {
        if(lang === "pt") {
            setLanguage(portuguese);
        } else {
            setLanguage(english);
        }
    }

    function handleOpenMobileNav() {
        mobileNav ? setMobileNav(false) : setMobileNav(true);
    }
    return (
        <HeaderContainer>
            <HeaderDesktop>

                <Links>
                    <button onClick={() => scrollToSection(homeRef)}>Home</button>
                    <button>About</button>
                    <button onClick={() => scrollToSection(skillsRef)}>Tech Stack</button>
                    <button onClick={() => scrollToSection(projectsRef)}>Projects</button>
                    <button>Contact</button>

                    <Icons>
                        <a href="https://github.com/bBraian">
                            <img src={github} alt="Icone do GitHub" />
                        </a>
                        <a href="https://twitter.com/b_Braaian">
                            <img src={twitter} alt="Icone do Twitter" />
                        </a>
                        <a href="https://www.linkedin.com/in/braian-viacava-de-avila-536558186/">
                            <img src={linkedin} alt="Icone do Linkedin" />
                        </a>
                    </Icons>
                </Links>


                <ConfigBox>

                    <SwitchRoot onCheckedChange={changeTheme}>
                        <SwitchThumb>
                            { theme === light ? <FiSun /> : <FiMoon /> }
                        </SwitchThumb>
                    </SwitchRoot>

                    <div>|</div>


                    <Select.Root onValueChange={(lang) => changeLanguage(lang)} defaultValue="eng">
                        <SelectTrigger>
                            <LangSelect>
                                <SelectIcon>
                                    <IoLanguageOutline size={16} />
                                </SelectIcon>
                                <SelectValue placeholder="Language" />
                            </LangSelect>
                            <SelectIcon>
                                <RiArrowDownSLine size={16} />
                            </SelectIcon>
                        </SelectTrigger>

                        <Select.Portal>
                            <SelectContent>
                                <SelectScrollButton />
                                <SelectViewport>

                                    <SelectItem value="eng">
                                        <LangImg src={usa} />
                                        <Select.ItemText>English</Select.ItemText>
                                        <SelectItemIndicator>
                                            <FiCheck />
                                        </SelectItemIndicator>
                                    </SelectItem>
                                    <SelectItem value="pt">
                                        <LangImg src={brazil} />
                                        <Select.ItemText>Portuguese</Select.ItemText>
                                        <SelectItemIndicator>
                                            <FiCheck />
                                        </SelectItemIndicator>
                                    </SelectItem>

                                </SelectViewport>
                                <Select.ScrollDownButton />
                            </SelectContent>
                        </Select.Portal>
                    </Select.Root>

                    {/* <SelectLanguage>
                        <LangOption>
                            English
                        </LangOption>
                        <LangOption>
                            Portuguese
                        </LangOption>
                        
                    </SelectLanguage> */}

                </ConfigBox>
            </HeaderDesktop>

            <HeaderMobile>
                <ProfileHeader>
                    <BackgroundGradient>
                        <ProfileImage src={profile} />
                    </BackgroundGradient>
                    <HeaderName>Braian</HeaderName>
                </ProfileHeader>
                
                <ButtonOpenNav onClick={handleOpenMobileNav}>
                    { mobileNav ? <CgClose color="${props => props.theme['background']}" size={24} /> : <CgMenuRightAlt color="${props => props.theme['background']}" size={24} />}
                </ButtonOpenNav>
            </HeaderMobile>

            { mobileNav ? <MobileMenu /> : "" }
            

        </HeaderContainer>
    )
}