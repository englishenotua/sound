import React from 'react';
import VideoGrid from './videoGrid';


const videos = [
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
    url: 'https://www.youtube.com/watch?v=pKgoHACfWv8',
  },
  {
    id: 4,
    title: 'Video 4',
    url: 'https://www.youtube.com/watch?v=QUmVh3tZoYY',
  },
  {
    id: 5,
    title: 'Video 5',
    url: 'https://www.youtube.com/watch?v=3tmd-ClpJxA',
  },
  {
    id: 6,
    title: 'Video 6',
    url: 'https://www.youtube.com/watch?v=6Dh-RL__uN4',
  },
  {
    id: 7,
    title: 'Video 7',
    url: 'https://www.youtube.com/watch?v=3tmd-ClpJxA',
  },
  {
    id: 8,
    title: 'Video 8',
    url: 'https://www.youtube.com/watch?v=QUmVh3tZoYY',
  },
  {
    id: 9,
    title: 'Video 9',
    url: 'https://www.youtube.com/watch?v=6Dh-RL__uN4',
  },
];

function ReactPlayer() {
  return (
    <div className="App">
      <div className="title"><h1>My Video Playlist</h1></div>
      <VideoGrid videos={videos} />
    </div>
  );
}

export default ReactPlayer;
