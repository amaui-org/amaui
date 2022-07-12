import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCropPortraitSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropPortraitSharpW700Filled'
      short_name='CropPortrait'

      {...props}
    >
      <path d="M3.15 22.85V1.15H20.85V22.85Z"/>
    </Icon>
  )
});

export default IconMaterialCropPortraitSharpW700Filled;
