import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryHoriz000 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryHoriz000'

      short_name='BatteryHoriz000'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20 15V9H6v6Zm2 2H4v-3H2v-4h2V7h18Z"/>
    </Icon>
  );
});

IconMaterialBatteryHoriz000.displayName = 'AmauiIconMaterialBatteryHoriz000';

export default IconMaterialBatteryHoriz000;
