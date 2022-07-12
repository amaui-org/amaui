import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPublishSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PublishSharpW700Filled'
      short_name='Publish'

      {...props}
    >
      <path d="M10.425 21.6V13.95L8.025 16.375L5.8 14.15L12 7.95L18.2 14.15L15.975 16.375L13.575 13.95V21.6ZM2.35 9.35V1.65H21.6V9.35H18.45V4.8H5.5V9.35Z"/>
    </Icon>
  )
});

export default IconMaterialPublishSharpW700Filled;
