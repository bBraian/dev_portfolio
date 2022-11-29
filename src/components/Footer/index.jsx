import { FooterContact, FooterContainer, FooterLinks, Icons, RowSpaceBetween, Separator } from "./styles";
import twitter from "../../assets/ant-design_twitter-circle-filled.svg";
import linkedin from "../../assets/entypo-social_linkedin-with-circle.svg";
import github from "../../assets/Vector.svg";

export function Footer() {
    return (
        <FooterContainer>
            <RowSpaceBetween>
                <span>bBraian</span>
                
                <FooterContact>
                    <span>+55 51 99626-8989</span>
                    <span>braianvoficial@gmail.com</span>

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
                </FooterContact>
            </RowSpaceBetween>

            <Separator />

            <RowSpaceBetween>
                <FooterLinks>
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Tecnologies</a>
                    <a href="">Projects</a>
                    <a href="">Contact</a>
                </FooterLinks>

                <span>By bBraian</span>

            </RowSpaceBetween>

        </FooterContainer>
    )
}