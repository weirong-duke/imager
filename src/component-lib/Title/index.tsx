import React from 'react';
import ComponentWithChildren from "types/ComponentWithChildren";

const Title = ({children}: ComponentWithChildren) => {
  return <div>
    {children}
  </div>
}

export default Title;



