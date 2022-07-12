import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryHoriz075Sharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryHoriz075Sharp'
      short_name='BatteryHoriz075'

      {...props}
    >
      <path d="M22 17H4v-3H2v-4h2V7h18Zm-12-2V9H6v6Z"/>
    </Icon>
  )
});

export default IconMaterialBatteryHoriz075Sharp;
