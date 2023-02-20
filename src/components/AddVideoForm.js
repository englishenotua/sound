import React, { useState } from 'react';

const AddVideoForm = ({ onAddVideo }) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    if (!title || !url) {
      alert('Please provide both title and URL');
      return;
    }

    // const newVideo = {
    //   id: videos.length + 1,
    //   title: title,
    //   url: url,
    // };

    onAddVideo(newVideo);

    setTitle('');
    setUrl('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="url">URL:</label>
        <input type="text" id="url" value={url} onChange={(event) => setUrl(event.target.value)} />
      </div>
      <button type="submit">Add video</button>
    </form>
  );
};

export default AddVideoForm;
