import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBattery2BarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery2BarW100Filled'

      short_name='Battery2Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.15 20.45V5.075h2.25v-1.5h3.2v1.5h2.25V20.45Zm.7-4.7h6.3v-10h-6.3Z"/>
    </Icon>
  );
});

IconMaterialBattery2BarW100Filled.displayName = 'AmauiIconMaterialBattery2BarW100Filled';

export default IconMaterialBattery2BarW100Filled;
