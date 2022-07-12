import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCropPortraitSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropPortraitSharpW100'
      short_name='CropPortrait'

      {...props}
    >
      <path d="M5.3 20.7V3.3H18.7V20.7ZM6 20H18V4H6ZM6 20V4V20Z"/>
    </Icon>
  )
});

export default IconMaterialCropPortraitSharpW100;
