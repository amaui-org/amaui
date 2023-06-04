import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBattery0BarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery0BarW100Filled'

      short_name='Battery0Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.15 20.45V5.075h2.25v-1.5h3.2v1.5h2.25V20.45Zm.7-.7h6.3v-14h-6.3Z"/>
    </Icon>
  );
});

IconMaterialBattery0BarW100Filled.displayName = 'AmauiIconMaterialBattery0BarW100Filled';

export default IconMaterialBattery0BarW100Filled;
