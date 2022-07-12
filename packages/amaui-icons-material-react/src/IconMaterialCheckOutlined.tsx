import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCheckOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckOutlined'
      short_name='Check'

      {...props}
    >
      <path d="M9.55 18 3.85 12.3 5.275 10.875 9.55 15.15 18.725 5.975 20.15 7.4Z"/>
    </Icon>
  )
});

export default IconMaterialCheckOutlined;
