import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFastRewindOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastRewindOutlined'
      short_name='FastRewind'

      {...props}
    >
      <path d="M21.5 18 12.5 12 21.5 6ZM11.5 18 2.5 12 11.5 6ZM9.5 12ZM19.5 12ZM9.5 14.25V9.75L6.1 12ZM19.5 14.25V9.75L16.1 12Z"/>
    </Icon>
  )
});

export default IconMaterialFastRewindOutlined;
