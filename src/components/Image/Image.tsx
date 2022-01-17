import React from 'react';
import './Image.scss';

import {Image as ImageType} from "types/Image";

interface ImageProps {
  image: ImageType
}

const Image = ({image}: ImageProps) => {
  const {name, data} = image;
  return <div className="Image">
    <img className="Image__image" src={data} alt={name || ''} />
    <div className="Image__details">
      <div className={"Image__details__name"}>
        {name}
      </div>
    </div>
  </div>
}

export default Image;

