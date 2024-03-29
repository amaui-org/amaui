import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryProfileW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryProfileW100'

      short_name='BatteryProfile'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.3 20.45V5.075h2.25v-1.5h3.2v1.5H14V20.45Zm.7-.7h6.3v-14H7Zm10.45-8.8-.75-1.7L15 8.5l1.7-.75.75-1.7.75 1.7 1.7.75-1.7.75Z"/>
    </Icon>
  );
});

IconMaterialBatteryProfileW100.displayName = 'AmauiIconMaterialBatteryProfileW100';

export default IconMaterialBatteryProfileW100;
