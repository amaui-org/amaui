import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBattery80SharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery80SharpFilled'
      short_name='Battery80'

      {...props}
    >
      <path d="M7 22V4H10V2H14V4H17V22Z"/>
    </Icon>
  );
});

IconMaterialBattery80SharpFilled.displayName = 'AmauiIconMaterialBattery80SharpFilled';

export default IconMaterialBattery80SharpFilled;
