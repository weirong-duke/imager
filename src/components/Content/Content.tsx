import React, {CSSProperties} from 'react';
import "./Content.scss";

import Image from "components/Image";
import {GRID_SPACING} from "pages/App";
import {Image as ImageType} from 'types/Image';

interface ContentProps {
  images: ImageType[];
  imagesPerRow: number;
}

const Content = ({images, imagesPerRow}: ContentProps) => {
  const gridStyle: CSSProperties = {
    gridGap: GRID_SPACING,
    gridTemplateColumns: `repeat(${imagesPerRow}, 240px)`
  }

  return <div className="Content">
    <div className="Content__title">Images</div>
    <div className="Content__container">
      <div className="Content__grid" style={gridStyle}>

        {images.map((image) => (<Image image={image} key={image.id} />))}

      </div>
    </div>

  </div>
}

export default Content;
