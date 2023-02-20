import React from 'react';
import ReactPlayer from 'react-player';
import './VideoGrid.css';

const VideoGrid = ({ videos }) => {
  const columns = Math.ceil(videos.length / 3); // Обчислюємо кількість колонок

  return (
    <div className="VideoGrid">
      {[...Array(columns)].map((col, colIndex) => (
        <div className="VideoGrid-column" key={colIndex}>
          {videos
            .slice(colIndex * 3, colIndex * 3 + 3) // Обираємо відео для поточної колонки
            .map((video) => (
              <div className="VideoGrid-player" key={video.id}>
                <h3 className="VideoGrid-title">{video.title}</h3>
                <ReactPlayer
                  url={video.url}
                  controls={true}
                  width="100%"
                  height="100%"
                />
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;
