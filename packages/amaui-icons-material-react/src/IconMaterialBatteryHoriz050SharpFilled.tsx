import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryHoriz050SharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryHoriz050SharpFilled'
      short_name='BatteryHoriz050'

      {...props}
    >
      <path d="M13 15V9H6v6Zm9 2H4v-3H2v-4h2V7h18Z"/>
    </Icon>
  )
});

export default IconMaterialBatteryHoriz050SharpFilled;
