import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKitchenSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KitchenSharpW100Filled'
      short_name='Kitchen'

      {...props}
    >
      <path d="M5.3 9.5V3.3H18.7V9.5ZM8.25 8H8.95V5.5H8.25ZM8.25 15.85H8.95V11.7H8.25ZM5.3 20.7V10.2H18.7V20.7Z"/>
    </Icon>
  )
});

export default IconMaterialKitchenSharpW100Filled;
