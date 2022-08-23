import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBattery50SharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery50SharpFilled'
      short_name='Battery50'

      {...props}
    >
      <path d="M7 22V4H10V2H14V4H17V22Z"/>
    </Icon>
  );
});

IconMaterialBattery50SharpFilled.displayName = 'AmauiIconMaterialBattery50SharpFilled';

export default IconMaterialBattery50SharpFilled;
