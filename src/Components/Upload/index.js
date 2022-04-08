import React, { useState } from 'react';
import {
  HeroSection,
  HeroContainer,
  HeroParagraph,
  HeroHeading,
  TopUpContainer,
  TopUpLink,
  TopUpParagraph,
  UploadLabel,
  UploadForm,
  UploadLoading,
  LoadingAnim,
  UploadText,
} from './UploadElements';
import { ButtonIn } from '../ButtonElements';

import { Upload as UploadAWS } from '@aws-sdk/lib-storage';
import { S3Client } from '@aws-sdk/client-s3';
window.Buffer = window.Buffer || require('buffer').Buffer;

const Upload = () => {

  const creds = {
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  };

  const initialFormData = {
    name: '',
    description: '',
    animation_url: {},
  };
  const [formData, setFormData] = useState(initialFormData);
  const [isUploaded, setIsUploaded] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(22);
  const [isArtistMember, setIsArtistMember] = useState(0);

  const handleChange = (e) => {
    if (e.target.name === 'animation_url') {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };
  const uploadFile = (e) => {
    e.preventDefault();
    //check if artist member
    // const isMember = await ;
    //get song name here
    // const NFTIndex = await ;
    // setCurrentIndex(NFTIndex);
    console.log(formData.animation_url);
    const target = {
      Bucket: 'harpey',
      Key: `songs/${currentIndex}.mp3`,
      Body: formData.animation_url,
    };
    try {
      const parallelUploads3 = new UploadAWS({
        client: new S3Client({ region: 'eu-west-2', credentials: creds }),
        leavePartsOnError: false, // optional manually handle dropped parts
        params: target,
      });

      parallelUploads3.on('httpUploadProgress', (progress) => {
        console.log(progress);
      });

      parallelUploads3.done();
    } catch (e) {
      console.log(e);
    }
    const metadata = {
      ...formData,
      animation_url: `https://harpey.s3.eu-west-2.amazonaws.com/songs/${currentIndex}.mp3`,
    };
    const metadataJSON = JSON.stringify(metadata);
    const target2 = {
      Bucket: 'harpey',
      Key: `metadata/${currentIndex}.json`,
      Body: metadataJSON,
    };
    console.log(metadataJSON);
    try {
      const parallelUploads4 = new UploadAWS({
        client: new S3Client({ region: 'eu-west-2', credentials: creds }),
        leavePartsOnError: false, // optional manually handle dropped parts
        params: target2,
      });

      parallelUploads4.on('httpUploadProgress', (progress) => {
        console.log(progress);
      });

      parallelUploads4.done();
      setIsUploaded(true);
      setTimeout(() => setIsUploaded(false), 5000);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <HeroSection>
      {isUploaded && (
        <UploadLoading>
          <UploadText>Congratulations, your song is now available on StarkNet! </UploadText>
          <UploadText>🪐</UploadText>
        </UploadLoading>
      )}
      <HeroContainer>
        <HeroHeading>Upload your song now!</HeroHeading>
        <UploadForm onSubmit={uploadFile}>
          <div>
            <UploadLabel>Artist name</UploadLabel>
            <input type='text' name='name' id='name' onChange={handleChange} />
          </div>
          <div>
            <UploadLabel>Song name</UploadLabel>
            <input type='text' name='description' onChange={handleChange} />
          </div>
          <div>
            <UploadLabel>Song name</UploadLabel>
            <input
              type='file'
              name='animation_url'
              id='name'
              accept='.mp3,audio/*'
              onChange={handleChange}
            />
          </div>
          <div>
            <ButtonIn type='submit' value='Upload' />
          </div>
        </UploadForm>
      </HeroContainer>
      <TopUpContainer>
        <TopUpParagraph>
          Uploading a song costs 0.001ETH, you can top up your balance{' '}
        </TopUpParagraph>
        <TopUpLink onClick={uploadFile}>here</TopUpLink>
      </TopUpContainer>
    </HeroSection>
  );
};

export default Upload;
