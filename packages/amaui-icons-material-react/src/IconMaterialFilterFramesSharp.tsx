import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilterFramesSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterFramesSharp'
      short_name='FilterFrames'

      {...props}
    >
      <path d="M2 22V4H8L12 0L16 4H22V22ZM4 20H20V6H4ZM6 18V8H18V18ZM8 16V10V16ZM8 16H16V10H8Z"/>
    </Icon>
  )
});

export default IconMaterialFilterFramesSharp;
