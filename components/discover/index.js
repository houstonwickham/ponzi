import Link from 'next/link';
import { Button } from '../ui/ButtonElement';
import DiscoverImage from '../../public/images/svg-4.svg';
import {
  DiscoverContainer,
  DiscoverWrapper,
  DiscoverRow,
  Column1,
  TextWrappeer,
  TopLine,
  Heading,
  Column2,
  Subtitle,
  BtnWrap,
  Img,
  ImgWrap,
} from './DiscoverElements';
const Discover = () => {
  return (
    <>
      <DiscoverContainer lightBg={true} id='discover'>
        <DiscoverWrapper>
          <DiscoverRow imgStart={false}>
            <Column1>
              <TextWrappeer>
                <TopLine>Discover</TopLine>
                <Heading lightText={false}>
                  Find out what ponzi can do for you
                </Heading>
                <Subtitle darkText={true}>
                  Sign up for an account with ponzi to gain access to all the
                  perks of being a member.
                </Subtitle>
                <BtnWrap>
                  <Link href='/user/signup' passHref>
                    <Button
                      href='home'
                      primary={false}
                      dark={false}
                      dark2={true}
                    >
                      Join Now
                    </Button>
                  </Link>
                </BtnWrap>
              </TextWrappeer>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={DiscoverImage} alt='Discover ponzi' />
              </ImgWrap>
            </Column2>
          </DiscoverRow>
        </DiscoverWrapper>
      </DiscoverContainer>
    </>
  );
};

export default Discover;
