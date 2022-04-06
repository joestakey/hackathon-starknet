import styled from 'styled-components';
import background from '../../Images/background.svg';

export const HeroSection = styled.section`
  background-color: var(--primary-bg);
  background-image: url(${background});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 215%;
  height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

  @media screen and (min-width: 480px) {
    background-size: 153%;
    background-position: bottom;
    justify-content: center;
  }
`;
export const HeroContainer = styled.div`
`;
export const HeroHeading = styled.h1`
  display: block;
  width: 288px;
  padding: 0px 0px 1.6rem 0.67em;
  margin-top: 0 auto;
  font-size: 4.8rem;
  font-weight: 900;
  letter-spacing: -1.75px;
  line-height: 56px;
  @media screen and (min-width: 480px) {
    width: 754px;
    font-size: 104px;
    line-height: 104px;
    padding-bottom: 24px;
  }
  @media screen and (min-width: 768px) {
    font-size: 64px;
    line-height: 72px;
    letter-spacing: -2px;
  }
`;
export const HeroParagraph = styled.p`
  display: block;
  padding: 0px 0px 3.2rem 1rem;
  margin: 0 auto;
  width: 240px;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;

  @media screen and (min-width: 480px) {
    width: 400px;
    font-size: 18px;
    line-height: 24px;
    padding-bottom: 40px;
  }
`;
