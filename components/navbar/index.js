import Link from 'next/link';
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
  NavRoute,
} from './NavbarElements';
const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <Link href='/' passHref>
            <NavLogo>
              <NavLogoIcon>
                <RiMoneyDollarCircleLine />
              </NavLogoIcon>
              ponzi
            </NavLogo>
          </Link>
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
              <Link href='/user/signup' passHref>
                <NavRoute>Signup</NavRoute>
              </Link>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <Link href='/user/signin' passHref>
              <NavBtnLink>Sign In</NavBtnLink>
            </Link>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
