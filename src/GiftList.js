import React from 'react';

const GifList = ({ gifs }) => {
  const gifItems = gifs.map((gif) => (
    <li key={gif.id}>
      <img src={gif.images.original.url} alt={gif.title} />
    </li>
  ));

  return (
    <ul>
      {gifItems}
    </ul>
  );
};

export default GifList;
