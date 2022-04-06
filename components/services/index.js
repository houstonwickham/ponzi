import Icon1 from '../../public/images/svg-1.svg';
import Icon2 from '../../public/images/svg-2.svg';
import Icon3 from '../../public/images/svg-3.svg';
import {
  ServicesContainer,
  ServiceCard,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesTextWrapper,
  ServicesWrapper,
} from './ServicesElements';
const index = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServiceCard>
          <ServicesIcon src={Icon2} />
          <ServicesTextWrapper>
            <ServicesH2>Taking your money</ServicesH2>
            <ServicesP>We can accept your money any time or place!</ServicesP>
          </ServicesTextWrapper>
        </ServiceCard>
        <ServiceCard>
          <ServicesIcon src={Icon1} />
          <ServicesTextWrapper>
            <ServicesH2>Holding your money</ServicesH2>
            <ServicesP>We promise to always keep your money safe!</ServicesP>
          </ServicesTextWrapper>
        </ServiceCard>
        <ServiceCard>
          <ServicesIcon src={Icon3} />
          <ServicesTextWrapper>
            <ServicesH2>Sailing Away</ServicesH2>
            <ServicesP>
              Once we have all your money, time to hit international waters!
            </ServicesP>
          </ServicesTextWrapper>
        </ServiceCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default index;
