import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCropLandscapeSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropLandscapeSharpFilled'
      short_name='CropLandscape'

      {...props}
    >
      <path d="M2 20V4H22V20Z"/>
    </Icon>
  )
});

export default IconMaterialCropLandscapeSharpFilled;
