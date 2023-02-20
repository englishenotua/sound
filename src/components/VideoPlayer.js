import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ videoUrl, title }) => {
  const [playerWidth, setPlayerWidth] = useState(0);
  const [playerHeight, setPlayerHeight] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateDimensions = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const maxPlayerWidth = screenWidth / 3 - 16;
      const maxPlayerHeight = screenHeight / 3 - 16;
      const aspectRatio = 16 / 9;

      let playerWidth = maxPlayerWidth;
      let playerHeight = maxPlayerHeight;

      if (playerWidth / aspectRatio > playerHeight) {
        playerWidth = playerHeight * aspectRatio;
      } else {
        playerHeight = playerWidth / aspectRatio;
      }

      setPlayerWidth(playerWidth);
      setPlayerHeight(playerHeight);
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  const handleVisibilityChange = (isVisible) => {
    setIsVisible(isVisible);
  };

  return (
    <div className="video-player-wrapper">
      <h3 className="video-player-title">{title}</h3>
      <div className={`video-player ${isVisible ? 'visible' : ''}`}>
        {isVisible && (
          <ReactPlayer
            url={videoUrl}
            width={playerWidth}
            height={playerHeight}
            playing
            controls
            onVisible={handleVisibilityChange}
            onEnded={handleVisibilityChange}
          />
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
