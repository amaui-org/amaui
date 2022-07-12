import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpaceBarOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaceBarOutlined'
      short_name='SpaceBar'

      {...props}
    >
      <path d="M4 15V9H6V13H18V9H20V15Z"/>
    </Icon>
  )
});

export default IconMaterialSpaceBarOutlined;
