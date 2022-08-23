import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryProfileSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryProfileSharp'
      short_name='BatteryProfile'

      {...props}
    >
      <path d="M4 22V4h3V2h4v2h3v18Zm2-2h6V6H6Zm13-8-1.25-2.75L15 8l2.75-1.25L19 4l1.25 2.75L23 8l-2.75 1.25Z"/>
    </Icon>
  );
});

IconMaterialBatteryProfileSharp.displayName = 'AmauiIconMaterialBatteryProfileSharp';

export default IconMaterialBatteryProfileSharp;
