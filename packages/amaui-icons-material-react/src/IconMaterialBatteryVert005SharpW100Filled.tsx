import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryVert005SharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryVert005SharpW100Filled'
      short_name='BatteryVert005'

      {...props}
    >
      <path d="M8.85 18.75h6.3v-13h-6.3Zm-.7 1.7V5.075h2.25v-1.5h3.2v1.5h2.25V20.45Z"/>
    </Icon>
  );
});

IconMaterialBatteryVert005SharpW100Filled.displayName = 'AmauiIconMaterialBatteryVert005SharpW100Filled';

export default IconMaterialBatteryVert005SharpW100Filled;
