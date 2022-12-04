import { Language, LanguageBox, Link, MobileMenuContainer, NavbarMobile, SocialLinkBox, SwitchRoot, SwitchThumb, ThemeSwitcherBox } from "./styles";
import brazil from "../../assets/brazil_flag.svg";
import usa from "../../assets/us_flag.svg";

import { portuguese } from "../../data/languages/portuguese";
import { english } from "../../data/languages/english";

import { light } from "../../styles/themes/light";

import twitter from "../../assets/ant-design_twitter-circle-filled.svg";
import linkedin from "../../assets/entypo-social_linkedin-with-circle.svg";
import github from "../../assets/Vector.svg";
import { useContext } from "react";

import { FiMoon, FiSun } from "react-icons/fi"
import { AppContext } from "../../context/AppContext";

export function MobileMenu() {
    const { changeTheme, theme, language, setLanguage } = useContext(AppContext);

    function handleChangeLanguage(lang) {
        if(lang !== language) {
            setLanguage(lang);
        }
    }
    return (
        <MobileMenuContainer>
            <NavbarMobile>
                <Link>{language.home}</Link>
                <Link>{language.about}</Link>
                <Link>{language.tech_stack}</Link>
                <Link>{language.projects}</Link>
                <Link>{language.contact}</Link>

                <LanguageBox>
                    <Language onClick={() => handleChangeLanguage(english)}>
                        <img src={usa} style={language === english ? {opacity: 1} : {opacity: 0.5}} />
                    </Language>
                    <Language onClick={() =>handleChangeLanguage(portuguese)}>
                        <img src={brazil} style={language === portuguese ? {opacity: 1} : {opacity: 0.5}} />
                    </Language>
                </LanguageBox>

                <ThemeSwitcherBox>
                    <p>{language.apperance}</p>

                    <SwitchRoot onCheckedChange={changeTheme}>
                        <SwitchThumb>
                            { theme === light ? <FiSun /> : <FiMoon /> }
                        </SwitchThumb>
                    </SwitchRoot>
                    
                </ThemeSwitcherBox>

                <SocialLinkBox>
                    <a href="https://github.com/bBraian">
                        <img src={github} alt="Icone do GitHub" />
                    </a>
                    <a href="https://twitter.com/b_Braaian">
                        <img src={twitter} alt="Icone do Twitter" />
                    </a>
                    <a href="https://www.linkedin.com/in/braian-viacava-de-avila-536558186/">
                        <img src={linkedin} alt="Icone do Linkedin" />
                    </a>
                </SocialLinkBox>
            </NavbarMobile>
        </MobileMenuContainer>
    )
}