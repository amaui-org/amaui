import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCropSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropSharpW700Filled'
      short_name='Crop'

      {...props}
    >
      <path d="M16.425 14.425V7.575H9.575V4.425H19.575V14.425ZM16.425 23.2V19.575H4.425V7.575H0.8V4.425H4.425V0.8H7.575V16.425H23.2V19.575H19.575V23.2Z"/>
    </Icon>
  )
});

export default IconMaterialCropSharpW700Filled;
