import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Nav = styled.nav`
  background: ${({ scrollNav }) =>
    scrollNav ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.6)'};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.8s all ease;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled.a`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  @media (hover: hover) {
    &:hover {
      animation: headShake;
      animation-duration: 1s;
      color: #fca311;
      transition: 0.3s ease-out;
    }
  }
  @media screen and (max-width: 820px) {
    &:hover {
      color: #ffffff;
    }
  }
`;

export const NavLogoIcon = styled.div`
  display: flex;
  padding-right: 3px;
`;

export const MobileIcon = styled.div`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid #fca311;
  }
  @media (hover: hover) {
    &:hover {
      animation: headShake;
      animation-duration: 1s;
      color: #fca311;
      transition: 0.3s ease-out;
    }
  }
  @media screen and (max-width: 820px) {
    &:hover {
      color: #ffffff;
    }
  }
`;

export const NavRoute = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid #fca311;
  }
  @media (hover: hover) {
    &:hover {
      animation: headShake;
      animation-duration: 1s;
      color: #fca311;
      transition: 0.3s ease-out;
    }
  }
  @media screen and (max-width: 820px) {
    &:hover {
      color: #ffffff;
    }
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled.a`
  border-radius: 50px;
  background-color: #fca311;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  @media (hover: hover) {
    &:hover {
      transition: all 0.2s ease-in-out;
      background: #fff;
      color: #010606;
      animation: headShake;
      animation-duration: 1s;
    }
  }
  @media screen and (max-width: 820px) {
    &:hover {
      background-color: #fca311;
    }
  }
`;
