import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryHoriz050W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryHoriz050W100'

      short_name='BatteryHoriz050'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.75 15.15v-6.3h-7v6.3Zm7.7.7H5.075V13.6h-1.5v-3.2h1.5V8.15H20.45Z"/>
    </Icon>
  );
});

IconMaterialBatteryHoriz050W100.displayName = 'AmauiIconMaterialBatteryHoriz050W100';

export default IconMaterialBatteryHoriz050W100;
