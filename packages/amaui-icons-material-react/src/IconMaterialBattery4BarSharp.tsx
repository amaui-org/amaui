import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBattery4BarSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery4BarSharp'
      short_name='Battery4Bar'

      {...props}
    >
      <path d="M7 22V4H10V2H14V4H17V22ZM9 12H15V6H9Z"/>
    </Icon>
  );
});

export default IconMaterialBattery4BarSharp;
