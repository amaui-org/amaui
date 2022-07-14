import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCropLandscapeSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropLandscapeSharpW100'
      short_name='CropLandscape'

      {...props}
    >
      <path d="M3.3 18.7V5.3H20.7V18.7ZM4 18H20V6H4ZM4 18V6V18Z"/>
    </Icon>
  );
});

export default IconMaterialCropLandscapeSharpW100;
