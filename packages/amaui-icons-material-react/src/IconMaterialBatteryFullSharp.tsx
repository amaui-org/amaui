import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryFullSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryFullSharp'
      short_name='BatteryFull'

      {...props}
    >
      <path d="M7 22V4H10V2H14V4H17V22Z"/>
    </Icon>
  );
});

IconMaterialBatteryFullSharp.displayName = 'AmauiIconMaterialBatteryFullSharp';

export default IconMaterialBatteryFullSharp;
