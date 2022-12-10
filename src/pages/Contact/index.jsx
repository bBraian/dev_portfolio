import { ContactBox, ContactContainer, TextGradient } from "./styles";
import { Footer } from "../../components/Footer";

export function Contact() {
    return (
        <ContactContainer>
            <div></div>
            <ContactBox>
                <h1>For any questions please mail me</h1>
                <TextGradient>braianvoficial@gmail.com</TextGradient>
            </ContactBox>
            <Footer />
        </ContactContainer>
    )
}