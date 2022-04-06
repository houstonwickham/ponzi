import { useState, useEffect } from 'react';
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
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
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
              <Link href='/#about' passHref>
                <NavLinks>About</NavLinks>
              </Link>
            </NavItem>
            <NavItem>
              <Link href='/#discover' passHref>
                <NavLinks>Discover</NavLinks>
              </Link>
            </NavItem>
            <NavItem>
              <Link href='/#services' passHref>
                <NavLinks>Services</NavLinks>
              </Link>
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
