import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBattery30TwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery30TwoTone'
      short_name='Battery30'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V15h10V5.33z" fill-opacity=".3"/><path d="M7 15v5.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V15H7z"/>
    </Icon>
  );
});

IconMaterialBattery30TwoTone.displayName = 'AmauiIconMaterialBattery30TwoTone';

export default IconMaterialBattery30TwoTone;
