import React, { useState, useEffect} from 'react'
import { BrowseSection, BrowseContainer, BrowseParagraph, BrowseHeading, TopUpContainer,TopUpLink, TopUpParagraph, UploadLabel, UploadForm } from './BrowseElements'
import { ButtonIn } from '../ButtonElements'
const aws = require('aws-sdk');

const Browse = () => {

  const [songUrl, setSongUrl] = useState('')
  const [currentIndex, setCurrentIndex] = useState(1);
  let s3 = new aws.S3({
    region: 'eu-west-2',
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  });

  const searchSong = () => {
    s3.listObjects({ Bucket: 'harpey' }, function(err, data) {
      if (err) {
        console.log(err)
      } else {
        console.log(data)
      }
    });
  }
  const updateSong = () => {
    try {
      s3.getObject({
      Bucket: 'harpey',
      Key: `songs/${currentIndex}.mp3`}, function(err, data) {
        if (err) {
          console.log("Error", err);
        } else {
          console.log("Success", data);
          const blob = new Blob([new Uint8Array(data.Body)], {
            type: 'audio/mp3',
          });
          console.log(`blob result: ${blob}`)
          const url = URL.createObjectURL(blob);
          console.log(url);
          setSongUrl(url)
        }
      })
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    updateSong();
    // setSongUrl(
    //   `https://harpey.s3.eu-west-2.amazonaws.com/songs/${currentIndex}.mp3`
    // );
    console.log()
  }, [])
  

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