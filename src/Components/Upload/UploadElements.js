import styled  from 'styled-components';
import { Link } from 'react-router-dom';



export const UploadLoading = styled.div`
  background-color: var(--hero-bg-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 8rem;
  padding-top: 2rem;
  z-index: 4;
`;

export const UploadText = styled.h2`
  font-size: 3.2rem;

  @media screen and (min-width: 480px) {
    font-size: 4rem;
  }
`;
export const HeroSection = styled.section`
  background-color: var(--primary-bg);
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
export const HeroHeading = styled.h2`
  display: block;
  width: 288px;
  padding: 0px 0px 1.6rem 0.67em;
  margin-top: 0 auto;
  font-size: 3.2rem;
  font-weight: 700;
  letter-spacing: -1.75px;
  line-height: 56px;
  @media screen and (min-width: 480px) {
    width: 754px;
    font-size: 3.6rem;
    line-height: 4.8rem;
    padding-bottom: 24px;
  }
  @media screen and (min-width: 768px) {
    font-size: 4.2rem;
    line-height: 5.6rem;
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
export const TopUpParagraph = styled.p`
  display: inline;
  padding: 0px 0px 1rem 1rem;
  margin: 0 auto;
  width: 240px;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;

  @media screen and (min-width: 480px) {
    width: 400px;
    font-size: 1.4rem;
    line-height: 24px;
    padding-bottom: 40px;
  }
`;

export const TopUpContainer = styled.div`
  display: block;
`;

export const TopUpLink = styled.button`
  display: inline;
  all: unset;
  text-decoration: underline;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  cursor: pointer;
  padding-top: 4rem;

  @media screen and (min-width: 480px) {
    font-size: 1.4rem;
    line-height: 24px;
    padding-bottom: 40px;
  }

  
`;
export const UploadForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;
export const UploadLabel = styled.label`
  all: unset;
  font-size: 1.6rem;
  line-height: 24px;
  padding-bottom: 40px;
`;

export const UploadInput = styled.input`

`;
