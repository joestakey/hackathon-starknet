import React, { useState, useEffect} from 'react'
import { BrowseSection, BrowseContainer, BrowseParagraph, BrowseHeading, TopUpContainer,TopUpLink, TopUpParagraph, UploadLabel, UploadForm } from './BrowseElements'
import { ButtonIn } from '../ButtonElements'
import ReactPlayer from 'react-player'
import { aws } from '../../keys';

const Browse = () => {

  const [songUrl, setSongUrl] = useState('')
  const [currentIndex, setCurrentIndex] = useState(1);


  useEffect(() => {
    setSongUrl(
      `https://harpey.s3.eu-west-2.amazonaws.com/songs/${currentIndex}.mp3`
    );
  }, [currentIndex])
  

  return (
    <BrowseSection>
      <BrowseContainer>
        <figure>
          <audio controls src={songUrl}>
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </figure>
      </BrowseContainer>
      <TopUpContainer>
        <TopUpParagraph>
          Cannot play the song? You need to do two things
        </TopUpParagraph>
        <br />
        <TopUpParagraph>- first, increase your allowance{' '}</TopUpParagraph>
        <TopUpLink>here</TopUpLink>
        <br />
        <TopUpParagraph>- then, you can{' '}</TopUpParagraph>
        <TopUpLink>subscribe</TopUpLink>
        <br />
        <TopUpParagraph>- when your subscription is valid, you can play the songs!</TopUpParagraph>
      </TopUpContainer>
    </BrowseSection>
  );
}

export default Browse