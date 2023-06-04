import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryHoriz075Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryHoriz075Filled'

      short_name='BatteryHoriz075'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M22 17H4v-3H2v-4h2V7h18Zm-12-2V9H6v6Z"/>
    </Icon>
  );
});

IconMaterialBatteryHoriz075Filled.displayName = 'AmauiIconMaterialBatteryHoriz075Filled';

export default IconMaterialBatteryHoriz075Filled;
