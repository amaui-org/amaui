import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCrop32Sharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop32Sharp'
      short_name='Crop32'

      {...props}
    >
      <path d="M3 20V4H21V20ZM5 18H19V6H5ZM5 18V6V18Z"/>
    </Icon>
  )
});

export default IconMaterialCrop32Sharp;
