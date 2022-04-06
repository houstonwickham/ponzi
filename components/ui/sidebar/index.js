import Link from 'next/link';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBtnWrap,
  SidebarBtn,
  SidebarLink,
  SidebarWrapper,
  SidebarMenu,
} from './SidebarElements';
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <Link href='/#about' passHref>
            <SidebarLink onClick={toggle}>About</SidebarLink>
          </Link>
          <Link href='/#discover' passHref>
            <SidebarLink onClick={toggle}>Discover</SidebarLink>
          </Link>
          <Link href='/#services' passHref>
            <SidebarLink onClick={toggle}>Services</SidebarLink>
          </Link>
          <Link href='/user/signup' passHref>
            <SidebarLink onClick={toggle}>Signup</SidebarLink>
          </Link>
        </SidebarMenu>
        <SideBtnWrap>
          <Link href='/user/signin' passHref>
            <SidebarBtn>Sign In</SidebarBtn>
          </Link>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
