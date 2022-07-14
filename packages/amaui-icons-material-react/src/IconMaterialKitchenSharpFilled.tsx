import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKitchenSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KitchenSharpFilled'
      short_name='Kitchen'

      {...props}
    >
      <path d="M4 9.5V2H20V9.5ZM8 8H10V5H8ZM8 17H10V12H8ZM4 22V10.5H20V22Z"/>
    </Icon>
  );
});

export default IconMaterialKitchenSharpFilled;
