import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryFullSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryFullSharpFilled'
      short_name='BatteryFull'

      {...props}
    >
      <path d="M7 22V4H10V2H14V4H17V22Z"/>
    </Icon>
  );
});

IconMaterialBatteryFullSharpFilled.displayName = 'AmauiIconMaterialBatteryFullSharpFilled';

export default IconMaterialBatteryFullSharpFilled;
