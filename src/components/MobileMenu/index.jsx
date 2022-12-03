import { Language, LanguageBox, Link, MobileMenuContainer, NavbarMobile, SocialLinkBox, SwitchRoot, SwitchThumb, ThemeSwitcherBox } from "./styles";
import brazil from "../../assets/brazil_flag.svg";
import usa from "../../assets/us_flag.svg";

import twitter from "../../assets/ant-design_twitter-circle-filled.svg";
import linkedin from "../../assets/entypo-social_linkedin-with-circle.svg";
import github from "../../assets/Vector.svg";
import { useState } from "react";

export function MobileMenu() {
    const [language, setLanguage] = useState('eng');

    function handleChangeLanguage(lang) {
        if(lang !== language) {
            setLanguage(lang)
        }
    }
    return (
        <MobileMenuContainer>
            <NavbarMobile>
                <Link>Home</Link>
                <Link>About</Link>
                <Link>Tech Stack</Link>
                <Link>Projects</Link>
                <Link>Contact</Link>

                <LanguageBox>
                    <Language onClick={() => handleChangeLanguage('eng')}>
                        <img src={usa} style={language === 'eng' ? {opacity: 1} : {opacity: 0.5}} />
                    </Language>
                    <Language onClick={() =>handleChangeLanguage('pt')}>
                        <img src={brazil} style={language === 'pt' ? {opacity: 1} : {opacity: 0.5}} />
                    </Language>
                </LanguageBox>

                <ThemeSwitcherBox>
                    <p>Apperance</p>

                    <SwitchRoot>
                        <SwitchThumb />
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