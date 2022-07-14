import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCropPortraitSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropPortraitSharpFilled'
      short_name='CropPortrait'

      {...props}
    >
      <path d="M4 22V2H20V22Z"/>
    </Icon>
  );
});

export default IconMaterialCropPortraitSharpFilled;
