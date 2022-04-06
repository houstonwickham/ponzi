import Link from 'next/link';
import { Button } from '../ui/ButtonElement';
import AboutImage from '../../public/images/svg-5.svg';
import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  Column1,
  TextWrappeer,
  TopLine,
  Heading,
  Column2,
  Subtitle,
  BtnWrap,
  Img,
  ImgWrap,
} from './AboutElements';
const about = () => {
  return (
    <>
      <AboutContainer lightBg={false} id='about'>
        <AboutWrapper>
          <AboutRow imgStart={true}>
            <Column1>
              <TextWrappeer>
                <TopLine>About ponzi</TopLine>
                <Heading lightText={true}>
                  Don&apos;t worry, you can trust us!
                </Heading>
                <Subtitle darkText={false}>
                  ponzi has been involved with other people&apos;s money since
                  1987. With a history of robbing Peter to pay Paul, you know
                  exactly what you get with ponzi.
                </Subtitle>
                <BtnWrap>
                  <Link href='/contact/support' passHref>
                    <Button primary={true} dark={true} dark2={true}>
                      Learn more
                    </Button>
                  </Link>
                </BtnWrap>
              </TextWrappeer>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={AboutImage} alt='About ponzi' />
              </ImgWrap>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default about;
