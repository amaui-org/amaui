import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryCharging20W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryCharging20W100'

      short_name='BatteryCharging20'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.65 21.35V4.65h2.75v-1.5h3.2v1.5h2.75v16.7Zm4-3.95 2.25-4.25h-1.55V9.6l-2.25 4.25h1.55Z"/>
    </Icon>
  );
});

IconMaterialBatteryCharging20W100.displayName = 'AmauiIconMaterialBatteryCharging20W100';

export default IconMaterialBatteryCharging20W100;
