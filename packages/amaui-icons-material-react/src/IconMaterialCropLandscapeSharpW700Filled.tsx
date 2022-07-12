import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCropLandscapeSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropLandscapeSharpW700Filled'
      short_name='CropLandscape'

      {...props}
    >
      <path d="M1.15 20.85V3.15H22.85V20.85Z"/>
    </Icon>
  )
});

export default IconMaterialCropLandscapeSharpW700Filled;
