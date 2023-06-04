import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBattery4BarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery4BarW100Filled'

      short_name='Battery4Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.15 20.45V5.075h2.25v-1.5h3.2v1.5h2.25V20.45Zm.7-8.7h6.3v-6h-6.3Z"/>
    </Icon>
  );
});

IconMaterialBattery4BarW100Filled.displayName = 'AmauiIconMaterialBattery4BarW100Filled';

export default IconMaterialBattery4BarW100Filled;
