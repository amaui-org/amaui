import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryHoriz050 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryHoriz050'

      short_name='BatteryHoriz050'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 15V9H6v6Zm9 2H4v-3H2v-4h2V7h18Z"/>
    </Icon>
  );
});

IconMaterialBatteryHoriz050.displayName = 'AmauiIconMaterialBatteryHoriz050';

export default IconMaterialBatteryHoriz050;
