import React from 'react'
import { HeroSection, HeroContainer, HeroParagraph, HeroHeading } from './HeroElements'
import { ButtonButt } from '../ButtonElements'

const Hero = () => {
  return (
    <HeroSection>
      <HeroContainer>
        <HeroHeading>
          The future of music
        </HeroHeading>
      </HeroContainer>
      <HeroParagraph>
        A decentralized platform connecting users to artists
      </HeroParagraph>
      <ButtonButt>
        Try it now
      </ButtonButt>
    </HeroSection>
  )
}

export default Hero