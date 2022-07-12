import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSkipNextOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkipNextOutlined'
      short_name='SkipNext'

      {...props}
    >
      <path d="M16.5 18V6H18.5V18ZM5.5 18V6L14.5 12ZM7.5 12ZM7.5 14.25 10.9 12 7.5 9.75Z"/>
    </Icon>
  )
});

export default IconMaterialSkipNextOutlined;
