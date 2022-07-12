import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCropPortraitSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropPortraitSharpW700'
      short_name='CropPortrait'

      {...props}
    >
      <path d="M3.15 22.85V1.15H20.85V22.85ZM6.3 19.7H17.7V4.3H6.3ZM6.3 19.7V4.3V19.7Z"/>
    </Icon>
  )
});

export default IconMaterialCropPortraitSharpW700;
