import { HeaderContainer, HeaderItem } from "../../styles/common/Header.css";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderItem href="#">ABOUT</HeaderItem>
      <HeaderItem href="#timeline">TIMELINE</HeaderItem>
      <HeaderItem href="#tech">TECH</HeaderItem>
      <HeaderItem href="#projects">PROJECTS</HeaderItem>
      <HeaderItem href="#career">CAREER</HeaderItem>
    </HeaderContainer>
  )
}

export default Header;