import { Link, MobileMenuContainer, NavbarMobile } from "./styles";

export function MobileMenu() {
    return (
        <MobileMenuContainer>
            <NavbarMobile>
                <Link>Home</Link>
                <Link>About</Link>
                <Link>Tech Stack</Link>
                <Link>Projects</Link>
                <Link>Contact</Link>
            </NavbarMobile>
        </MobileMenuContainer>
    )
}