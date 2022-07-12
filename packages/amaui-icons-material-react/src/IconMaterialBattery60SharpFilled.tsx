import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBattery60SharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery60SharpFilled'
      short_name='Battery60'

      {...props}
    >
      <path d="M7 22V4H10V2H14V4H17V22Z"/>
    </Icon>
  )
});

export default IconMaterialBattery60SharpFilled;
