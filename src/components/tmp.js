import React, { useState } from 'react';
import VideoGrid from './videoGrid';
import AddVideoForm from './AddVideoForm';

const ReactPlayer = () => {
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: 'Video 1',
      url: 'https://www.youtube.com/watch?v=4Z4E8L3Fm60',
    },
    {
      id: 2,
      title: 'Video 2',
      url: 'https://www.youtube.com/watch?v=EBQsC6JiHfc',
    },
    {
      id: 3,
      title: 'Video 3',
      url: 'https://www.youtube.com/watch?v=xxxxxxxxxxx', // Replace with a valid YouTube video ID
    },
  ]);

  const addVideo = (title, url) => {
    // Parse the YouTube video ID from the URL
    const videoId = url.split('v=')[1];

    // Construct the new video object
    const newVideo = {
      id: videos.length + 1,
      title: title,
      url: `https://www.youtube.com/watch?v=${videoId}`,
    };

    // Add the new video to the list
    setVideos([...videos, newVideo]);
  };

  return (
    <div>
      <VideoGrid videos={videos} />
      <AddVideoForm onAddVideo={addVideo} />
    </div>
  );
};

export default ReactPlayer;
