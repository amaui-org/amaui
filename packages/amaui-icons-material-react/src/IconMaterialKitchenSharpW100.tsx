import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKitchenSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KitchenSharpW100'
      short_name='Kitchen'

      {...props}
    >
      <path d="M8.25 8V5.5H8.95V8ZM8.25 15.85V11.7H8.95V15.85ZM5.3 20.7V3.3H18.7V20.7ZM6 20H18V10.2H6ZM6 9.5H18V4H6Z"/>
    </Icon>
  );
});

export default IconMaterialKitchenSharpW100;
