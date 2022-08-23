import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryHoriz000Sharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryHoriz000Sharp'
      short_name='BatteryHoriz000'

      {...props}
    >
      <path d="M20 15V9H6v6Zm2 2H4v-3H2v-4h2V7h18Z"/>
    </Icon>
  );
});

IconMaterialBatteryHoriz000Sharp.displayName = 'AmauiIconMaterialBatteryHoriz000Sharp';

export default IconMaterialBatteryHoriz000Sharp;
