import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryHoriz000W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryHoriz000W100'

      short_name='BatteryHoriz000'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.75 15.15v-6.3h-14v6.3Zm.7.7H5.075V13.6h-1.5v-3.2h1.5V8.15H20.45Z"/>
    </Icon>
  );
});

IconMaterialBatteryHoriz000W100.displayName = 'AmauiIconMaterialBatteryHoriz000W100';

export default IconMaterialBatteryHoriz000W100;
