import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCropPortraitSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropPortraitSharp'
      short_name='CropPortrait'

      {...props}
    >
      <path d="M4 22V2H20V22ZM6 20H18V4H6ZM6 20V4V20Z"/>
    </Icon>
  )
});

export default IconMaterialCropPortraitSharp;
