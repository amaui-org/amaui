import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCropLandscapeSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropLandscapeSharp'
      short_name='CropLandscape'

      {...props}
    >
      <path d="M2 20V4H22V20ZM4 18H20V6H4ZM4 18V6V18Z"/>
    </Icon>
  );
});

export default IconMaterialCropLandscapeSharp;
