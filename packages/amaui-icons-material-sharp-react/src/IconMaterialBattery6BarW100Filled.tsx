import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBattery6BarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery6BarW100Filled'

      short_name='Battery6Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.15 20.45V5.075h2.25v-1.5h3.2v1.5h2.25V20.45Zm.7-12.7h6.3v-2h-6.3Z"/>
    </Icon>
  );
});

IconMaterialBattery6BarW100Filled.displayName = 'AmauiIconMaterialBattery6BarW100Filled';

export default IconMaterialBattery6BarW100Filled;
