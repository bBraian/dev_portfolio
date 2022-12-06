import { BackgroundGradient, ButtonOpenNav, ConfigBox, HeaderContainer, HeaderDesktop, HeaderMobile, HeaderName, Icons, LangImg, LangOption, Links, ProfileHeader, ProfileImage, SelectLanguage, SwitchRoot, SwitchThumb } from './styles';
import twitter from "../../assets/ant-design_twitter-circle-filled.svg";
import linkedin from "../../assets/entypo-social_linkedin-with-circle.svg";
import github from "../../assets/Vector.svg";
import profile from "../../assets/images/profile_pic.png";

import * as Select from '@radix-ui/react-select';

import brazil from "../../assets/brazil_flag.svg";
import usa from "../../assets/us_flag.svg";

import { FiMoon, FiSun } from "react-icons/fi";

import { light } from "../../styles/themes/light";

import { CgMenuRightAlt } from "react-icons/cg"
import { CgClose } from "react-icons/cg"
import { MobileMenu } from '../MobileMenu';
import { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

export function Header() {
    const { changeTheme, theme } = useContext(AppContext);
    const [mobileNav, setMobileNav] = useState(false);

    function handleOpenMobileNav() {
        mobileNav ? setMobileNav(false) : setMobileNav(true);
    }
    return (
        <HeaderContainer>
            <HeaderDesktop>

                <Links>
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Tech Stack</a>
                    <a href="">Projects</a>
                    <a href="">Contact</a>

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


                    <Select.Root>
                        <Select.Trigger>
                        <Select.Value />
                        <Select.Icon />
                        </Select.Trigger>

                        <Select.Portal>
                        <Select.Content>
                            <Select.ScrollUpButton />
                            <Select.Viewport>
                            <Select.Item>
                                <Select.ItemText />
                                <Select.ItemIndicator />
                            </Select.Item>

                            <Select.Group>
                                <Select.Label />
                                <Select.Item>
                                <Select.ItemText />
                                <Select.ItemIndicator />
                                </Select.Item>
                            </Select.Group>

                            <Select.Separator />
                            </Select.Viewport>
                            <Select.ScrollDownButton />
                        </Select.Content>
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