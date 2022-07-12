import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAccountBalanceOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountBalanceOutlined'
      short_name='AccountBalance'

      {...props}
    >
      <path d="M5 17V10H7V17ZM11 17V10H13V17ZM2 21V19H22V21ZM17 17V10H19V17ZM2 8V6L12 1L22 6V8ZM6.45 6H12H17.55ZM6.45 6H17.55L12 3.25Z"/>
    </Icon>
  )
});

export default IconMaterialAccountBalanceOutlined;
