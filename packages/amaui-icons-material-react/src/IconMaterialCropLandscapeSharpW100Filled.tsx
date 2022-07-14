import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCropLandscapeSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropLandscapeSharpW100Filled'
      short_name='CropLandscape'

      {...props}
    >
      <path d="M3.3 18.7V5.3H20.7V18.7Z"/>
    </Icon>
  );
});

export default IconMaterialCropLandscapeSharpW100Filled;
