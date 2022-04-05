import Link from 'next/link';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterRoute,
  FooterWrap,
  MoneyWrap,
  MoneyWrapSmall,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from './FooterElements';
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterRoute to='/'>About Us</FooterRoute>
              <FooterRoute to='/'>Discover</FooterRoute>
              <FooterRoute to='/'>Services</FooterRoute>
              <Link href='/about/investors' passHref>
                <FooterLink>Investors</FooterLink>
              </Link>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <Link href='/contact/support' passHref>
                <FooterLink>Support</FooterLink>
              </Link>
              <Link href='/contact/press' passHref>
                <FooterLink>Press</FooterLink>
              </Link>
              <Link href='/contact/faq' passHref>
                <FooterLink>FAQ</FooterLink>
              </Link>
              <Link href='/contact/tos' passHref>
                <FooterLink>Terms of Service</FooterLink>
              </Link>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Careers</FooterLinkTitle>
              <Link href='/careers/openings' passHref>
                <FooterLink>Openings</FooterLink>
              </Link>
              <Link href='/careers/smbassadors' passHref>
                <FooterLink>Ambassadors</FooterLink>
              </Link>
              <Link href='/careers/agency' passHref>
                <FooterLink>Agency</FooterLink>
              </Link>
              <Link href='/careers/hire' passHref>
                <FooterLink>How We Hire</FooterLink>
              </Link>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Diversity & Impact</FooterLinkTitle>
              <Link href='/diversity/mentalhealth' passHref>
                <FooterLink>Mental Health</FooterLink>
              </Link>
              <Link href='/diversity/diversity' passHref>
                <FooterLink>Diversity, Inclusion & Belonging</FooterLink>
              </Link>
              <Link href='/diversity/impact' passHref>
                <FooterLink>Social Impact</FooterLink>
              </Link>
              <Link href='/diversity/equity' passHref>
                <FooterLink>Racial Equity</FooterLink>
              </Link>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <Link href='/' passHref>
              <SocialLogo>
                <MoneyWrap>
                  <RiMoneyDollarCircleLine />
                </MoneyWrap>
                ponzi
              </SocialLogo>
            </Link>
            <WebsiteRights>
              <MoneyWrapSmall>
                <RiMoneyDollarCircleLine />
              </MoneyWrapSmall>
              ponzi &copy; {new Date().getFullYear()} All rights reserved
            </WebsiteRights>
            <SocialIcons>
              <Link href='https://www.facebook.com/' passHref>
                <SocialIconLink target='_blank' aria-label='Facebook'>
                  <FaFacebook />
                </SocialIconLink>
              </Link>
              <Link href='https://www.instagram.com/' passHref>
                <SocialIconLink target='_blank' aria-label='Instagram'>
                  <FaInstagram />
                </SocialIconLink>
              </Link>
              <Link href='https://twitter.com/?lang=en' passHref>
                <SocialIconLink target='_blank' aria-label='Twitter'>
                  <FaTwitter />
                </SocialIconLink>
              </Link>
              <Link href='https://www.linkedin.com/' passHref>
                <SocialIconLink target='_blank' aria-label='Linkedin'>
                  <FaLinkedin />
                </SocialIconLink>
              </Link>
              <Link href='https://www.youtube.com/' passHref>
                <SocialIconLink target='_blank' aria-label='Youtube'>
                  <FaYoutube />
                </SocialIconLink>
              </Link>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
