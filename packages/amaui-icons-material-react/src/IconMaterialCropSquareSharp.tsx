import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCropSquareSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropSquareSharp'
      short_name='CropSquare'

      {...props}
    >
      <path d="M3 21V3H21V21ZM5 19H19V5H5ZM5 19V5V19Z"/>
    </Icon>
  )
});

export default IconMaterialCropSquareSharp;
