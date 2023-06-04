import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryVert005W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryVert005W100Filled'

      short_name='BatteryVert005'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.85 18.75h6.3v-13h-6.3Zm-.7 1.7V5.075h2.25v-1.5h3.2v1.5h2.25V20.45Z"/>
    </Icon>
  );
});

IconMaterialBatteryVert005W100Filled.displayName = 'AmauiIconMaterialBatteryVert005W100Filled';

export default IconMaterialBatteryVert005W100Filled;
