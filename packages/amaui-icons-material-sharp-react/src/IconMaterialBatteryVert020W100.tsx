import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryVert020W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryVert020W100'

      short_name='BatteryVert020'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.85 16.75h6.3v-11h-6.3Zm-.7 3.7V5.075h2.25v-1.5h3.2v1.5h2.25V20.45Z"/>
    </Icon>
  );
});

IconMaterialBatteryVert020W100.displayName = 'AmauiIconMaterialBatteryVert020W100';

export default IconMaterialBatteryVert020W100;
