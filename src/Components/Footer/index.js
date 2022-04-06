import React from 'react'
import { FooterContainer, FooterFooter, FooterImg, FooterLi, FooterLiLink, FooterLink, FooterParagraph, FooterUl } from './FooterElements'
import img1 from '../../Images/HarpyLogo.png';
import { ReactComponent as IconTwitter } from '../../Images/twitter.svg';
import { ReactComponent as IconStarknet } from '../../Images/icon-starknet.svg';
import icon2 from '../../Images/icon-starknet.svg';


const Footer = () => {
  return (
    <FooterFooter>
      <FooterContainer>
        <FooterLink to ='/'>
          <FooterImg src={img1} />
        </FooterLink>
        <FooterUl>
          <FooterLi>
            <FooterLiLink href='https://www.twitter.com/joestakey'>
              <IconTwitter />
            </FooterLiLink>
          </FooterLi>
          <FooterLi>
            <FooterLiLink>
              <IconStarknet />
            </FooterLiLink>
          </FooterLi>
        </FooterUl>
      </FooterContainer>
      <FooterParagraph>
        © {new Date().getFullYear()} Harpey. All rights reserved.
      </FooterParagraph>
    </FooterFooter>
  );
}

export default Footer