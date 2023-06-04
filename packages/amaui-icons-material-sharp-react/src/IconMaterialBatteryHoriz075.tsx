import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryHoriz075 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryHoriz075'

      short_name='BatteryHoriz075'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M22 17H4v-3H2v-4h2V7h18Zm-12-2V9H6v6Z"/>
    </Icon>
  );
});

IconMaterialBatteryHoriz075.displayName = 'AmauiIconMaterialBatteryHoriz075';

export default IconMaterialBatteryHoriz075;
