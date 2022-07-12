import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMaximizeOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MaximizeOutlined'
      short_name='Maximize'

      {...props}
    >
      <path d="M3 5V3H21V5Z"/>
    </Icon>
  )
});

export default IconMaterialMaximizeOutlined;
