import { HeaderContainer, Icons, Links } from './styles';
import twitter from "../../assets/ant-design_twitter-circle-filled.svg";
import linkedin from "../../assets/entypo-social_linkedin-with-circle.svg";
import github from "../../assets/Vector.svg";

export function Header() {
    return (
        <HeaderContainer>
            <div>bBraian</div>

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
        </HeaderContainer>
    )
}