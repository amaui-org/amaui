import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryFullW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryFullW100'

      short_name='BatteryFull'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.65 21.35V4.65h2.75v-1.5h3.2v1.5h2.75v16.7Z"/>
    </Icon>
  );
});

IconMaterialBatteryFullW100.displayName = 'AmauiIconMaterialBatteryFullW100';

export default IconMaterialBatteryFullW100;
