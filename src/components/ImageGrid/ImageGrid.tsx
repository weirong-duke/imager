import React from 'react';

import 'components/ImageGrid/ImageGrid.scss';
import ComponentWithChildren from "types/ComponentWithChildren";

const ImageGrid = ({children}: ComponentWithChildren) => {
  const help = Array(50);
  console.log('help', help)
  return <div className="ImageGrid">
    {Array.from(Array(50)).map(() => <div>ack</div>)}
    {children}
  </div>
}

export default ImageGrid;
