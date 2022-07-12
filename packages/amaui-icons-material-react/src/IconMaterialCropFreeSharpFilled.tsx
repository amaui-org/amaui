import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCropFreeSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropFreeSharpFilled'
      short_name='CropFree'

      {...props}
    >
      <path d="M3 9V3H9V5H5V9ZM9 21H3V15H5V19H9ZM15 21V19H19V15H21V21ZM19 9V5H15V3H21V9Z"/>
    </Icon>
  )
});

export default IconMaterialCropFreeSharpFilled;
