import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBattery2BarSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery2BarSharp'
      short_name='Battery2Bar'

      {...props}
    >
      <path d="M7 22V4H10V2H14V4H17V22ZM9 16H15V6H9Z"/>
    </Icon>
  );
});

export default IconMaterialBattery2BarSharp;
