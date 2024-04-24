import React from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = ({ playlistId }) => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
      listType: 'playlist', // Set the list type to 'playlist'
      list: playlistId,     // Pass the playlist ID
    },
  };

  return <YouTube opts={opts} />;
};

export default VideoPlayer;

