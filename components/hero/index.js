import { useState } from 'react';
import Link from 'next/link';
import { Button } from '../ui/ButtonElement';
import {
  HeroBg,
  HeroContainer,
  VideoBg,
  HeroContent,
  HeroBtnWrapper,
  HeroH1,
  HeroP,
  HeroSpan,
  ArrowForward,
  ArrowRight,
} from './HeroElements';
const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg
          autoPlay
          loop
          muted
          src={require('../../video/video.mp4')}
          type='video/mp4'
        />
      </HeroBg>
      <HeroContent>
        <HeroH1>
          It&apos;s not a <HeroSpan>scheme</HeroSpan> if you{' '}
          <HeroSpan>believe</HeroSpan>
        </HeroH1>
        <HeroP>
          Sign up for a new account today and receive $250 in credit toward your
          investment.
        </HeroP>
        <HeroBtnWrapper>
          <Link href='/user/signup' passHref>
            <Button
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary={true}
              dark={true}
            >
              Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </Link>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
