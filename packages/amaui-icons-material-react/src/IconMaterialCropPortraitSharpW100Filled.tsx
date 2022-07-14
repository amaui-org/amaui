import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCropPortraitSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropPortraitSharpW100Filled'
      short_name='CropPortrait'

      {...props}
    >
      <path d="M5.3 20.7V3.3H18.7V20.7Z"/>
    </Icon>
  );
});

export default IconMaterialCropPortraitSharpW100Filled;
