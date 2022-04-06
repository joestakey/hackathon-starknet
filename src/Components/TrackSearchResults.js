import React from 'react';
import styled from 'styled-components';


const TrackContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: center;
  cursor: pointer;
`;


const TrackSearchResults = ({track, chooseTrack}) => {

  const playSong = () => {
    chooseTrack(track);
  }

  return (
    <TrackContainer onClick={playSong}>
      <div> { track.description } </div>
      <div> { track.name } </div>
    </TrackContainer>
  )
}

export default TrackSearchResults
