import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMinimizeOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MinimizeOutlined'
      short_name='Minimize'

      {...props}
    >
      <path d="M6 21V19H18V21Z"/>
    </Icon>
  )
});

export default IconMaterialMinimizeOutlined;
