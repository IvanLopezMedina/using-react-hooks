import React, {useRef} from 'react';
import ImageToggleOnMouseOver from '../src/ImageToggleOnMouseOver';

const ImageChangeOnMouseOver = () => {
  return (
    <>
      <ImageToggleOnMouseOver
        primaryImage="/static/speakers/bw/Speaker-187.jpg"
        secondaryImage="/static/speakers/Speaker-187.jpg"
        alt=""
      />

      <ImageToggleOnMouseOver
        primaryImage="/static/speakers/bw/Speaker-1124.jpg"
        secondaryImage="/static/speakers/Speaker-1124.jpg"
        alt=""
      />
    </>
  );
};

export default ImageChangeOnMouseOver;
