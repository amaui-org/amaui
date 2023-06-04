import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryFull = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryFull'

      short_name='BatteryFull'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 22V4h3V2h4v2h3v18Z"/>
    </Icon>
  );
});

IconMaterialBatteryFull.displayName = 'AmauiIconMaterialBatteryFull';

export default IconMaterialBatteryFull;
