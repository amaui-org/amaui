import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryVert050SharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryVert050SharpW100Filled'
      short_name='BatteryVert050'

      {...props}
    >
      <path d="M8.15 20.45V5.075h2.25v-1.5h3.2v1.5h2.25V20.45Zm.7-7.7h6.3v-7h-6.3Z"/>
    </Icon>
  );
});

IconMaterialBatteryVert050SharpW100Filled.displayName = 'AmauiIconMaterialBatteryVert050SharpW100Filled';

export default IconMaterialBatteryVert050SharpW100Filled;
