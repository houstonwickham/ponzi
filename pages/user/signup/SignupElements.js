import styled from 'styled-components';
export const Container = styled.div`
  background-color: #14213d;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 30px;
  z-index: 1;
  min-height: calc(100vh - 384px);
`;

export const Content = styled.div`
  z-index: 1;
  max-width: 1200px;
  margin: 100px 0;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const H1 = styled.h1`
  color: #fca311;
  font-size: 48px;
  text-align: center;
  opacity: 0;
  animation: fadeIn;
  animation-duration: 2.5s;
  animation-delay: 1s;
  animation-fill-mode: forwards;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const P1 = styled.p`
  margin-top: 24px;
  color: #ffffff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  opacity: 0;
  animation: fadeIn;
  animation-duration: 2.5s;
  animation-delay: 2s;
  animation-fill-mode: forwards;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480) {
    font-size: 18px;
  }
`;
