import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKitchenSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KitchenSharpW700Filled'
      short_name='Kitchen'

      {...props}
    >
      <path d="M3.15 9.8V1.15H20.85V9.8ZM7.925 8.3H10.3V5.3H7.925ZM7.925 17.075H10.3V12.3H7.925ZM3.15 22.85V10.8H20.85V22.85Z"/>
    </Icon>
  )
});

export default IconMaterialKitchenSharpW700Filled;
