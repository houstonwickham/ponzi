import Link from 'next/link';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBtnWrap,
  SidebarLink,
  SidebarRoute,
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
          <SidebarLink to='about' onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to='discover' onClick={toggle}>
            Discover
          </SidebarLink>
          <SidebarLink to='services' onClick={toggle}>
            Services
          </SidebarLink>
          <SidebarLink to='signup' onClick={toggle}>
            Signup
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <Link href='/user/signin' passHref>
            <SidebarRoute>Sign In</SidebarRoute>
          </Link>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
