import styled from 'styled-components';
import Image from 'next/image';

export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  @media screen and (max-width: 1000px) {
    height: 1000px;
  }
  @media screen and (max-width: 768px) {
    height: 1270px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  padding: 0 50px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServiceCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 1000px) {
    grid-column: span 2;
    &:nth-last-child(1):nth-child(odd) {
      grid-column: 2 / span 2;
    }
  }
  @media screen and (max-width: 768px) {
    grid-column: span 1;
    &:nth-last-child(1):nth-child(odd) {
      grid-column: 1 / span 1;
    }
  }

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled(Image)`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fca311;
  margin-bottom: 64px;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
