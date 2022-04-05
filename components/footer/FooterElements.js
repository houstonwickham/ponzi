import styled from 'styled-components';
export const FooterContainer = styled.div`
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(20, 33, 61, 1) 35%
  );
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  @media screen and (max-width: 640px) {
    padding: 0px 12px 24px;
  }
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;
  @media screen and (max-width: 820px) {
    width: 100px;
  }
  @media screen and (max-width: 640px) {
    width: 180px;
  }
  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px 20px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 15px;
  margin-bottom: 12px;
`;

export const FooterLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 13px;
  &:hover {
    color: #fca311;
    transition: 0.3s ease-out;
    animation: headShake;
    animation-duration: 1s;
  }
  @media screen and (max-width: 820px) {
    &:hover {
      color: #ffffff;
    }
  }
`;

export const MoneyWrap = styled.div`
  padding-right: 3px;
  display: flex;
`;

export const MoneyWrapSmall = styled.div`
  padding-right: 1px;
  display: flex;
`;

export const SocialMedia = styled.div`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled.a`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
  &:hover {
    color: #fca311;
    transition: 0.3s ease-out;
    animation: headShake;
    animation-duration: 1s;
  }
  @media screen and (max-width: 820px) {
    &:hover {
      color: #ffffff;
    }
  }
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  @media screen and (max-width: 620px) {
    width: 200px;
  }
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  &:hover {
    color: #fca311;
    transition: 0.3s ease-out;
    animation: headShake;
    animation-duration: 1s;
  }
  @media screen and (max-width: 820px) {
    &:hover {
      color: #ffffff;
    }
  }
`;
