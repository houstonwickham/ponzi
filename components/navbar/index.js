import { FaBars } from 'react-icons/fa';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import {
  Nav,
  NavLogo,
  NavLogoIcon,
  MobileIcon,
  NavbarContainer,
  NavMenu,
  NavLinks,
  NavItem,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            <NavLogoIcon>
              <RiMoneyDollarCircleLine />
            </NavLogoIcon>
            ponzi
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='/'>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/'>Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/'>Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/'>Signup</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/'>Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
