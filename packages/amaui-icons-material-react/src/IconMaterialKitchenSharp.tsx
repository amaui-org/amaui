import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKitchenSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KitchenSharp'
      short_name='Kitchen'

      {...props}
    >
      <path d="M8 8V5H10V8ZM8 17V12H10V17ZM4 22V2H20V22ZM6 20H18V11H6ZM6 9H18V4H6Z"/>
    </Icon>
  )
});

export default IconMaterialKitchenSharp;
