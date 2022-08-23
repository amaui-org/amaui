import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryVert020SharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryVert020SharpW100Filled'
      short_name='BatteryVert020'

      {...props}
    >
      <path d="M8.85 16.75h6.3v-11h-6.3Zm-.7 3.7V5.075h2.25v-1.5h3.2v1.5h2.25V20.45Z"/>
    </Icon>
  );
});

IconMaterialBatteryVert020SharpW100Filled.displayName = 'AmauiIconMaterialBatteryVert020SharpW100Filled';

export default IconMaterialBatteryVert020SharpW100Filled;
