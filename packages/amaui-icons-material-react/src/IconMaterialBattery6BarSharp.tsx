import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBattery6BarSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery6BarSharp'
      short_name='Battery6Bar'

      {...props}
    >
      <path d="M7 22V4H10V2H14V4H17V22ZM9 8H15V6H9Z"/>
    </Icon>
  );
});

export default IconMaterialBattery6BarSharp;
