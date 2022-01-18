import React, {CSSProperties} from 'react';
import "./Content.scss";

import Image from "components/Image";
import Dropdown from "component-lib/Dropdown";
import {GRID_SPACING, ImageSortOptions} from "pages/App";
import {Image as ImageType} from 'types/Image';

interface ContentProps {
  images: ImageType[];
  imagesPerRow: number;
  setImageSort(sort: ImageSortOptions): void;
}


const Content = ({images, imagesPerRow, setImageSort}: ContentProps) => {
  const gridStyle: CSSProperties = {
    gridGap: GRID_SPACING,
    gridTemplateColumns: `repeat(${imagesPerRow}, 240px)`
  }


  const dropdownOptions = {
    "Oldest": ImageSortOptions.Id,
    "Newest": ImageSortOptions.CreatedDate
  }

  const handleSortSelect = (option: ImageSortOptions) => {
    setImageSort(option);
  }

  return <div className="Content">
    <div className="Content__header">
      <div className="Content__title">Images</div>
      <div className="Content__options">
        <Dropdown defaultOptionName={"Oldest"} onSelectValue={handleSortSelect} options={dropdownOptions} />
      </div>
    </div>
    <div className="Content__container">
      <div className="Content__grid" style={gridStyle}>
        {images.map((image) => (<Image image={image} key={image.id} />))}
      </div>
    </div>

  </div>
}

export default Content;
