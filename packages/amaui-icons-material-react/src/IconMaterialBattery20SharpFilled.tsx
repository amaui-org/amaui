import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBattery20SharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery20SharpFilled'
      short_name='Battery20'

      {...props}
    >
      <path d="M7 22V4H10V2H14V4H17V22Z"/>
    </Icon>
  );
});

IconMaterialBattery20SharpFilled.displayName = 'AmauiIconMaterialBattery20SharpFilled';

export default IconMaterialBattery20SharpFilled;
