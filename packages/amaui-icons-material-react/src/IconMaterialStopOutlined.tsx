import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStopOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StopOutlined'
      short_name='Stop'

      {...props}
    >
      <path d="M8 8V16ZM6 18V6H18V18ZM8 16H16V8H8Z"/>
    </Icon>
  )
});

export default IconMaterialStopOutlined;
